import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdvancedSecurity from './components/pages/home/advancedSecurity/AdvancedSecurity';
import FreeMigration from './components/pages/home/FreeMigrationSection/FreeMigration';
import CustomSupport from './components/pages/home/customSupport/CustomSupport';
import HomeAllInOne from './components/pages/home/HomeAllinone/HomeAllInOne';
import HomeDataCeter from './components/pages/home/HomeDataCenter/HomeDataCeter';
import HomeHero from './components/pages/home/HomeHero';
import HostingPack from './components/pages/home/HomeHosting/HostingPack';
import MaxmizeSpeed from './components/pages/home/HomeMaxmizeSpeed/MaxmizeSpeed';
import HomeReview from './components/pages/home/HomeReview/HomeReview';
import NavBar from './components/pages/home/navbar/NavBar';
import Ukraine from './components/ukraine/Ukraine';
import FeatureClients from './components/pages/home/FeatureClients/FeatureClients';

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
          <CustomSupport></CustomSupport>
          <AdvancedSecurity></AdvancedSecurity>
          <FreeMigration></FreeMigration>
          <FeatureClients></FeatureClients>
          </>
        }></Route>
        
      </Routes>
    </div>
  )
}

export default App
