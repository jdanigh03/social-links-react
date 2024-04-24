import React from "react";
import "./Detalles.css"

const UserDetails = ({user}) => {
  // const user = props.user; 
  
  return (
    <div className="texto">
      <img src={user.image} alt={`avatar de ${user.name}`}  />
      <h2>{user.name}</h2>
      <h3>{user.location.name}</h3>
      <p>{user.status}</p>
    </div>
  );
};

export default UserDetails;