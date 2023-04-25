import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './components/About';
import BookDetails from './components/Book/BookDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home /> }></Route>
        <Route path='/add' element={ <AddBook /> }></Route>
        <Route path='/books' element={ <Books /> }></Route>
        <Route path='/about' element={ <About /> }></Route>
        <Route exact path='/books/:id' element={ <BookDetails /> }></Route>
      </Routes>
    </>
  );
}

export default App;
