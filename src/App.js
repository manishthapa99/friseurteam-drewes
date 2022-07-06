import TopBar from './components/TopBar/TopBar';
import SectionHeader from './components/SectionHeader/SectionHeader';
import Shop from './components/Shop/Shop';
import Navigation from './components/Navigation/Navigation';
import ShopHeader from './components/ShopHeader/ShopHeader';
import OurTeam from './components/OurTeam/OurTeam';
import Footer from './components/Footer/Footer';
import ServiceTable from './components/ServiceTable/ServiceTable';
import OurTeamHeader from './components/OurTeamHeader/OurTeamHeader';


function App() {
  return (
    <div className='App'>
      <TopBar/>
      <Navigation/>
      <SectionHeader></SectionHeader>
      <ServiceTable/>
      {/* <Services></Services>
      <MyTabs></MyTabs> */}
      <ShopHeader></ShopHeader>
      <Shop/>
      <OurTeamHeader></OurTeamHeader>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </div>
  );
}

export default App;
