import React from 'react'
import {Text, Layer, Rect, Circle, RegularPolygon, Line} from 'react-konva';

export default function WatterHome(props) {
  const {height, width, pos, fontSize, well, rotation} = props
  const {fill, fontFamily, strokeDark, fillHome} = props.state
  const {nsQ, nsH} = props.now

  const circle = [
    {
      x: pos(width, 82.5, 0),
      y: pos(height, 55, 0),
      radius: pos(width, 2, 0),
    }]

  let amount = 0
  well.map(item => amount = item.v+amount)

  return <Layer>
    <Rect
        // TOP БОЛЬШОЙ
        x={pos(width, 49.9, 0)}
        y={pos(height, 60, pos(height, 45, 0))}
        width={pos(width, 20.2, 0)}
        height={pos(height, 45, 0)}
        stroke={fill}
    />
    <Rect
        // TOP small
        x={pos(width, 50, 0)}
        y={pos(height, 60, pos(height, 25, 0))}
        width={pos(width, 20, 0)}
        height={pos(height, 25, 0)}
        fill={fill}
    />
    <Line
        points={[
          pos(width, 50, 0),
          pos(height, 40, 0),

          pos(width, 50, 0),
          pos(height, 39.5, 0),

          pos(width, 50, 0),
          pos(height, 32 + rotation, 0),

          pos(width, 50, 0),
          pos(height, 32 + rotation, 0),

          pos(width, 53, 0),
          pos(height, 33  -rotation / 2, 0),

          pos(width, 55 + rotation, 0),
          pos(height, 33  + rotation, 0),

          pos(width, 55.5 + rotation, 0),
          pos(height, 33, 0),

          pos(width, 60.5 + rotation, 0),
          pos(height, 32.5 + rotation, 0),

          pos(width, 65.5 - rotation, 0),
          pos(height, 34 - rotation, 0),

          pos(width, 70, 0),
          pos(height, 33 - rotation, 0),

          pos(width, 70, 0),
          pos(height, 31.5, 0),

          pos(width, 70, 0),
          pos(height, 35.5, 0),

          pos(width, 70, 0),
          pos(height, 39.5, 0),

          pos(width, 70, 0),
          pos(height, 40, 0),
        ]}
        tension={0.2}
        fill={fill}
        closed={true}
    />
    <Rect
        // TOP Home
        x={pos(width, 75, 0)}
        y={pos(height, 60, pos(height, 20, 0))}
        width={pos(width, 15, 0)}
        height={pos(height, 20, 0)}
        fill={fillHome}
    />
    <RegularPolygon
        // TOP Home triangle
        x={pos(width, 82.5, 0)}
        y={pos(height, 55, pos(height, 20, 0))}
        sides={3}
        scaleY={0.5}
        width={pos(width, 25, 0)}
        // radius={70}
        fill={fillHome}
    />
    <Rect
        // Window Home
        x={pos(width, 75.5, 0)}
        y={pos(height, 48, pos(height, 5, 0))}
        width={pos(width, 6.5, 0)}
        height={pos(height, 6, 0)}
        fill="#fff"
    />
    <Rect
        // Window Home
        x={pos(width, 83, 0)}
        y={pos(height, 48, pos(height, 5, 0))}
        width={pos(width, 6.5, 0)}
        height={pos(height, 6, 0)}
        fill="#fff"
    />
    <Text
        x={pos(width, 76.5, 0)}
        y={pos(height, 47.6, fontSize)}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fill={strokeDark}
        text={`Q: ${nsQ.toFixed(2)}`}
    />
    <Text
        x={pos(width, 84, 0)}
        y={pos(height, 47.6, fontSize)}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fill={strokeDark}
        text={`H: ${nsH.toFixed(2)}`}
    />
    <Line
        points={[
          pos(width, 67, 0),
          pos(height, 59, 0),
          pos(width, 65.5, 0),
          pos(height, 56, 0),
          pos(width, 69, 0),
          pos(height, 56, 0),
          pos(width, 68, 0),
          pos(height, 58, 0),
          pos(width, 82.5, 0),
          pos(height, 58, 0),
          pos(width, 82.5, 0),
          pos(height, 59, 0),
        ]}
        closed={true}
        fill={fill}
        stroke={strokeDark}
        strokeWidth={2}
    />
    <Line
        points={[
          pos(width, 82.5, 0),
          pos(height, 51, 0),
          pos(width, 96, 0),
          pos(height, 51, 0),
          pos(width, 96, 0),
          pos(height, 52, 0),
          pos(width, 82.5, 0),
          pos(height, 52, 0),
        ]}
        stroke={strokeDark}
        closed={true}
        fill={fill}
        strokeWidth={2}
    />
    {circle.map((circle, index) => <Circle
        key={`${circle.x}${index}`}
        x={circle.x}
        y={circle.y}
        radius={circle.radius}
        dash={circle.dash}
        stroke={strokeDark}
        fill={fill}
    />)}
    <Line
        points={[
          pos(width, 80, 0),
          pos(height, 60, 0),
          pos(width, 82.5, 0),
          pos(height, 55, 0),
          pos(width, 85, 0),
          pos(height, 60, 0),
        ]}
        stroke={strokeDark}
        fill={fill}
        strokeWidth={2}
        closed={true}
    />
    <Text
        x={pos(width, 58.5, 0)}
        y={pos(height, 20, fontSize)}
        fontFamily={fontFamily}
        fontSize={fontSize*1.2}
        fill={strokeDark}
        text='РЧВ'
    />
    <Text
        x={pos(width, 81.5, 0)}
        y={pos(height, 37, fontSize)}
        fontFamily={fontFamily}
        fontSize={fontSize*1.2}
        fill={strokeDark}
        text='НС'
    />
  </Layer>
}
