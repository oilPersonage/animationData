import React from 'react'
import {Stage, Text, Layer} from 'react-konva';
import {connect} from 'react-redux'
import {TimelineMax} from 'gsap/TimelineMax'

import Bollons from './Bollons'
import WaterHome from './WaterHome'
import BottomBlock from './BottomBlock'
import Chart from './Chart'
import Back from '../Back'

class One extends React.Component {

  constructor(props) {
    super(props)
    this.state = {view: 0, animation: 1}
  }

  componentDidMount() {
    requestAnimationFrame(this.req)
      this.setState({view: 1})
  }

  req = () => {
    this.setState({animation: this.state.animation + 1})
      requestAnimationFrame(this.req)
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.req)
  }


  render() {
    const {now, well} = this.props
    const {clientWidth} = document.body
    let heightCont, widthCont, fontSize, fontSizeTitle, percent;
    const {length, strokeDark, fontFamily} = this.props.state

      const circle = <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.65 62.65">
        <circle className="cls-1" cx="31.35" cy="31.74" r="27.98"/>
        <path className="cls-2"
              d="M196,168.25a27.88,27.88,0,1,1-10.86,2.19A27.9,27.9,0,0,1,196,168.25m0-.15A28,28,0,1,0,224,196.15,28.05,28.05,0,0,0,196,168.1Z"
              transform="translate(-164.62 -164.41)"/>
        <circle className="cls-3" cx="31.35" cy="31.74" r="20.48"/>
        <circle className="cls-1" cx="31.33" cy="31.69" r="10.7"/>
        <path className="cls-2"
              d="M196,185.47a10.63,10.63,0,1,1-10.63,10.63h0A10.64,10.64,0,0,1,196,185.47m0-.15a10.78,10.78,0,1,0,10.78,10.78h0A10.79,10.79,0,0,0,196,185.32Z"
              transform="translate(-164.62 -164.41)"/>
        <path className="cls-2"
              d="M196,164.82a30.83,30.83,0,1,1-12,2.43,30.82,30.82,0,0,1,12-2.43m0-.16A31.08,31.08,0,1,0,227,195.74,31.08,31.08,0,0,0,196,164.66Z"
              transform="translate(-164.62 -164.41)"/>
        <line className="cls-4" x1="31.45" y1="11.26" x2="34.3" y2="3.91"/>
        <line className="cls-4" x1="25.13" y1="12.29" x2="25.57" y2="4.42"/>
        <line className="cls-4" x1="19.43" y1="15.07" x2="17.42" y2="7.45"/>
        <line className="cls-4" x1="14.77" y1="19.62" x2="10.5" y2="12.99"/>
        <line className="cls-4" x1="11.88" y1="25.33" x2="5.77" y2="20.35"/>
        <line className="cls-4" x1="10.9" y1="31.66" x2="3.55" y2="28.81"/>
        <line className="cls-4" x1="11.93" y1="37.99" x2="4.05" y2="37.55"/>
        <line className="cls-4" x1="14.7" y1="43.69" x2="7.08" y2="45.7"/>
        <line className="cls-4" x1="19.4" y1="48.35" x2="12.78" y2="52.62"/>
        <line className="cls-4" x1="25.27" y1="51.24" x2="20.29" y2="57.34"/>
        <line className="cls-4" x1="31.6" y1="52.21" x2="28.75" y2="59.56"/>
        <line className="cls-4" x1="37.93" y1="51.19" x2="37.49" y2="59.06"/>
        <line className="cls-4" x1="43.62" y1="48.26" x2="45.64" y2="55.88"/>
        <line className="cls-4" x1="48.13" y1="43.56" x2="52.41" y2="50.19"/>
        <line className="cls-4" x1="50.87" y1="38" x2="56.98" y2="42.98"/>
        <line className="cls-4" x1="51.85" y1="31.66" x2="59.2" y2="34.51"/>
        <line className="cls-4" x1="50.83" y1="25.34" x2="58.7" y2="25.78"/>
        <line className="cls-4" x1="47.9" y1="19.64" x2="55.52" y2="17.63"/>
        <line className="cls-4" x1="43.35" y1="15.13" x2="49.98" y2="10.86"/>
        <line className="cls-4" x1="37.78" y1="12.24" x2="42.76" y2="6.13"/>
        <line className="cls-4" x1="34.75" y1="21.47" x2="31.45" y2="31.66"/>
        <line className="cls-4" x1="31.45" y1="31.66" x2="31.43" y2="20.92"/>
        <line className="cls-4" x1="31.45" y1="31.66" x2="28.1" y2="21.41"/>
        <line className="cls-4" x1="31.45" y1="31.66" x2="25.07" y2="22.91"/>
        <line className="cls-4" x1="31.45" y1="31.66" x2="22.65" y2="25.29"/>
        <line className="cls-4" x1="31.45" y1="31.66" x2="21.09" y2="28.32"/>
        <line className="cls-4" x1="31.45" y1="31.66" x2="20.55" y2="31.68"/>
        <line className="cls-4" x1="31.45" y1="31.66" x2="21.09" y2="35.05"/>
        <line className="cls-4" x1="31.45" y1="31.66" x2="22.65" y2="38.08"/>
        <line className="cls-4" x1="31.45" y1="31.66" x2="25.08" y2="40.47"/>
        <line className="cls-4" x1="31.45" y1="31.66" x2="28.12" y2="41.98"/>
        <line className="cls-4" x1="31.47" y1="42.46" x2="31.45" y2="31.66"/>
        <line className="cls-4" x1="34.79" y1="41.89" x2="31.45" y2="31.66"/>
        <line className="cls-4" x1="37.77" y1="40.33" x2="31.45" y2="31.66"/>
        <line className="cls-4" x1="40.11" y1="37.93" x2="31.45" y2="31.66"/>
        <line className="cls-4" x1="41.6" y1="34.94" x2="31.45" y2="31.66"/>
        <line className="cls-4" x1="42.1" y1="31.65" x2="31.45" y2="31.66"/>
        <line className="cls-4" x1="41.57" y1="28.36" x2="31.45" y2="31.66"/>
        <line className="cls-4" x1="40.06" y1="25.38" x2="31.45" y2="31.66"/>
        <line className="cls-4" x1="37.71" y1="23.01" x2="31.45" y2="31.66"/>
      </svg>

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

    return <div className="componentBox" style={{height: heightCont, width: widthCont, opacity: this.state.view}}
                ref={node => this.cont = node}>
      <Chart/>
      {!this.props.par && <Back history={this.props.history}/>}
      {heightCont && widthCont && fontSize ? <Stage width={widthCont} height={heightCont}>
            <Layer>
              <Text
                  x={0}
                  y={pos(heightCont, 5, fontSize)}
                  fontFamily={fontFamily}
                  fontSize={fontSizeTitle}
                  align={"center"}
                  width={widthCont}
                  fill={strokeDark}
                  text="ВНИИСОК"
              />
            </Layer>
            <Bollons well={well}
                     dispatch={this.props.dispatch}
                     circ={this.state.circ}
                     animation={this.state.animation}
                     height={heightCont}
                     width={widthCont}
                     state={{...this.props.state}}
                     fontSize={fontSize}/>
            <BottomBlock animation={this.state.animation} pos={pos} height={heightCont} width={widthCont}
                         state={{...this.props.state}} fontSize={fontSize}/>
            <WaterHome animation={this.state.animation} well={well} now={now} pos={pos} height={heightCont} width={widthCont}
                       state={{...this.props.state}} fontSize={fontSize}/>
          </Stage>
          : null}
        {/*{console.log(`${360 * (this.state.animation % 10 * 0.1)}deg`)}*/}
        <div className="svg1" style={{ transform: `rotate(${360 / this.state.animation % 10}deg)` }}>{circle}</div>
    </div>
  }
}

export default connect(state => {
  return {state: state}
})(One)
