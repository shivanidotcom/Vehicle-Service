import logo from './logo.svg';
import './App.css';
import Header from './Components/header.jsx';
import NavBar from './Components/navbar.jsx';
import Footer from './Components/footer.jsx';
import Home from './Components/home.jsx';
import About from './Components/about.jsx';
import Contact from './Components/contact.jsx';
import Bookings from './Components/bookings.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Header/>
        <NavBar/>
            <Router>
    
              <Switch> 
                      <Route path="/home" component={Home} /> 
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/bookings" component={Bookings} />
                      <Route path="/history" component={History} />
                </Switch>  
      
            </Router>
       <Footer/>
    </div>
  );
}

export default App;
