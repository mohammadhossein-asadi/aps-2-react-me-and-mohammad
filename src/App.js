import './App.css';
import Logo from './components/Logo';
import BestPokeMon from './components/BestPokeMon';
import CaughtPokemon from './components/CaughtPokemon';
import Greeting from './components/Greeting';
import Mentor from './components/Mentor';

function App() {
  return (
    <div>
      <Logo appName="aradin00" />
      <BestPokeMon abilities={['Anticipation', 'Adaptability', 'Run-Away']} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
    // <div>
    //   <Greeting />
    //   <Mentor name="Jafar" family="Mohammadi" address="http://unsplash.it/300/400" />
    // </div>
  );
}

export default App;

//sayed is here
