import { v4 as uuiv4 } from "uuid";

function BestPokemon(props) {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((ability) => (
          <li key={uuiv4()}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon;
