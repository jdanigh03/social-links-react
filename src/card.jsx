import React from 'react'
import UserDetails from './UserDetails';
import ButtonSection from './ButtonSection';
import "./card.css";

const card = () => {
  return (
    <div className="contenedor">
        <UserDetails></UserDetails>
        <ButtonSection></ButtonSection>
    </div>
  )
}

export default card