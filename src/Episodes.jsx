import React, { useState, useEffect } from "react";
import "./Episodes.css";

const Episodes = ({ user }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodeData = async (episodeUrl) => {
      const response = await fetch(episodeUrl);
      const episodeData = await response.json();
      return episodeData;
    };

    const fetchEpisodes = async () => {
      if (user.episode && user.episode.length > 0) {
        const episodePromises = user.episode.map(fetchEpisodeData);
        const episodeData = await Promise.all(episodePromises);
        setEpisodes(episodeData.slice(0, 5)); 
      }
    };

    fetchEpisodes();
  }, [user.episode]);

  return (
    <div className="informacion-extra">
      {episodes.map((episode, index) => (
        <div key={index} className="episode-info">
          <p>{episode.air_date}</p>
          <p>{episode.episode}</p>
        </div>
      ))}
    </div>
  );
};

export default Episodes;
