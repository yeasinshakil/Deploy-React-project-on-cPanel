import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeHero from './components/pages/home/HomeHero';
import HomeReview from './components/pages/home/HomeReview/HomeReview';
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
          <HomeReview></HomeReview>
          </>
        }></Route>
        
      </Routes>
    </div>
  )
}

export default App
