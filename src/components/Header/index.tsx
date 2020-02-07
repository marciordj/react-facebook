import React from 'react';
import Logo from '../../assets/img/facebook-logo.svg'
import './style.css';

export default function Header() {
    return (
        <div className="logo">
            <img src={Logo} alt="Facebook logo"/>
        </div>
    );
}