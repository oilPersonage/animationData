import React from 'react'
import { Layer, Rect, Circle, Line} from 'react-konva';

export default function BottomBlock({height, width, pos}) {
    const fillOval = '#9FB7FF',
        fillWhite = '#fff'
    const fillStrock = '#353b76'
    return <Layer>
        <Rect
            x={pos(width, 50, 0)}
            y={pos(height, 90, pos(height, 25, 0))}
            width={pos(width, 40, 0)}
            height={pos(height, 25, 0)}
            fill={fillOval}
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
            stroke={fillStrock}
        />
        <Line
            points={[
                pos(width, 72.5, 0),
                pos(height, 72, 0),

                pos(width, 70, 0),
                pos(height, 77, 0),

                pos(width, 71.5, 0),
                pos(height, 77.5, 0),

                pos(width, 69, 0),
                pos(height, 82.5, 0),

                pos(width, 70, 0),
                pos(height, 82.5, 0),

                pos(width, 69, 0),
                pos(height, 82.5, 0),

                pos(width, 69, 0),
                pos(height, 81, 0),
            ]}
            stroke={fillStrock}
            strokeWidth={2}
        />
    </Layer>
}