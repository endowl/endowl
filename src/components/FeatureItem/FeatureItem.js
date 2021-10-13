import "./FeatureItem.css";

function FeatureItem(props) {
  return (
    <div className="featureItem">
      <div className="featureItem-header-wrapper">
        <div className="featureItem-titleImage-container">
          <img className="featureItem-titleImage" src={props.img}/>
        </div>
        <h3 className="featureItem-title">{props.title}</h3>
      </div>
      <p className="featureItem-content">
        {props.content}
      </p>
    </div>
  );
}

export default FeatureItem
