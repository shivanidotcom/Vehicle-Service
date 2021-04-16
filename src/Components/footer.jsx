import React from 'react';
import './footer.css';
class Footer extends React.Component{
    render() {
        return (
           <div className="footer">
               <div className="container">
                   <div className="row">
                       <div className="footer-col-1">
                           <h3>Download Our App</h3>
                           <p>Download App for Android and ios mobile phone</p>
                           <img src="https://static1.squarespace.com/static/5642060be4b0b6ef97ba6c9a/t/5ace70f22b6a28173e52c4de/1523479367102/Google+Play+white.png" alt="get it on google play store"/>
                           <img src="https://img1.pnghut.com/19/5/6/7Mse1uKPXC/monochrome-brand-handheld-devices-silhouette-logo.jpg" alt="get it on app store"/>
                       </div>
                       <div className="footer-col-2">
                           <img src="https://i.pinimg.com/originals/a8/49/fc/a849fcf5231cabf8241c1b820270a236.png" alt="company logo"/>
                       </div>
                       <div className="footer-col-3">
                           <h3>Useful Links</h3>
                           <ul>
                               <li>Coupons</li>
                               <li>Blogs</li>
                               <li>Return Policy</li>
                               <li>Join Affiliate</li>
                           </ul>
                       </div>
                       <div className="footer-col-4">
                           <h3>Follow Us On</h3>
                           <ul>
                               <li>FaceBook</li>
                               <li>Twitter</li>
                               <li>Youtube</li>
                               <li>Instagram</li>
                           </ul>
                       </div>
                   </div>
                   <hr/>
                   <p>Copyrights-2021</p>
               </div> 
           </div>   
        );
    }
}
export default Footer;
