import {useEffect, useState} from 'react'
import Popup from 'reactjs-popup'
import {RxCross2} from 'react-icons/rx'

import MovieCard from '../MovieCard'
import './index.css'

const Home = props => {
  const {history} = props
  const [moviesList, setMoviesList] = useState([])
  useEffect(() => {
    const fetchDetails = async () => {
      const url = 'https://hoblist.com/api/movieList'

      const objBody = {
        category: 'movies',

        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(objBody),
      }

      const response = await fetch(url, options)

      const data = await response.json()

      setMoviesList(data.result)

      console.log(data)
    }
    fetchDetails()
  }, [])

  return (
    <div className="home-container">
      <div className="header-container">
        <h1 className="header-heading">Geeksynergy Movie </h1>
        <Popup
          trigger={<button className="company-info-text">Company Info</button>}
          modal
          position="center center"
        >
          {close => (
            <div className="company-details-container">
              <button onClick={() => close()} className="close-button">
                <RxCross2 className="cross-icon" />
              </button>
              <h1 className="company-name-text">
                Company :
                <span className="company-name">
                  Geeksynergy Technologies Pvt Ltd
                </span>
              </h1>
              <h1 className="company-name-text">
                Address :
                <span className="company-name">Sanjayanagar, Bengaluru-56</span>
              </h1>
              <h1 className="company-name-text">
                Phone: :<span className="company-name">XXXXXXXXX09</span>
              </h1>
              <h1 className="company-name-text">
                Email: :<span className="company-name">XXXXXX@gmail.com</span>
              </h1>
            </div>
          )}
        </Popup>
      </div>

      <ul className="movies-list-container">
        {moviesList.map(item => (
          <MovieCard item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default Home
