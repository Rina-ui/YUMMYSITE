import { Route, Routes, useLocation } from 'react-router-dom'; 
import Header from './components/Header';
import Yummy from './components/Yummy';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Main from './pages/Main';
import Recipes from './pages/Recipes';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <div>
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>

      {location.pathname === "/main" && <Yummy />}
    </div>
  );
}

export default App;
