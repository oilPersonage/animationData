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
          x={pos(width, 10, 0)}
          y={pos(height, 90, pos(height, 30, 0))}
          width={pos(width, 6, 0)}
          height={pos(height, 30, 0)}
          fill={fillOval}
      />
      <Circle
          x={pos(width, 13, 0)}
          y={pos(height, 90, 60)}
          radius={pos(width, 2, 0)}
          fill={fillOval}
          stroke={fillCircle}
      />
      <Circle
          x={pos(width, 13, 0)}
          y={pos(height, 90, 60)}
          radius={pos(width, 1.8, 0)}
          fill={fillOval}
          stroke={fillCircle}
      />
      <Rect
          x={pos(width, 20, 0)}
          y={pos(height, 90, pos(height, 30, 0))}
          width={pos(width, 6, 0)}
          height={pos(height, 30, 0)}
          fill={fillOval}
      />
      <Rect
          x={pos(width, 30, 0)}
          y={pos(height, 90, pos(height, 30, 0))}
          width={pos(width, 6, 0)}
          height={pos(height, 30, 0)}
          fill={fillOval}
      />
      <Rect
          x={pos(width, 40, 0)}
          y={pos(height, 90, pos(height, 30, 0))}
          width={pos(width, 6, 0)}
          height={pos(height, 30, 0)}
          fill={fillOval}
      />
    </Layer>
  }
}
