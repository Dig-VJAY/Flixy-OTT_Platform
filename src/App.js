import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Watchlater from './Watchlater';
import Trending from './Trending'
import Videoplayer from './Videoplayer';
// import Playbutton from './Playbutton';
function App  ()  {
  return (
    <div>
      <BrowserRouter>     
      <Navigation/>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/watchlater" element={<Watchlater/>}/>
            <Route path="/trending" element={<Trending/>}/>
            <Route path="/playit" element={<Videoplayer/>}/>
        </Routes>
        </BrowserRouter>
        </div>
  )
}

export default App
