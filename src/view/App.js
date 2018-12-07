import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'

import '@fortawesome/fontawesome-free/css/all.min.css'
import One from "./components/One/One";
import Four from "./components/Four";
import Three from "./components/Three";
import Two from "./components/Two";

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Router>
          <Switch>
            <Route path="/one" component={One} />
            <Route path="/two/" component={Two} />
            <Route path="/three/" component={Three} />
            <Route path="/four/" component={Four} />
            <Home path="/" extract component={Home} />
          </Switch>
        </Router>
    )
  }
}
