import React, { useContext, useEffect } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }
    console.log(user);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span className='user-name'>Welcome,{user.email}  <button onClick={handleLogOut}>Sign Out</button></span>
                }
                
            </div>
        </nav>
    );
};

export default Header;