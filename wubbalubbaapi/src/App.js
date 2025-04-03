import React, { useState } from "react";
import "./App.css";
import fullLogo from "./logo.svg";
import logo from "./logo-min.svg";

function App() {
  const [filters, setFilters] = useState({
    name: "",
    species: "",
    gender: "",
    status: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.id]: e.target.value });
  };

  return (
    <div className="container">
      <header>
        <img src={logo} alt="rick and morty" />
        <ul>
          <li><a href="#">Personagens</a></li>
          <li><a href="#">Localizações</a></li>
          <li><a href="#">Episódios</a></li>
        </ul>
      </header>

      <main>
        <section className="chars">
          <img src={fullLogo} alt="Rick and Morty" />
          <div className="filters">
            <input type="text" id="name" placeholder="Filter by name..." className="filter" value={filters.name} onChange={handleFilterChange} />
            <select id="species" className="filter" value={filters.species} onChange={handleFilterChange}>
              <option value="">Species</option>
              <option value="animal">Animal</option>
              <option value="alien">Alien</option>
              <option value="disease">Doença</option>
              <option value="unknown">Desconhecido</option>
              <option value="human">Humano</option>
              <option value="humanoid">Humanoide</option>
              <option value="mythological">Mitológico</option>
              <option value="poopybutthole">Poopybutthole</option>
              <option value="robot">Robo</option>
            </select>
            <select id="gender" className="filter" value={filters.gender} onChange={handleFilterChange}>
              <option value="">Gênero</option>
              <option value="female">Feminino</option>
              <option value="male">Masculino</option>
              <option value="genderless">Sem Gênero</option>
              <option value="unknown">Desconhecido</option>
            </select>
            <select id="status" className="filter" value={filters.status} onChange={handleFilterChange}>
              <option value="">Status</option>
              <option value="alive">Vivo</option>
              <option value="dead">Morto</option>
              <option value="unknown">Desconhecido</option>
            </select>
          </div>

          <div className="chars-container">
            {/* Aqui será renderizado os personagens dinamicamente */}
          </div>

          <button id="load-more">Carregar mais</button>
        </section>
      </main>
    </div>
  );
}

export default App;
