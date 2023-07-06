function Hydratech(props) {
  return (
    <div className="grid  ">
      <a href={props.link}>
      <img
        src={props.image}
        alt="hydra tech images"
        className="animate-pulse hover:scale-110 hover:transition hover:duration-300 hover: delay-75 cursor-pointer hover:-translate-y-4 hover:animate-none hover:ease-in-out"
      />
      </a>
    </div>
  );
}

export default Hydratech;
