import React, { Component } from 'react';
import api from './Api';
import './App.css';

class App extends Component {
  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ filmes: response.data });
  }

  render() {
    const { filmes } = this.state;

    return (
      <div className="app-container">
        <h1 className="film-header">Filmes Star Wars</h1>
        <ul className="film-list">
          {filmes.map((filme) => (
            <li key={filme.show.id} className="film-item">
              <div className="film-info">
                <h2 className="film-title">{filme.show.name}</h2>
                <img src={filme.show.image ? filme.show.image.medium : 'URL_DA_IMAGEM_PADRÃO'} alt={filme.show.name} />
              </div>
              <p className="film-description" dangerouslySetInnerHTML={{ __html: filme.show.summary }} />
              <a
                className="film-link"
                href={filme.show.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais informações
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;


