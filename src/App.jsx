import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeAllInOne from './components/pages/home/HomeAllinone/HomeAllInOne';
import HomeDataCeter from './components/pages/home/HomeDataCenter/HomeDataCeter';
import HomeHero from './components/pages/home/HomeHero';
import HostingPack from './components/pages/home/HomeHosting/HostingPack';
import MaxmizeSpeed from './components/pages/home/HomeMaxmizeSpeed/MaxmizeSpeed';
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
          <HostingPack></HostingPack>
          <HomeDataCeter></HomeDataCeter>
          <HomeAllInOne></HomeAllInOne>
          <MaxmizeSpeed></MaxmizeSpeed>
          </>
        }></Route>
        
      </Routes>
    </div>
  )
}

export default App
