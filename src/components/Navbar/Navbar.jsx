import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const navigate = useNavigate();
    
    const handleGetStarted = () => {
        navigate('/login'); // Navigate to the login page
      };

      const goToTargetComponent = () => {
        navigate('/dashboard#target'); // Navigate to OtherPage with a hash
      };

  return (
    <div className='nav'>
        <div onClick={()=>navigate('/')} className='nav-logo'>Clean-Yuva</div>
        <ul  className='nav-menu'>
            <li className='nav-item' onClick={goToTargetComponent}>About</li>
            <li onClick={()=>navigate('/leaderboard')} className='nav-item'>LeaderBoard</li>
            <li onClick={()=>navigate('/chatbot')} className='nav-item'>Enquiry</li>
            <li className='nav-item'>Contact us</li>
            <li onClick={()=>navigate('/admin')} className='nav-item'>Admin Pannel</li>
            <li onClick={handleGetStarted} className='nav-item'>
              <button className='nav-sign'>
                Sign in
              </button>
              
              </li>
        </ul>
    </div>
  )
}

export default  Navbar;