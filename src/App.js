import "./App.css";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";

function App() {
  return (
    <div>
      <Logo appName="Mohammadhossein" />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      {/* <Text /> */}
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
