import React, { useEffect, useState } from 'react'
import Timeline from '../components/timeline/Timeline'
import "./HomePages.css"
import Navigation from '../components/navigation/Navigation'
import { useNavigate } from 'react-router-dom'



const HomePages = () => {
const navigate = useNavigate()
  const [isSearch, setIsSearch] = useState(false);
  const users = JSON.parse(localStorage.getItem('users'));
  useEffect(()=>{
    if(users && users.admin === 1){
      navigate("/user-admin");
    }
  },[])
 return (
    <div className="homepage" >
      <div className="homepage-navWraper">
        <Navigation isSearch = {isSearch} />
      </div>
      <div className="homepage-timeline">
        <Timeline />
      </div>
    </div>
  )
}

export default HomePages;
