import React from 'react'
import {Stage, Text, Layer} from 'react-konva';
import {connect} from 'react-redux'
import {TimelineMax} from 'gsap/TimelineMax'

import Bollons from './Bollons'
import WaterHome from './WaterHome'
import BottomBlock from './BottomBlock'
import Chart from './Chart'
import Back from '../Back'

let direction = true

class One extends React.Component {

  constructor(props) {
    super(props)
    this.state = {view: 0, water: 1}
  }

  componentDidMount() {
    this.setState({view: 1})
    const start = {val: -0.5}

    this.tl = new TimelineMax({
      onComplete: () => {
        this.tl.reverse();
      },
      onReverseComplete: () => {
        this.tl.play();
      }
    });

    this.tl.to(start, 1, {
      val: 0.5, onUpdate: () => this.setState({water: start.val}),
    })
  }

  sinus = () => {

  }

  from = () => {
    this.tl.reversed()
  }


  componentWillUnmount() {
    window.cancelAnimationFrame(this.req)
  }


  render() {
    const {now, well} = this.props
    const {clientWidth} = document.body
    let heightCont, widthCont, fontSize, fontSizeTitle, percent;
    const {length, strokeDark, fontFamily} = this.props.state

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
                     rotation={this.state.water}
                     height={heightCont}
                     width={widthCont}
                     state={{...this.props.state}}
                     fontSize={fontSize}/>
            <BottomBlock rotation={this.state.water} pos={pos} height={heightCont} width={widthCont}
                         state={{...this.props.state}} fontSize={fontSize}/>
            <WaterHome rotation={this.state.water} well={well} now={now} pos={pos} height={heightCont} width={widthCont}
                       state={{...this.props.state}} fontSize={fontSize}/>
          </Stage>
          : null}
    </div>
  }
}

export default connect(state => {
  return {state: state}
})(One)
