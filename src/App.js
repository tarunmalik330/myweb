import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Icon';
import Header from './components/Header';
import Categories from './components/Categories';
import OurExperience from './components/OurExperience';
import Popular from './components/Popular';
import TopDestinations from './components/TopDestinations';
import AboutUs from './components/AboutUs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return <>
    <Header />
    <Categories />
    <OurExperience />
    <Popular />
    <TopDestinations />
    <AboutUs />
    <Newsletter />
    <Footer />
  </>
}

export default App;
