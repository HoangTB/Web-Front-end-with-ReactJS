import React, { useEffect } from 'react'
import Timeline from '../components/timeline/Timeline'
import "./HomePages.css"
import Navigation from '../components/navigation/Navigation'
import { Avatar } from '@mui/material';


const HomePages = () => {

  return (
    <div className="homepage">
      <div className="homepage-navWraper">
        <Navigation />
      </div>
      <div className="homepage-timeline">
        <Timeline />
      </div>
    </div>
  )
}

export default HomePages;
