
import './App.css';
import Logo from './components/Logo';
import BestPokeMon from './components/BestPokeMon';
import CaughtPokemon from './components/CaughtPokemon';
import Greeting from './components/Greeting';
import Mentor from './components/Mentor';


function App() {
  return (
    <div>

      <Logo appName="Mohammadhossein" />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      {/* <Text /> */}

    </div>
    // <div>
    //   <Greeting />
    //   <Mentor name="Jafar" family="Mohammadi" address="http://unsplash.it/300/400" />
    // </div>
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

//sayed is here
