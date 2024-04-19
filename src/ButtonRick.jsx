import React from 'react';
import './ButtonRick.css';

const ButtonRick = ({ socialLinks }) => {
  return (
    <div className="botones">
      {socialLinks.map((socialLink) => (
        <button key={socialLink.name}>{socialLink.name}</button>
      ))}
 
    </div>
  )
}

export default ButtonRick