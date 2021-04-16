import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Bookings from '../Components/bookings.jsx';
import About from '../Components/about.jsx';
import Contact from '../Components/contact.jsx';


class Home extends React.Component{
   
    
    render() {
        return (
            
             <div className="vechile">
               
                 <div className="row">
                 <Link to="/bookings" style={{ textDecoration: 'none' }}>
                     <div className="home-col-1">
                           <img src="https://roadthrillcommunity.com/blog/wp-content/uploads/2020/07/Royal-Enfield-Classic-350-BS6-1024x1024.jpg" alt="bike image"/>
                           <h2>Royel Enfield</h2>
                           <h4>Price : $50.0</h4>
                           <button>Book Now</button>
                           
                    </div>
                    </Link>
                    <Link to="/bookings" style={{ textDecoration: 'none' }}>
                    <div className="home-col-2">
                           <img src="https://jnswire.s3.amazonaws.com/jns-media/be/af/116782/TaxiChicago.jpg" alt="cabs"/>
                           <h2>Cabs</h2>
                           <h4>Price : $25.0</h4>
                           <button>Book Now</button>
                    </div>
                    </Link>
                    <Link to="/bookings" style={{ textDecoration: 'none' }}>
                    <div className="home-col-3" id="three">
                           <img src="https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/tvs-scooty5f2d3acb296a3.jpg" alt="scooty"/>
                           <h2>Scooty</h2>
                           <h4>Price : $35.0</h4>
                           <button>Book Now</button>
                    </div>
                    </Link>
                 </div>
                
                
 
              </div>

            
        );
    }
}
export default Home;