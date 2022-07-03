import TopBar from './components/TopBar/TopBar';
import SectionHeader from './components/SectionHeader/SectionHeader';
import Services from './components/Services';
import Shop from './components/Shop/Shop';
import Navigation from './components/Navigation/Navigation';
import ShopHeader from './components/ShopHeader/ShopHeader';
import OurTeam from './components/OurTeam/OurTeam';
import MyTabs from './components/MyTabs/MyTabs';
import Footer from './components/Footer/Footer';
import OurTeamHeader from './components/OurTeamHeader/OurTeamHeader';
import { Tabs } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <TopBar/>
      {/* <Navbar/> */}
      <Navigation/>
      <SectionHeader></SectionHeader>
      <MyTabs></MyTabs>
      {/* <Services></Services> */}
      <ShopHeader></ShopHeader>
      <Shop/>
      <OurTeamHeader></OurTeamHeader>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </div>
  );
}

export default App;
