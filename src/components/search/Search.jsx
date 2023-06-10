import React, { useState } from 'react'
import './Search.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Search = () => {
  const listUsers = useSelector((state) => state.listUsers);
  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChangeSearch = (e) => {
    setSearchText(e.target.value);
  }
  

  setTimeout(()=>{
    const filteredUsers = listUsers.filter((user) => {
      return user.user.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredUsers(filteredUsers);
  },3000)
  return (
    <div className='search-form'>
      <div className='search-input'>
        <input placeholder='Search...' className='search-input-search' onChange={handleChangeSearch} />
      </div>
      <div className='search-show'>
        <div className='search-list'>
          {searchText ? filteredUsers.map((user, index)=> {
            return (
              <NavLink key={index} to = {`/profile/${user.id}`} className='search-list'>{user.user}</NavLink>
            )
          }) : <></>}
        </div>
      </div>
    </div>
  )
}

export default Search;
