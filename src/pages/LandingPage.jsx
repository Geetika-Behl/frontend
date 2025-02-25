import React from 'react';
import { useEffect, useState } from "react";
import  Navbar  from "../components/Navbar/Navbar";
import Hero from  "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import FAQ from '../components/FAQ/Faq';
import Pricing from '../components/Pricing/Pricing';

function LandingPage() {
  let heroData = [
    {text1:"Make Our Earth",text2:"Clean Together"},
    {text1:"Submit Your Report",text2:"On One Click"},
    {text1:"Make Your Area",text2:"Green Today"},
  ]
  const [heroCount,setHeroCount] =  useState(0);
  const [playStatus,setPlayStatus] = useState(true);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  
    },[])

  return (
    <div>
       
      <Navbar/>
      <Hero
         setPlayStatus={setPlayStatus}
         heroCount={heroCount}
         heroData={heroData[heroCount]}
         setHeroCount={setHeroCount}
         playStatus={playStatus}
      /> 
      <FAQ/> 
      <Pricing/>    
      <Footer/>
    </div>
  );
}

export default LandingPage;
