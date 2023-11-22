import React, { useState } from 'react'
import './Home.css'
import { useSearchParams } from 'react-router-dom'
import imgq from './lamp.png'
import img2 from './lights.png'
import img3 from './diya.png'

const greeting = [
  "Wishing you a very happy and prosperous Diwali! May the light of the diyas guide you towards the path of happiness and success.",
  "On this Diwali, I pray to Lakshmi to bless you with wealth, health, and happiness. May you and your family enjoy this festive season with peace and joy.",
  "May this Diwali bring you new opportunities, new achievements, and new dreams. May you shine like a star and sparkle like a diamond. Happy Diwali!",
  "Diwali is the festival of prosperity and abundance. May you attract all the good things that you desire and deserve. May you manifest your dreams and goals. Happy Diwali!"
]

const Home = () => {

 const [searchparams] = useSearchParams();
 const [to,setto] = useState(searchparams.get('to'))
    const [from ,setfrom] = useState(searchparams.get('from'))
   const [themenumber,setthemenumber] = useState(searchparams.get('t'))
   
   

    const [gretingNumber,setgreetingNumber] = useState(searchparams.get('g')>=greeting.length?0:searchparams.get('g') || 0)
    
  return (
    <>
    <div className={`gretting-card ${`theme-${themenumber}`}`}>
      <div className='display'>
        <div>
        <img src={img2} className='akashdiya' />
        </div>
        <h1 className='happydiwali'>  <img src={imgq} /> HAPPY DIWALI 💖</h1>
        <div>
        <img src={img2} className='akashdiya' />
        </div>
      </div>
     
<h1 className='to'>To, <span>{to}💐</span></h1>
     
     <div className='greetingwhish'>
     {greeting[gretingNumber]}
     </div>
      

      <h2 className='from'>From {from}😊</h2>
     </div>

     <div className='link'><p>{import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={gretingNumber}&t={themenumber}</p></div>
     
     <input type='text' value={to} onChange={(e)=>{
      setto(e.target.value)
     }} />

     <input type='text' value={from} onChange={(e)=>{
      setfrom(e.target.value)
     }} />
     <select value={gretingNumber} onChange={(e)=>{
      setgreetingNumber(e.target.value)
     }}>
      <option value='0'>greeting 1</option>
      <option value='1'>greeting 2</option>
      <option value='2'>greeting 3</option>
      <option value='3'>greeting 4</option>

     </select>
     <select value={themenumber} onChange={(e)=>{
      setthemenumber(e.target.value)
     }}>
     <option value='0'>none</option>
      <option value='1'>theme 1</option>
      <option value='2'>theme 2</option>
      <option value='3'>theme 3</option>
      <option value='4'>theme 4</option>
     </select>
     </>
  )
}

export default Home
