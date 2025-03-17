import './App.css';
import ProjectInfo from './ProjectInfo';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/project/:id' element={<ProjectInfo />}></Route>
        </Routes>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
