import "./App.css";

//# Quiz 1

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <Text />
    </div>
  );
}

//# Quiz 2

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

// # Arrow function
const Text = () => {
  return (
    <div>
      <h1>hello my friends</h1>
    </div>
  );
};

// const Text = () => (
//   <div>
//     <h1>hellooooo</h1>
//   </div>
// );

export default App;
