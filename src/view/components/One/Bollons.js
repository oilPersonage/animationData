import React from 'react'
import {Line, Layer, Rect, Circle, Text} from 'react-konva';
import Data from '../../../utils/DataOne'

import img from '../../../images/1x/ё1Ресурс 2.png'

export default class Bollons extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick = (body) => {
    this.props.dispatch({type: 'MODAL', payload: body})
  }

  render() {
    const {fill, fontFamily, strokeDark} = this.props.state

    const state = Data(this.props.width, this.props.height, this.props.fontSize, this.props.animation, this.props.well)
    if (state) {
      return <Layer>
        {state.rect.map((rect, index) => <Rect
            key={index}
            x={rect.x}
            y={rect.y}
            width={rect.width}
            height={rect.height}
            fill={rect.fill === "white" ? rect.fill : rect.fill ? strokeDark : fill}
            stroke={rect.stroke ? strokeDark : fill}
        />)
        }
        {state.circle.map((circle, ind) => <Circle
            key={ind}
            x={circle.x}
            y={circle.y}
            radius={circle.radius}
            dash={circle.dash}
            fill={fill}
            rotation={circle.rotation}
            stroke={strokeDark}
        />)
        }
        {state.text.map((text, index) => <Text
            key={`${text.text}`}
            x={text.x}
            fontSize={this.props.fontSize}
            fontFamily={fontFamily}
            fill={strokeDark}
            // onClick={() => this.onClick(text.body)}
            y={text.y}
            text={text.text}/>)}
        {state.line.map((line, index) => <Line
            key={`${index}-${index}`}
            points={line.points}
            stroke={strokeDark}
            fill={fill}
            closed={line.closed}
            // fill={line.fill ? strokeDark : fill }
            // strokeWidth={line.width || 2}
        />)}
      </Layer>
    } else {
      return ''
    }
  }
}
