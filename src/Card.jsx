import React from 'react';
import UserDetails from './UserDetails';
import ButtonSection from './ButtonSection';
import "./card.css";
import { NavLink } from 'react-router-dom';

const Card = (props) => { 
  const user = props.user;
  const socialLinks = user["social-links"]
  return (
  <NavLink to={`/character?id=${user.id}`} > 
    <div className="contenedor">
        <UserDetails user={user}/>
    </div>
  </NavLink>
  );
};

export default Card;