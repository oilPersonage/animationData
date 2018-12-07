import React from 'react'
import { Stage, Layer, Rect, RegularPolygon } from 'react-konva';
import Bollons from './Bollons'
import WaterHome from './WaterHome'

export default class One  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 0,

    }
  }
  componentDidMount() {
    this.setState({
      height: this.cont.clientHeight,
      width: this.cont.clientWidth,
      view: 1
    })
  }


  render () {
    const pos = (length, percent, height) => {
      return (length * percent) / 100 - height
    }
    const {height, width} = this.state
    const fillOval = '#9FB7FF'
    const fillCircle = '#5b6a92'
    return <div className="componentBox" ref={node=> this.cont = node} style={{opacity: this.state.view}}>
        <div className="title">ВЗУ</div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Bollons height={height} width={width}/>
          <Layer>
            <Rect
                // НИЖНИЙ БОЛЬШОЙ
                x={pos(width, 50, 0)}
                y={pos(height, 90, pos(height, 25, 0))}
                width={pos(width, 40, 0)}
                height={pos(height, 25, 0)}
                fill={fillOval}
                onClick={this.handleClick}
            />
          </Layer>
          <WaterHome height={height} width={width}/>
        </Stage>
    </div>
  }
}
