import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SingleMovie from './Pages/SingleMovie';
import Error from './Pages/Error';
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='movie/:id' element={<SingleMovie />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
