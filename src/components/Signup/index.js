// Write your JS code here

import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class SignUp extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    number: '',
    profession: '',
    userExists: false,
    isEmailExists: false,
    isNumberExists: false,
    errorText: '',
  }

  onSubmitCredentials = e => {
    e.preventDefault()

    const {name, email, password, number, profession} = this.state

    const usersArray = JSON.parse(localStorage.getItem('user')) || []

    const userFound = usersArray.find(user => user.name === name)

    if (userFound === undefined) {
      const usersDetails = [
        ...usersArray,
        {name, email, password, number, profession},
      ]
      localStorage.setItem('user', JSON.stringify(usersDetails))
      this.setState({
        name: '',
        password: '',
        email: '',
        number: '',
        profession: '',
        errorText: '',
      })
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({
        userExists: true,
        name: '',
        password: '',
        email: '',
        number: '',
        profession: '',
        errorText: 'User Already Exists',
      })
    }
  }

  render() {
    const {
      name,
      email,
      password,
      number,
      profession,
      userExists,
      errorText,
    } = this.state
    return (
      <div className="sign-up-page-container">
        <h1 className="sign-up-page-heading">Sign Up Page</h1>
        <form onSubmit={this.onSubmitCredentials} className="form-container">
          <div className="input-container">
            <label className="label-text" htmlFor="name">
              USERNAME
            </label>{' '}
            <br />
            <input
              className="input-element"
              onChange={e => this.setState({name: e.target.value})}
              value={name}
              type="text"
              id="name"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="password">
              PASSWORD
            </label>{' '}
            <br />
            <input
              className="input-element"
              value={password}
              onChange={e => this.setState({password: e.target.value})}
              type="password"
              id="password"
            />
          </div>

          <div className="input-container">
            <label className="label-text" htmlFor="email">
              EMAIL
            </label>{' '}
            <br />
            <input
              className="input-element"
              value={email}
              onChange={e => this.setState({email: e.target.value})}
              type="email"
              id="email"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="name">
              PHONE NUMBER
            </label>{' '}
            <br />
            <input
              className="input-element"
              value={number}
              onChange={e => this.setState({number: e.target.value})}
              type="number"
              id="number"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="profession">
              PROFESSION
            </label>{' '}
            <br />
            <select
              onChange={e => this.setState({profession: e.target.value})}
              className="input-element"
              value={profession}
            >
              <option value="software developer">Software Developer</option>
              <option value="film maker"> Film Maker</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <Link className="link-element" to="/">
          <p className="login-text">
            If you are already a user you can login by clicking here?
          </p>
        </Link>
        <p>{errorText}</p>
      </div>
    )
  }
}

export default SignUp
