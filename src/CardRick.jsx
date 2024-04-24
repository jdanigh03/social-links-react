import React, { useEffect, useState } from 'react';
import "./CardRick.css";
import UserDetailsRick from './UserDetailsRick';
import Episodes from './Episodes';
import ButtonRick from './ButtonRick';
import { NavLink, useLocation } from "react-router-dom";

const CardRick = () => {
  const [user, setUser] = useState({});
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
          const data = await response.json();
          setUser(data);
        } else {
          const PaginaRand = Math.floor(Math.random() * 34) + 1;
          const response = await fetch(`https://rickandmortyapi.com/api/character?page=${PaginaRand}`);
          const data = await response.json();
          const PersonajesRandom = getPersonajesRandom(data.results, 1);
          setUser(PersonajesRandom[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const getPersonajesRandom = (userArray, count) => {
    const mezcla = userArray.sort(() => 0.5 - Math.random());
    return mezcla.slice(0, count);
  };

  return (
    <div className="contenedor">
      <UserDetailsRick user={user} />
      <Episodes user={user} />
      <NavLink to='/'>
        <ButtonRick socialLinks={[{ name: 'Home' }]} />
      </NavLink>
    </div>
  );
};

export default CardRick;
