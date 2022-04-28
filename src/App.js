import "./App.css";

// Quiz 1

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
    </div>
  );
}

// Quiz 2

function Logo() {
  return (
    <header>
      <div>
        <h1>Welcome to the pokedex</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="bird"
        />
      </div>
    </header>
  );
}

function BestPokemon() {
  return <p>My favorite Pokemon is Squirtle</p>;
}

export default App;
