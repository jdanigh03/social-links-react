import React from 'react';
import UserDetails from './UserDetails';
import ButtonSection from './ButtonSection';
import "./card.css";

const Card = (props) => { 
  const user = props.user;
  // console.log(user);
  const socialLinks = user["social-links"]
  return (
    <div className="contenedor">
        <UserDetails user={user}/>
        {/* <ButtonSection socialLinks={socialLinks} /> */}
    </div>
  );
};

export default Card;