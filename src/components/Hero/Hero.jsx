import './Hero.css'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
import Background from '../Background/Background'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { CtaButton } from '../ui/cta-button'

 const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
    const navigate = useNavigate();
    
    const handleGetStarted = () => {
        navigate('/login'); // Navigate to the login page
      };
    
  return (
    <div className='hero'>
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <div className="hero-text " >
            <p className='animated-card slideInLeft'>{heroData.text1}</p>
            <p className='animated-card slideInRight'>{heroData.text2}</p>
        </div>
        <div onClick={handleGetStarted} >
        <motion.div
             className="flex"
             initial={{ y: 10, opacity: 0 }}
             animate={{ y: 0.4, opacity: 1 }}
             transition={{ duration: 0.4, delay: 0.4 }}
            >
             <button className="hero-explore bounceIn">
                <span className='texty'>Get Started</span>
                </button>
       </motion.div> </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange" : "hero-dot"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange" : "hero-dot"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange" : "hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
                <p>See the video</p>
            </div>
        </div>

    </div>
  )
}

export default  Hero;