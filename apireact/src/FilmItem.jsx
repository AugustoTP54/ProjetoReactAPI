import React from 'react';

function FilmItem({ name, description }) {
  return (
    <li className="film-item">
      <h2 className="film-title">{name}</h2>
      <p className="film-description">{description}</p>
    </li>
  );
}

export default FilmItem;

