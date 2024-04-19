import React from 'react'
import "./UserDetailsRick.css"

const UserDetailsRick = ({user}) => {
  return (
    <div className="texto">
      <img src={user.image} alt={`avatar de ${user.name}`} />
      <h3>{user.status}</h3>
      <h2>{user.type}</h2>
      {/* {console.log(user.name)} */}
    </div>
  )
}

export default UserDetailsRick