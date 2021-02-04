import React from 'react'
import ahmed from './ahmed.jpg';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="infoPerso">
            <div >
                <h1>Développeur Full Stack Javascript</h1>
                <p>Hello, I’m Ahmed Chaouach, a junior Full Stack Javascript, gifted with information systems engineering, you have a small Project! You want to present it on the internet. You want to develop your business by presenting your services on the web, we are here to help you do not hesitate to contact us.</p>
            </div>
          <img src= {ahmed}/>
        </div>
    )
}

export default AboutUs

