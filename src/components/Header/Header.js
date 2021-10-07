import React from 'react';
import stadium from "../../images/stadium.jpg";
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <img className="head-image" src={stadium} alt="stadium image"/>
            <h4 className="head-text">Soccer Club</h4>
        </div>
    );
};

export default Header;