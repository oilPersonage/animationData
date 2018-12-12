import React, {Component} from 'react'
import {Router, Route, Switch} from "react-router-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import '@fortawesome/fontawesome-free/css/all.min.css'

import reducers from '../utils/reducers'
import Home from './components/Home'
import One from "./components/One/One";
import Four from "./components/Four/Four";
import Three from "./components/Three/Three";
import Two from "./components/Two/Two";
import Modal from "./components/Modal";

import ns from '../data/nsData'
import wellData from '../data/wellsData'

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({basename: '/'});
const store = createStore(reducers)


export default class App extends Component {
  constructor(props) {
    super(props)

    const date = new Date()
    const currentIndex = Math.round((date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds()) / 5)
    const well = []
    Object.keys(wellData).map(item => {
      well.push({q: wellData[item].q[currentIndex], v: wellData[item].v[currentIndex]})
    })
    this.state = ({
      now: {
        nsQ: ns.q[currentIndex],
        nsH: ns.h[currentIndex]
      },
      well,
    })

  }

  getData = () => {
    const date = new Date()
    const currentIndex = Math.round((date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds()) / 5)
    const well = []
    Object.keys(wellData).map(item => well.push({q: wellData[item].q[currentIndex], v: wellData[item].v[currentIndex]}))
    this.setState({
      now: {
        nsQ: ns.q[currentIndex],
        nsH: ns.h[currentIndex]
      },
      well,
    })
  }

  componentDidMount() {
    this.setInterval = setInterval(() => {
      this.getData()
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.setInterval)
  }

  render() {
    const { now, well } = this.state;
    console.log(now, well)
    return (
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route path="/one" render={() => <One now={now} history={history} well={well}/>} />
              <Route path="/two/" component={Two}/>
              <Route path="/three/" component={Three}/>
              <Route path="/four/" component={Four}/>
              <Route path="/" extract render={() => <Home now={now} history={history} well={well}/> } />
            </Switch>
          </Router>
          <Modal/>
        </Provider>
    )
  }
}
