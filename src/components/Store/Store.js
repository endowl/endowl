import "./Store.css";

function Store(props){
  return(
    <div className="store">
        {/* <a id="store"/> */}
      <h4 className="store-title">Meet Owlfred, your endowl guru!</h4>
      <a href="https://owlfred-shop.creator-spring.com/">
        <img className="store-image" src={props.img}/>
      </a>
      <p className="store-cta">Check out our Swag Store for new Owlfred Designs!</p>
      <a className="store-link" href="https://owlfred-shop.creator-spring.com/">
        <div className="store-link-content">Shop now</div>
      </a>
    </div>
  )
}

export default Store