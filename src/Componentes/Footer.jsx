import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const hoy = new Date();
    const año = hoy.getFullYear();
    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
                <b>Version</b> 1.0.0
            </div>
            <strong>{año} Proyecto final</strong> ©. 
        </footer>
    );
}

export default Footer;