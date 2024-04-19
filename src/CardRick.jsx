import React from 'react'
import "./CardRick.css";
import UserDetailsRick from './UserDetailsRick';
import Episodes from './Episodes';
import ButtonRick from './ButtonRick';

const CardRick = (props) => {
    const user = props.user;
  return (
    <div className="contenedor">
         <UserDetailsRick user={user}/>
         <Episodes user={user} />
         <ButtonRick socialLinks={[{ name: 'Home' }]}/>
     </div>
  )
}

export default CardRick