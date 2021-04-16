import React from 'react';
import './bookings.css';
import { Link } from 'react-router-dom';

class Bookings extends React.Component{
    showAlert(){
        alert("Your order has been placed. Please Back to Home Button ");
    }
    render() {
        
        return (
            
            
           <form>

            <div className="bookings">
                 <Link to="/about"><button>Back to Home</button></Link>
                
                 <div className="location">
                     
                     <label htmlfor="name">Name :</label>
                     <input type="text" placeholder="John" required/>
                     <br/>
                     <br/>
                     <label htmlfor="location">Location :</label>
                     <input type="text" placeholder="near bus stop" required/>
                     <br/>
                     <br/>
                     <label htmlfor="place">Place :</label>
                     <input type="text" placeholder="Hyderabad" id="location" required/>
                     <br/>
                     <br/>
                     <button onClick={this.showAlert}>Place Order</button>
  
                 </div>
                 
                 <h3 className="thankyou">Thank you visit again..!!</h3>
            </div>
            </form>
           
            
        );
    }
}
export default Bookings;