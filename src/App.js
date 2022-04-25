import TopBar from './components/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';
import SectionHeader from './components/SectionHeader/SectionHeader';
import Services from './components/Services';
import Shop from './components/Shop/Shop'
import Navigation from './components/Navigation/Navigation';


function App() {

  return (
    <div className='App'>
      <TopBar/>
      {/* <Navbar/> */}
      <Navigation/>
      <SectionHeader></SectionHeader>
      <Services></Services>
      <Shop/>
      
     
    </div>
  );
}

export default App;
