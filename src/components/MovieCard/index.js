import {BiSolidUpArrow, BiSolidDownArrow} from 'react-icons/bi'
import './index.css'

const MovieCard = props => {
  const {item} = props

  const {
    director,
    poster,
    genre,
    title,
    stars,
    language,
    pageViews,
    totalVoted,
  } = item

  return (
    <li className="movie-list-item">
      <div className="movie-item-container">
        <div className="votes-button-container">
          <button className="up-vote-button">
            <BiSolidUpArrow className="arrow-image" />
          </button>
          <p>1</p>
          <button className="up-vote-button">
            <BiSolidDownArrow className="arrow-image" />
          </button>
          <p className="votes-text">Votes</p>
        </div>

        <img className="movie-poster-image" src={poster} />
        <div className="movie-details-container">
          <h1 className="movie-title-text">{title}</h1>
          <p className="genre-text">
            <span className="genre-label">Genre :</span>
            {genre}
          </p>
          <p className="genre-text">
            <span className="genre-label">Director :</span>
            {director[0]}
          </p>

          <p className="genre-text">
            <span className="genre-label">Starring :</span>
            {stars}
          </p>
          <div className="movie-language-container">
            <p className="min-text">Mins</p>
            <hr className="line" />
            <p className="min-text">{language}</p>
          </div>
          <div className="movie-views-container">
            <p>{pageViews} views</p>
            <hr className="side-line" />
            <p>Voted by {totalVoted} people </p>
          </div>
        </div>
      </div>
      <button className="watch-trailer-button">Watch Trailer</button>
    </li>
  )
}

export default MovieCard
