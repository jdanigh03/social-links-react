import React from 'react';
import './ButtonSection.css';

const ButtonSection = ({socialLinks}) => {
  console.log(socialLinks)
  return (
    <div className="botones">
        {
          socialLinks.map(
          socialLink=> <button key={socialLink.name} >{socialLink.name}</button>
          )
        }
    </div>
  )
}

export default ButtonSection