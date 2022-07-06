import TopBar from './components/TopBar/TopBar';
import SectionHeader from './components/SectionHeader/SectionHeader';
import Shop from './components/Shop/Shop';
import Navigation from './components/Navigation/Navigation';
import ShopHeader from './components/ShopHeader/ShopHeader';
import OurTeam from './components/OurTeam/OurTeam';
import MyTabs from './components/MyTabs/MyTabs';
import Footer from './components/Footer/Footer';
import OurTeamHeader from './components/OurTeamHeader/OurTeamHeader';


function App() {
  return (
    <div className='App'>
      <TopBar/>
      <Navigation/>
      <SectionHeader></SectionHeader>
      {/* <Tab></Tab> */}
      <MyTabs></MyTabs>
      <ShopHeader></ShopHeader>
      <Shop/>
      <OurTeamHeader></OurTeamHeader>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </div>
  );
}

export default App;
