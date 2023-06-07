
import React from 'react'
import Profile from '../components/profile/Profile';
import Navigation from '../components/navigation/Navigation';
import './ProfilePages.css'
import Footer from '../components/footer/Footer';
const ProfilePages = () => {
  return (
    <div>
    <div className='profilePages'>
      <div className='profile-navi'>
      <Navigation/>
      </div>
      <div className='profile-profile'>
      <Profile/>
      </div>        
    </div>
    <div className='profile-footer'>
    <Footer/>
    </div>  
    </div>

  )
}

export default ProfilePages;
