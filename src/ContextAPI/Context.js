import React, { createContext, useContext, useEffect, useState } from 'react'

export const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setError] = useState({ show: "false", msg: '' });
    const [query, setQuery] = useState("titanic");

    const getMovies = async (url) => {

        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
                setError({
                    show: false,
                    msg: ""
                });
            } else{
                setError({
                    show: true,
                    msg: data.Error
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // Debouncing : makes the function wait for its next request and return a single response not in every character 
        let timeOut = setTimeout(() => {
            getMovies(`${API}&s=${query}`);
        }, 500);

        return () => clearTimeout(timeOut);
    }, [query]);

    return <AppContext.Provider value={{ isLoading, movie, isError, query, setQuery }}> {children} </AppContext.Provider>

}

// (consumer) global custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useGlobalContext };