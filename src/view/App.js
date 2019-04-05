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
import HeadMenu from "./HeadMenu";

import ns from '../data/nsData.json'
import wellData from '../data/wellsData.json'
import eData from '../data/eData.json'

import home1 from '../data/houses/houseData-1'
import home2 from '../data/houses/houseData-2'
import home3 from '../data/houses/houseData-3'
import home4 from '../data/houses/houseData-4'
import home5 from '../data/houses/houseData-5'
import home6 from '../data/houses/houseData-6'
import home7 from '../data/houses/houseData-7'
import home8 from '../data/houses/houseData-8'
import home9 from '../data/houses/houseData-9'

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({basename: '/'});
const store = createStore(reducers)
const houses = {
  home1, home2, home3, home4, home5, home6, home7, home8, home9
};

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
        nsH: 0,
        nsV: 0
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
    let finishGraphE = []
    const finishNSEE = []
    const finishGraphNSH = []
    const graphHouses = []
    Object.keys(wellData).map((item, index) => {
      const body = {q: wellData[item].q[currentIndex], v: wellData[item].v[currentIndex]}
      well.push(body)
      if (index <= currentIndex) {
        const clone = wellData[item].v.slice(0)
        const currentArr = clone.splice(0, currentIndex)
        arrGraph.push(currentArr)
      }
    })
    for (let i = 0; i <= currentIndex; i++) {
      const sum = arrGraph[0][i] + arrGraph[1][i] +  arrGraph[2][i] +  arrGraph[3][i]
      finishGraph.push(sum)
    }
    const cloneNS = ns.v.slice(0).splice(0, currentIndex)
    const cloneNSH = ns.h.slice(0).splice(0, currentIndex)
    const cloneE = eData.e.slice(0).splice(0, currentIndex)
    for (let h = 0; h <= 24; h++) {
      if (finishGraph[h*currentHourIndex]) {
        const y = (finishGraph[h * currentHourIndex] - finishGraph[(h - 1) * currentHourIndex]).toFixed(2)
        graph.push({y, x: h - 1})

        const nsY = cloneNS[(h)*currentHourIndex] - cloneNS[(h - 1 )*currentHourIndex]
        finishGraphNS.push({y: nsY, x: h -1})

        const nsYH = cloneNSH[(h)*currentHourIndex]
        finishGraphNSH.push({y: nsYH, x: h -1})
        const nsV = cloneNS[h*currentHourIndex];
        const nsE = cloneE[h * currentHourIndex];
        const nsEY = nsE / nsV;
        finishNSEE.push({y: nsEY, x: h -1})
  let sumHouses = 0;
        for(let hn = 1; hn <= 9; hn++){
          const homeIndex = `home${hn}`;
          sumHouses += ((houses[homeIndex].v[h*currentHourIndex] - houses[homeIndex].v[(h-1)*currentHourIndex]));
        }
                      ;
        graphHouses.push({ y: sumHouses, x: h -1});

        const nsEDiff = cloneE[(h)*currentHourIndex] - cloneE[(h - 1 )*currentHourIndex];
        finishGraphE.push({ y: nsEDiff, x: h -1});
      }
    }
    this.setState({
      electr: eData.e[currentIndex].toFixed(2),
      graph,
      finishGraphNS,
      finishGraphNSH,
      finishGraphE,
      finishNSEE,
      currentIndex,
      graphHouses,
      now: {
        nsQ: ns.q[currentIndex],
        nsH: ns.h[currentIndex],
        nsV: ns.v[currentIndex]
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
                <Route path="/two/" render={() => <Two now={now} history={history} well={well} graphHouses={this.state.graphHouses} currentIndex={this.state.currentIndex}/>} />
                <Route path="/three/" component={Three}/>
                <Route path="/four/" render={() => <Four graph={this.state.graph}
                                                         finishGraphNS={this.state.finishGraphNS}
                                                         finishGraphNSH={this.state.finishGraphNSH}
                                                         finishNSEE={this.state.finishNSEE}
                                                         finishGraphE={this.state.finishGraphE}
                                                         history={history} />} />
                <Route path="/home" render={() => <Home
                    electr={this.state.electr}
                    finishGraphNS={this.state.finishGraphNS}
                    finishGraphNSH={this.state.finishGraphNSH}
                    finishGraphE={this.state.finishGraphE}
                    finishNSEE={this.state.finishNSEE}
                    graph={this.state.graph}
                    graphHouses={this.state.graphHouses}
                    now={now}
                    history={history}
                    currentIndex={this.state.currentIndex}
                    well={well}/> } />
                <Route path="/" extract component={HeadMenu} />

              </Switch>
            </Router>
            <Modal well={well}/>
          </Provider>
      )
  }
}
