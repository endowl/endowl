import "./News.css";

function News(props) {
  return (
    <div>
      <a id="news"/>
      <div className="news">
      {props.children}
      </div>
    </div>
  );
}

export default News