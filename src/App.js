import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import Bookshelf from './components/Bookshelf';

import './styles/App.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/mediaquery.scss'



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/bookshelf' element={<Bookshelf/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
