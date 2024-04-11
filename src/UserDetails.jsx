import React from 'react';
import './UserDetails.css';
import avatarJessica from '../public/avatar-jessica.jpeg';

const UserDetails = () => {
  return (
    <div className="texto">
        <img src={avatarJessica} alt="jess"/>
        <h2>Jessica Randall</h2>
        <h3>London, United Kingdom</h3>
        <p>"Front-end developer and avid reader."</p>
    </div>
  )
}

export default UserDetails