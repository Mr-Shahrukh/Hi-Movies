import React from 'react'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Favourites from './pages/Favorites';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { MovieProvider } from './context/MovieContext';



const App = () => {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/favourites' element={<Favourites />}/>
      </Routes>
      </main>
      <Footer />
    </MovieProvider>

  );
}

export default App