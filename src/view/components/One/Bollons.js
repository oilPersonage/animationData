import React from 'react'
import {Line, Layer, Rect, Circle, Text} from 'react-konva';
import Data from '../../../utils/DataOne'

export default class Bollons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const percent = this.props.width * 100 / 1920 * 0.01
        const fontSize = percent * 28
        const state = Data(this.props.width, this.props.height, fontSize)
        const fontFamily = 'RobotoRegular'
        const fillOval = '#9FB7FF'
        const fillCircle = '#5b6a92'
        if (state) {
            return <Layer>
                {state.rect.map((rect, index) => <Rect
                    key={index}
                    x={rect.x}
                    y={rect.y}
                    width={rect.width}
                    height={rect.height}
                    fill={fillOval}
                />)
                }
                {state.circle.map((circle, ind) => <Circle
                    key={ind}
                    x={circle.x}
                    y={circle.y}
                    radius={circle.radius}
                    dash={circle.dash}
                    fill={fillOval}
                    stroke={fillCircle}
                />)
                }
                {state.text.map((text, index) => <Text
                    key={`${text.text}`}
                    x={text.x}
                    fontSize={fontSize}
                    fontFamily={fontFamily}
                    fill={fillCircle}
                    y={text.y}
                    text={text.text}/>)}
                {state.line.map((line, index) => <Line
                    key={`${index}-${index}`}
                    points={line.points}
                    stroke={fillCircle}
                    strokeWidth={2}
                />)}
            </Layer>
        } else {
            return ''
        }
    }
}
