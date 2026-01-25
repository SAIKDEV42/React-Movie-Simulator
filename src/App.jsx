 import './css/App.css'
 import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import MyHome from './pages/MyHome';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">

        <Routes>
          <Route path='/' element={<MyHome />} ></Route>
          <Route path="/favorites" element={<Favorites />} ></Route>
        </Routes>
      </main>

    </MovieProvider>
  )
}

export default App