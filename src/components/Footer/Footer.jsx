import { useState } from 'react'
import image4 from   '../../assets/image4.png'
import image5 from   '../../assets/image5.png'
import image6 from   '../../assets/image6.png'
import image7 from   '../../assets/image7.png'
import image8 from   '../../assets/image8.png'
import './Footer.css'
import Background from '../Background/Background'
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const Footer = () => {
    const location = useLocation();
  const targetRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#target' && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
    }
  }, [location]);

    const[subs,setSubs]= useState(true)
    function toggle(){
        setSubs(!subs)
    }
    
  
  return (
    <div className='footer'>
        <div ref={targetRef} style={{ marginTop: '20px' }}></div>
        <div className='footer-black'>
        <div className='footer-logo'>Clean-Yuva</div>
        <p className='para'>Clean-Yuva is an innovative app that uses cutting-edge technology</p>
        <p className='para'>to ensure the devlopment and growth of the society</p>
        <ul className='footer-menu'>
            <li>Home</li>
            <li>Organisation</li>
            <li>Reports</li>
            <li>Contact Us</li>
        </ul>
        <div>
            <input type="text" className='input' placeholder='Subscribe to our news letter'/>
            <button onClick={toggle} className='btn'>{subs?<button className='btn'>Subscribe</button>:<button  className='btn1'>Subscribed</button>} </button>
        </div>
    
        <div  className='social'>
            <div className='contact'>
         <ul className='india'>
            <li className='country'>India</li>
            <li> <img src="" alt="" />7017680425</li>
        </ul>
        <ul className='australia'>
            <li className='country'>Australia</li>
            <li><img src="" alt="" />7017680425</li>
        </ul>
        <ul>
            <li className='mail'> <img className='mailimage' src={image8} alt="" />ravibeniwal931@gmail.com</li>
        </ul> 
        </div>
        <div className='social-links'>
            <p>Connect with us</p>
            <div className='social-logo'>
            <img src={image4} alt="Twitter" />
            <img src={image5} alt="Facebook" />
            <img src={image6} alt="Linkdin" />
            <img src={image7} alt="instagram" />
            </div>
        </div>
        </div>
        
    </div>
    <div className='footer-white'>
        
            <ul className='terms'>
                <li>Terms of service</li>
                <li>Privacy Policy</li>
                <li>Disclamer Policy</li>
            </ul>
       
        <div>
        Copyright © 2024 I’M SAFE APP. All rights reserverd.
        </div>
    </div>
    </div>
    
  )
}

export  default Footer;
