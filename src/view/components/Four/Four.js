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
    const {clientWidth} = document.body
    let heightCont, widthCont, fontSize, fontSizeTitle, percent;
    const {length, strokeDark, fill, fillWhite, fontFamily} = this.props.state

    if (this.props.state.length && this.props.par) {
      heightCont = length ? length.widthCont * 0.5 : length.heightCont * 2
      widthCont = length ? length.widthCont : length.heightCont * 2
      percent = length.widthCont * 100 / 1920 * 0.01
      fontSizeTitle = percent * 40
      fontSize = percent * 28
    } else {
      heightCont = (clientWidth - 60) * 0.5
      widthCont = clientWidth
      percent = widthCont * 100 / 1920 * 0.01
      fontSizeTitle = percent * 40
      fontSize = percent * 28
    }

    const pos = (length, percent, height) => {
      return (length * percent) / 100 - height
    }
    console.log({heightCont, widthCont, fontSize})
    return <div className="componentBox" style={{height: heightCont, width: widthCont, opacity: this.state.view}}>
      {!this.props.par && <Back history={this.props.history}/>}
      {heightCont && widthCont && fontSize ? <Stage width={widthCont} height={heightCont}>
            <Layer>
              <Text
                  x={0}
                  y={pos(heightCont, 5, fontSize)}
                  align='center'
                  width={widthCont}
                  fontFamily={fontFamily}
                  fontSize={fontSizeTitle}
                  fill={strokeDark}
                  text="Показатели"
              />
            </Layer>
          </Stage>
          : ''}
      <ChartFour/>
    </div>
  }
}


export default connect(state => {
  return {state: state}
})(Four)
