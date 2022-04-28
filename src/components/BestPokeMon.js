function BestPokeMon(props) {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
}

export default BestPokeMon;
