function Mentor(props) {
  return (
    <span id={props.name + 1}>
      {props.name}
      {props.family}
      {/* <img src={props.address} alt="aks" /> */}
    </span>
  );
}

export default Mentor;
