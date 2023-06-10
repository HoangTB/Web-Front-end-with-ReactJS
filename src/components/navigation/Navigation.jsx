import React, { useState } from 'react'
import "./Navigation.css"
import { AiOutlineHeart } from "react-icons/ai"
import { Link, Route, Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import FormCreate from '../formCreate/FormCreate';
import Search from '../search/Search';


function Navigation(props) {
    const idUser = JSON.parse(localStorage.getItem('users'));
    const users = useSelector((state) => state.users);
    const [isShow, setIsShow] = useState(false);
    const [isSearch, setIsSearch] = useState(props.isSearch);
    
    const handelClose = () => {
        setIsShow(false);
    };

    return (
        <div className="sidenav">
            {isShow && <FormCreate handelClose={handelClose} />}      
                {isSearch && <Search />}
            <Link to='/home' ><img
                className="sidenav-logo"
                src="/logo.png"
                alt="Logo"
            /></Link>

            <div className="sidenav-buttons">
                <Link to='/home' className="sidenav-button">
                    <img src="https://pixlok.com/wp-content/uploads/2021/12/Instagram-Home-Icon-n3fd2.png" className='sidenav-icon' />

                    <span>Home</span>
                </Link>
                <button className="sidenav-button" onClick={() => setIsSearch(!isSearch)}>
                    <img src="https://cdn-icons-png.flaticon.com/512/482/482631.png " className='sidenav-icon' />

                    <span>Search</span>
                </button>
                <button className="sidenav-button disabled">
                    <img src="https://www.lamar.edu/career-and-testing-services/_files/images/icons/iconfinder_90_compass_183404.png " className='sidenav-icon' />

                    <span>Explore</span>
                </button>
                <button className="sidenav-button disabled">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-instagram-reel-4560268-3789542.png " className='sidenav-icon' />

                    <span>Reels</span>
                </button>
                <button className="sidenav-button disabled">
                    <img src="https://cdn-icons-png.flaticon.com/512/1532/1532430.png" className='sidenav-icon' />

                    <span>Messages</span>
                </button>
                <button className="sidenav-button disabled">
                    <img src="https://logodix.com/logo/1278179.png" className='sidenav-icon' />
                    <span>Notifications</span>
                </button>
                <button className="sidenav-button" onClick={() => setIsShow(true)}>
                    <img src="https://cdn.icon-icons.com/icons2/2943/PNG/512/plus_icon_183962.png" className='sidenav-icon' />

                    <span>Create</span>
                </button>
                <Link to={`/profile/${idUser.id}`}>
                    <button className="sidenav-button">
                        <Avatar className='sidenav-icon-profile'>
                            {users.user.toUpperCase()}
                        </Avatar>

                        <span className="sidenav-buttonText">Profile</span>
                    </button>
                </Link>

            </div>
            <div className="sidenav-more">
                <button className="sidenav-button">
                    <img src="https://cdn1.iconfinder.com/data/icons/ui-25/64/menu-512.png " className='sidenav-icon' />
                    <span className="sidenav-buttonText">More</span>
                </button>
            </div>
        </div>
    )
}

export default Navigation;
