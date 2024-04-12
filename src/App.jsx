import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://661037cf0640280f219c98e1.mockapi.io/api/v2/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);
  
  return (
    <>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </>
  );
}

export default App;