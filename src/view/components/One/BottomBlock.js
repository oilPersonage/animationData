import React from 'react'
import {Layer, Rect, Circle, Line} from 'react-konva';
import Konva from 'konva'

export default class BottomBlock extends React.Component {

  componentDidMount () {
    const angularSpeed = 60
    new Konva.Animation(function(frame) {
      const angleDiff = frame.timeDiff * angularSpeed / 1000;
      this.lightnes.rotate(angleDiff);
    }, this.layer);

  }

  render() {
    const {height, width, pos} = this.props
    const {fill, fillWhite, strokeDark} = this.props.state
    return <Layer ref={node=> this.layer = node}>
      <Rect
          x={pos(width, 50, 0)}
          y={pos(height, 90, pos(height, 25, 0))}
          width={pos(width, 40, 0)}
          height={pos(height, 25, 0)}
          fill={fill}
      />
      <Rect  // small white
          x={pos(width, 52.5, 0)}
          y={pos(height, 75, pos(height, 7, 0))}
          width={pos(width, 5, 0)}
          height={pos(height, 7, 0)}
          fill={fillWhite}
      />
      <Rect  // small white
          x={pos(width, 57.8, 0)}
          y={pos(height, 75, pos(height, 7, 0))}
          width={pos(width, 5, 0)}
          height={pos(height, 7, 0)}
          fill={fillWhite}
      />
      <Rect
          x={pos(width, 52.5, 0)}
          y={pos(height, 87, pos(height, 7, 0))}
          width={pos(width, 5, 0)}
          height={pos(height, 7, 0)}
          fill={fillWhite}
      />
      <Rect
          x={pos(width, 57.8, 0)}
          y={pos(height, 87, pos(height, 7, 0))}
          width={pos(width, 5, 0)}
          height={pos(height, 7, 0)}
          fill={fillWhite}
      />
      <Rect  // small white right
          x={pos(width, 77.5, 0)}
          y={pos(height, 75.5, pos(height, 7, 0))}
          width={pos(width, 5, 0)}
          height={pos(height, 7, 0)}
          fill={fillWhite}
      />
      <Rect
          x={pos(width, 82.8, 0)}
          y={pos(height, 75.5, pos(height, 7, 0))}
          width={pos(width, 5, 0)}
          height={pos(height, 7, 0)}
          fill={fillWhite}
      />
      <Rect
          x={pos(width, 77.5, 0)}
          y={pos(height, 87, pos(height, 7, 0))}
          width={pos(width, 5, 0)}
          height={pos(height, 7, 0)}
          fill={fillWhite}
      />
      <Rect
          x={pos(width, 82.8, 0)}
          y={pos(height, 87, pos(height, 7, 0))}
          width={pos(width, 5, 0)}
          height={pos(height, 7, 0)}
          fill={fillWhite}
      />
      <Circle
          x={pos(width, 70.5, 0)}
          y={pos(height, 77.5, 0)}
          radius={pos(height, 8, 0)}
          stroke={strokeDark}
      />
      <Line
          ref={node=> this.lightnes = node}
          points={[
            pos(width, 72.5, 0),
            pos(height, 72, 0),

            pos(width, 70, 0),
            pos(height, 77, 0),

            pos(width, 71.5, 0),
            pos(height, 77.5, 0),

            pos(width, 69, 0),
            pos(height, 82.5, 0),

            pos(width, 69.8, 0),
            pos(height, 82.5, 0),

            pos(width, 69, 0),
            pos(height, 82.5, 0),

            pos(width, 69, 0),
            pos(height, 81, 0),
          ]}
          stroke={strokeDark}
          strokeWidth={2}
      />
    </Layer>
  }
}
