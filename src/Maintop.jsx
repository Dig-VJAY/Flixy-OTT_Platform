import React from 'react'
import './assets/style.css/Maintop.scss'
import Searchbar from './Searchbar'
 import Background from '../src/images/bg_1.png'

export default function Maintop() {
   
  return (
    <div className='top '>
     
   <div className='image '>
 
   <img src={Background} alt='gg' className='background'></img> 
   </div>
   <div className='boxy'>
      <Searchbar/>
   </div>
   
    </div>
  )
}

