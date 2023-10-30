import React from 'react';
import FilmItem from './FilmItem';
import fakeFilmData from './FakeFilmData';

function FilmList() {
  return (
    <ul className="film-list">
      {fakeFilmData.map((filme) => (
        <FilmItem
          key={filme.id}
          name={filme.name}
          description={filme.description}
        />
      ))}
    </ul>
  );
}

export default FilmList;

