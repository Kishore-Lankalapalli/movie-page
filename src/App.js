import {Switch, Route} from 'react-router-dom'

import SignUp from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/home" component={Home} />
  </Switch>
)

export default App
