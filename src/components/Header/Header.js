import React from 'react';
import './Header.css'
import banner from '../../images/premier-league-banner.png'

const Header = () => {
    return (
        <div className='header-banner'>
            <img src={banner} alt="" className="w-100" />
        </div>
    );
};

export default Header;

