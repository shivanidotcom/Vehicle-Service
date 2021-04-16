import React from 'react';
import './navbar.css';


class NavBar extends React.Component{
    render(){
        return (
            <div className="navbar">
                
                <a href="/home"> Home </a>
                <a href="/about"> About us </a>
                <a href="/contact"> Contact </a>
                <a href="/bookings"> My Bookings </a>
                <a href="/history"> History </a>
            </div>
        );
    }
}      
export default NavBar;