import './NewsItem.css';

function NewsItem(props) {
  return (
    <div className="news-item">
      <img className="news-item-img" src={process.env.PUBLIC_URL + props.img}/>
      <span className="news-item-headline">{props.headline}</span>
    </div>
  );
}

export default NewsItem
