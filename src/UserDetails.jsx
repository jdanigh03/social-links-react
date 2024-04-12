import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  const user = props.user; 
  
  return (
    <div className="texto">
      <img src={user.avatar} alt={`avatar de ${user.name}`} />
      <h2>{user.name}</h2>
      <h3>{user.ubication}</h3>
      <p>{user.description}</p>
    </div>
  );
};

export default UserDetails;