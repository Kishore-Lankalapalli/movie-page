// Write your JS code here
import {useState} from 'react'

import {Link} from 'react-router-dom'
import './index.css'

const Login = props => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    password: '',
  })

  const [errorText, setError] = useState('')

  const {name, password} = userDetails

  const onSubmitCredentials = e => {
    e.preventDefault()

    const usersDb = JSON.parse(localStorage.getItem('user')) || []

    const userFound = usersDb.find(user => user.name === name)

    const {history} = props

    if (userFound === undefined) {
      setError('Invalid User')
    } else {
      if (userFound.password === password) {
        history.replace('/home')
      }
      setError('Invalid Password')
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">LOGIN PAGE</h1>
      <form onSubmit={onSubmitCredentials} className="login-form-container">
        <div className="input-container">
          <label className="login-label-text" htmlFor="name">
            USERNAME
          </label>
          <br />
          <input
            value={name}
            onChange={e =>
              setUserDetails({...userDetails, name: e.target.value})
            }
            className="user-input-element"
            id="name"
            type="text"
          />
        </div>

        <div>
          <label className="login-label-text" htmlFor="password">
            PASSWORD
          </label>{' '}
          <br />
          <input
            value={password}
            className="user-input-element"
            onChange={e =>
              setUserDetails({...userDetails, password: e.target.value})
            }
            id="password"
            type="password"
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>

      <p className="error-text">{errorText}</p>
      <Link className="link-element" to="/signup">
        <p className="login-text">
          if you are a new user sign up here by clicking here?
        </p>
      </Link>
    </div>
  )
}

export default Login
