import React from 'react'
import { Stage, Layer, Rect, Circle, RegularPolygon } from 'react-konva';

export default class Bollons extends React.Component {

  render () {
    const pos = (length, percent, height) => {
      return (length * percent) / 100 - height
    }
    const {height, width} = this.props
    const fillOval = '#9FB7FF'
    const fillCircle = '#5b6a92'
    return <Layer>
      <Rect
          // TOP БОЛЬШОЙ
          x={pos(width, 50, 0)}
          y={pos(height, 60, pos(height, 40, 0))}
          width={pos(width, 20, 0)}
          height={pos(height, 40, 0)}
          fill={fillOval}
          onClick={this.handleClick}
      />
      <Rect
          // TOP Home
          x={pos(width, 75, 0)}
          y={pos(height, 60, pos(height, 20, 0))}
          width={pos(width, 15, 0)}
          height={pos(height, 20, 0)}
          fill={fillOval}
          onClick={this.handleClick}
      />
      <RegularPolygon
          // TOP Home
          x={pos(width, 82.5, 0)}
          y={pos(height, 55, pos(height, 20, 0))}
          sides={3}
          scaleY={0.5}
          width={pos(width, 25, 0)}
          // radius={70}
          fill={fillOval}
          onClick={this.handleClick}
      />
    </Layer>
  }
}
