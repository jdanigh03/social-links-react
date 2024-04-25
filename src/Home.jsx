import React, { useEffect, useState } from 'react';
import Card from "./Card";

const Home = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const randomIds = generateRandomIds(10, 1, 826);
    personajesRandoms(randomIds);
  }, []);

  const generateRandomIds = (count, min, max) => {
    const randomIds = [];
    while (randomIds.length < count) {
      const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!randomIds.includes(randomId)) {
        randomIds.push(randomId);
      }
    }
    return randomIds;
  };

  const personajesRandoms = async (randomIds) => {
    const result = await Promise.allSettled(
      randomIds.map(id =>
        fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res => res.json())
      )
    );
    const personajes = result
      .filter(response => response.status === "fulfilled")
      .map(response => response.value);
    setUsers(personajes);
  };

  const handleCardClick = (id) => {
    history.push(`/card?id=${id}`);
  };

  return (
    <>
      {users.map((user, index) => (
        <Card key={index} user={user} onClick={() => handleCardClick(user.id)} />
      ))}
    </>
  )
}

export default Home;