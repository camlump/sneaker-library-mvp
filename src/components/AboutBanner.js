import React from 'react'
import bannerImg from '../images/royal-blue.jpeg';
import '../stylesheets/aboutBanner.css'

const AboutBanner = () => {
    return (
        <div className="banner">
            <div className="textBox">
                <h2>The Sneaker Library.</h2>
                <p>This an application that displays</p>
            </div>
            <div className="imgBox">
                <img src={bannerImg} alt=""/>
            </div>
            
        </div>
    )
}

export default AboutBanner;
