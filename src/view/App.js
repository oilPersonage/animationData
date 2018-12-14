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

import ns from '../data/nsData.json'
import wellData from '../data/wellsData.json'
import eData from '../data/eData.json'

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({basename: '/'});
const store = createStore(reducers)


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      electr: [],
      graph: [],
      finishGraphNS: [],
      finishGraphNSH: [],
      finishNSEE: [],
      currentIndex: [],
      now: {
        nsQ: 0,
        nsH: 0
      },
      well: [],
    }
  }

  componentWillMount () {
    this.getData()
  }

  getData = () => {
    const date = new Date()
    const currentIndex = Math.round((date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds()) / 5)
    const currentHourIndex = (5 * 12 * 60) / 5
    const graph = []
    const well = []
    const arrGraph = []
    const finishGraph = []
    let finishGraphNS = []
    const finishNSEE = []
    const finishGraphNSH = []
    Object.keys(wellData).map((item, index) => {
      const body = {q: wellData[item].q[currentIndex], v: wellData[item].v[currentIndex]}
      well.push(body)
      if (index <= currentIndex) {
        const clone = wellData[item].v.slice(0)
        const currentArr = clone.splice(0, currentIndex)
        arrGraph.push(currentArr)
      }
    })
    console.log(arrGraph);
    for (let i = 0; i <= currentIndex; i++) {
      const sum = arrGraph[0][i] + arrGraph[1][i] +  arrGraph[2][i] +  arrGraph[3][i]
      finishGraph.push(sum)

    }
    const cloneNS = ns.v.slice(0).splice(0, currentIndex)
    const cloneNSH = ns.h.slice(0).splice(0, currentIndex)
    for (let h = 0; h <= 24; h++) {
      if (finishGraph[h*currentHourIndex]) {
        const y = (finishGraph[(h) * currentHourIndex] - finishGraph[(h - 1) * currentHourIndex]).toFixed(2)
        graph.push({y, x: h - 1})

        const nsY = cloneNS[(h)*currentHourIndex] - cloneNS[(h - 1 )*currentHourIndex]
        finishGraphNS.push({y: nsY, x: h -1})

        const nsYH = cloneNSH[(h)*currentHourIndex]
        finishGraphNSH.push({y: nsYH, x: h -1})

        const nsEY = y / nsY
        finishNSEE.push({y: nsEY, x: h -1})
      }
    }
    this.setState({
      electr: eData.e[currentIndex].toFixed(2),
      graph,
      finishGraphNS,
      finishGraphNSH,
      finishNSEE,
      currentIndex,
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
      return (
          <Provider store={store}>
            <Router history={history}>
              <Switch>
                <Route path="/one" render={() => <One now={now} electr={this.state.electr} history={history}  well={well}/>} />
                <Route path="/two/" render={() => <Two now={now} history={history} well={well} currentIndex={this.state.currentIndex}/>} />
                <Route path="/three/" component={Three}/>
                <Route path="/four/" render={() => <Four graph={this.state.graph}
                                                         finishGraphNS={this.state.finishGraphNS}
                                                         finishGraphNSH={this.state.finishGraphNSH}
                                                         finishNSEE={this.state.finishNSEE}
                                                         history={history} />} />
                <Route path="/" extract render={() => <Home
                    electr={this.state.electr}
                    finishGraphNS={this.state.finishGraphNS}
                    finishGraphNSH={this.state.finishGraphNSH}
                    finishNSEE={this.state.finishNSEE}
                    graph={this.state.graph}
                    now={now}
                    history={history}
                    currentIndex={this.state.currentIndex}
                    well={well}/> } />
              </Switch>
            </Router>
            <Modal well={well}/>
          </Provider>
      )
  }
}
