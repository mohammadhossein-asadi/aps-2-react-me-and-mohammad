import "./App.css";
import { v4 as uuiv4 } from "uuid";

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
      {/* <Text /> */}
    </div>
  );
}

function Logo() {
  const appName = "John";
  return (
    <header>
      <div>
        <h1>Welcome to the {appName}'s Pokedex</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="bird"
        />
      </div>
    </header>
  );
}

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>;
}

function BestPokemon() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability) => (
          <li key={uuiv4()}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

// # Arrow function
// const Text = () => {
//   return (
//     <div>
//       <h1>hello my friends</h1>
//     </div>
//   );
// };

// const Text = () => (
//   <div>
//     <h1>hellooooo</h1>
//   </div>
// );

export default App;
