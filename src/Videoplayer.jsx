import React from 'react'
//import  Mainpage from '../src/Videos/Mainpage.mp4'
import  '../src/Style.css/Videoplayer.css'
  import   { videop }  from './Playbutton'
import { video } from './searchButton'
const Videoplayer = () => {
  console.log(videop)
  return (
    <div className='Vouter'>
          <video controls autoPlay typeof='video/mp4' className='Vplayer'> 
           <source src={videop || video} ></source>   
          </video>        
                {/* <h1>{videop || video}</h1>   */}
                  
              </div>

  )
}

export default Videoplayer
