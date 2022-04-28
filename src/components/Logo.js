function Logo(props) {
  // Toxic - Dont use!
  // const appName = props.appName;
  console.log(props);
  return (
    <header>
      <div>
        <h1>Welcome to the {props.appName}'s pokedex</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="bird" />
      </div>
    </header>
  );
}

export default Logo;
