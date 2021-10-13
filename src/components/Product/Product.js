import product from "../../images/Product.jpeg"

import "./Product.css"

function Product(props) {
  return (
    <div className="product">
        <a id="product" />
      <div className="product-hr"/>
      <h2 className="product-title">Smart Estate Planning</h2>
      <p className="product-content">
        Endowments can be hard if not planned out, but using blockchain technology Endowl transforms estate planning from an opaque, hard to understand, and expensive process into something simple and empowering for everyone,
        <span className="product-content-emphasis"> without the need for a lawyer</span>
        . Smart Estate planning allows you to take care of your loved ones and digital assets so when you're gone, your footprint remains forever. 
      </p>
      {/* <img className="product-image" src={product}/> */}
    </div>
  );
}

export default Product