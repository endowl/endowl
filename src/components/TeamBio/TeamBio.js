import "./TeamBio.css";

function TeamBio(props) {
  return (
    <div className="teamBio">
      <img className="teamBio-img" src={props.img}/>
      <h3 className={"teamBio-teamMember"}>
        <span className={"teamBio-teamMember-name"}>{props.name}</span>
        <span className={"teamBio-teamMember-title"}>{props.title}</span>
      </h3>
    </div>
  );
}

export default TeamBio