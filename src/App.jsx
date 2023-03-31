import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeHero from './components/pages/home/HomeHero';
import NavBar from './components/pages/home/navbar/NavBar';
import Ukraine from './components/ukraine/Ukraine';

function App() {

  return (
    <div className="App">
      <Ukraine/>
      <Routes>
        <Route path='/' element={
          <>
          <NavBar></NavBar>
          <HomeHero></HomeHero>
          </>
        }></Route>
        
      </Routes>
    </div>
  )
}

export default App
