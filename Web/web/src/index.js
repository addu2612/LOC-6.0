import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import Login from './components/login'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        {/* <Route path="/maps" component={Maps} /> */}
        <Route path="/login" component={Login} />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
