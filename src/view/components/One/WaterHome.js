import React from 'react'
import {Text, Layer, Rect, Circle, RegularPolygon, Line} from 'react-konva';

export default function Bollons  (props){

        const {height, width} = props
        const fillOval = '#9FB7FF'
        const fillStrock = '#353b76'
        const percent = width * 100 / 1920 * 0.01
        const fontSize = percent * 28
        const colorHome = '#e29c80'
        const pos = (length, percent, height) => {
            return (length * percent) / 100 - height
        }

        const circle = [
            {
                x: pos(width, 82.5, 0),
                y: pos(height, 55,0),
                radius: pos(width, 2, 0),
            },
            {
                x: pos(width, 82.5, 0),
                y: pos(height, 55,0),
                radius: pos(width, 1.8, 0),
                dash: [10, 5],
            }
            ]

        return <Layer>
            <Rect
                // TOP Small
                x={pos(width, 50, 0)}
                y={pos(height, 60, pos(height, 45, 0))}
                width={pos(width, 20, 0)}
                height={pos(height, 45, 0)}
                stroke={fillStrock}
            />
            <Rect
                // TOP БОЛЬШОЙ
                x={pos(width, 50, 0)}
                y={pos(height, 60, pos(height, 10, 0))}
                width={pos(width, 20, 0)}
                height={pos(height, 10, 0)}
                fill={fillOval}
            />
            <Rect
                // TOP Home
                x={pos(width, 75, 0)}
                y={pos(height, 60, pos(height, 20, 0))}
                width={pos(width, 15, 0)}
                height={pos(height, 20, 0)}
                fill={colorHome}
            />
            <RegularPolygon
                // TOP Home triangle
                x={pos(width, 82.5, 0)}
                y={pos(height, 55, pos(height, 20, 0))}
                sides={3}
                scaleY={0.5}
                width={pos(width, 25, 0)}
                // radius={70}
                fill={colorHome}
            />
            <Rect
                // Window Home
                x={pos(width, 76, 0)}
                y={pos(height, 48, pos(height, 5, 0))}
                width={pos(width, 5, 0)}
                height={pos(height, 6, 0)}
                fill="#fff"
            />
            <Rect
                // Window Home
                x={pos(width, 84, 0)}
                y={pos(height, 48, pos(height, 5, 0))}
                width={pos(width, 5, 0)}
                height={pos(height, 6, 0)}
                fill="#fff"
            />
            <Text
                x={pos(width, 78, 0)}
                y={pos(height, 48, fontSize)}
                fontFamily="RobotoCondensed"
                fontSize={fontSize}
                fill={fillStrock}
                text="Q"
            />
            <Text
                x={pos(width, 86, 0)}
                y={pos(height, 48, fontSize)}
                fontFamily="RobotoCondensed"
                fontSize={fontSize}
                fill={fillStrock}
                text="H"
            />
            {circle.map((circle, index) => <Circle
                key={`${circle.x}${index}`}
                x={circle.x}
                y={circle.y}
                radius={circle.radius}
                dash={circle.dash}
                stroke={fillStrock}
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
                stroke={fillStrock}
                strokeWidth={2}
                closed={true}
            />
            <Line
                points={[
                    pos(width, 68, 0),
                    pos(height, 59, 0),
                    pos(width, 65, 0),
                    pos(height, 59, 0),
                    pos(width, 68, 0),
                    pos(height, 55, 0),
                    pos(width, 68, 0),
                    pos(height, 59, 0),
                    pos(width, 82.5, 0),
                    pos(height, 59, 0),
                ]}
                stroke={fillStrock}
                strokeWidth={2}
            />
            <Line
                points={[
                    pos(width, 82.5, 0),
                    pos(height, 51, 0),
                    pos(width, 96, 0),
                    pos(height, 51, 0),
                ]}
                stroke={fillStrock}
                strokeWidth={2}
            />
        </Layer>
}
