import React from 'react'
import './Home.css'
import { useSearchParams } from 'react-router-dom'

const Home = () => {

    const [searchparams] = useSearchParams();
    const to = searchparams.get('to')
    const from = searchparams.get('from')
   

    const greeting = [
        "Wishing you a very happy and prosperous Diwali! May the light of the diyas guide you towards the path of happiness and success.",
        "On this Diwali, I pray to Lakshmi to bless you with wealth, health, and happiness. May you and your family enjoy this festive season with peace and joy.",
        "May this Diwali bring you new opportunities, new achievements, and new dreams. May you shine like a star and sparkle like a diamond. Happy Diwali!",
        "Diwali is the festival of prosperity and abundance. May you attract all the good things that you desire and deserve. May you manifest your dreams and goals. Happy Diwali!"
    ]

    const gretingNumber = searchparams.get('g')>=greeting.length?0:searchparams.get('g') || 0
  return (
    <div>
      <h1>home page </h1>
      <h1>to {to}</h1>
      <h2>from {from}</h2>
      {greeting[gretingNumber]}
    </div>
  )
}

export default Home
