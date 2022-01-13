
import './App.scss';
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Routes from './components/config/Routes';
function App() {
  return (
    <BrowserRouter >
    <Route render={props=>(<>
    <Header {...props}/>
    <Routes/>
    <Footer/>
    </>)}></Route>
    </BrowserRouter>
  );
}

export default App;