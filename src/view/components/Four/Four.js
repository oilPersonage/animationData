import React from 'react'

import {Text, Layer, Stage} from 'react-konva'
import Chart from 'chart.js'
import {connect} from 'react-redux'
import Back from "../Back";

import ChartFour from './CartFour'

class Four extends React.Component {
  constructor(props) {
    super(props)
    this.state = {view: 0}
  }

  componentDidMount() {
    this.setState({view: 1})
  }

  render() {
    const {clientWidth, clientHeight} = document.body
    let heightCont, widthCont, fontSizeTitle, percent;
    const {length} = this.props.state

    if (this.props.state.length && this.props.par) {
      heightCont = length ? length.widthCont * 0.5 : length.heightCont * 2
      widthCont = length ? length.widthCont : length.heightCont * 2
      percent = length.widthCont * 100 / 1920 * 0.01
      fontSizeTitle = percent * 40
    } else {
      // heightCont = (clientWidth - 120) * 0.5
      heightCont = clientHeight - 15
      widthCont = clientWidth
      percent = widthCont * 100 / 1920 * 0.01
      fontSizeTitle = percent * 40
    }

    return <div className="componentBox componentBoxFour" style={{height: heightCont, width: widthCont, opacity: this.state.view}}>
    {/*return <div className="componentBox componentBoxFour" style={{height:'100%', width: '100%', opacity: this.state.view}}>*/}
      {!this.props.par && <Back history={this.props.history}/>}
      <div className="titleFour" style={{fontSize: fontSizeTitle}}>Показатели</div>
      <ChartFour
          widthCont={widthCont}
          finishGraphNS={this.props.finishGraphNS}
          finishGraphNSH={this.props.finishGraphNSH}
          finishNSEE={this.props.finishNSEE}
          finishGraphE={this.props.finishGraphE}/>
    </div>
  }
}


export default connect(state => {
  return {state: state}
})(Four)
