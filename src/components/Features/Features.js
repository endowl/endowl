import "./Features.css";

function Features(props) {
  return (
    <div className="features">
      <a id="features" />
      <div className="features-featureItem-container">
        {props.children}
      </div>
      {/* <img className="features-image" src={props.img}/> */}
    </div>
  );
}

export default Features