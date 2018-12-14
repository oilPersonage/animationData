import React from 'react'
import {Layer, Rect, Circle, Line, Text} from 'react-konva';
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
    const {height, width, pos, fontSizeNumber} = this.props
    const {fill, fillWhite, strokeDark, fontFamily} = this.props.state
    return <Layer ref={node=> this.layer = node}>
      <Rect
          x={pos(width, 50, 0)}
          y={pos(height, 90, pos(height, 25, 0))}
          width={pos(width, 40, 0)}
          height={pos(height, 25, 0)}
          fill={fill}
      />
      <Rect  // small white
          x={pos(width, 55.5, 0)}
          y={pos(height, 86, pos(height, 10, 0))}
          width={pos(width, 15, 0)}
          height={pos(height, 10, 0)}
          fill={fillWhite}
      />
      <Circle
          x={pos(width, 80.5, 0)}
          y={pos(height, 77.5, 0)}
          radius={pos(height, 8, 0)}
          stroke={strokeDark}
      />
      <Line
          ref={node=> this.lightnes = node}
          points={[
            pos(width, 82.5, 0),
            pos(height, 72, 0),

            pos(width, 80, 0),
            pos(height, 77, 0),

            pos(width, 81.5, 0),
            pos(height, 77.5, 0),

            pos(width, 79, 0),
            pos(height, 82.5, 0),

            pos(width, 79.8, 0),
            pos(height, 82.5, 0),

            pos(width, 79, 0),
            pos(height, 82.5, 0),

            pos(width, 79, 0),
            pos(height, 81, 0),
          ]}
          stroke={strokeDark}
          strokeWidth={2}
      />
      <Text  // small white
          x={pos(width, 58, 0)}
          y={pos(height, 83, fontSizeNumber)}
          fontSize={fontSizeNumber}
          fontFamily={fontFamily}
          fill={strokeDark}
          text={`${this.props.electr} кВт/ч`}
      />
      <Text  // small white
          x={pos(width, 61, 0)}
          y={pos(height, 72, fontSizeNumber)}
          fontSize={fontSizeNumber}
          fontFamily={fontFamily}
          fill={strokeDark}
          text={"Потребление электроэнергии"}
      />
    </Layer>
  }
}
