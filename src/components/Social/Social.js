import "./Social.css";

function Social(props){
  return(
    <div className="social">
      <div className="social-link-bar">
        {props.images.map((item, i) => 
          <a key={i} className="social-link" href={props.links[i]}>
            <img className="social-image" src={item}/>
          </a>
        )}
      </div>
    </div>
  )
}

export default Social