import React from 'react';
import stadium from "../../images/stadium.jpg";
import './Header.css'

const Header = (props) => {
    const {banner,strStadium} = props;
    /*const strStadium = props.strStadium;*/
    const title = "Soccer Club";
    return (
        <div className="header-container">
            <img className="head-image" src={banner ?? stadium} alt="stadium"/>
            <h4 className="head-text">{strStadium ?? title}</h4>
        </div>
    );
};

export default Header;