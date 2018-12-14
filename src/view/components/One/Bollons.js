import React from 'react'
import {Line, Layer, Rect, Image as ImageKonva, Text} from 'react-konva';
import Data from '../../../utils/DataOne'
import ImageView from './ImageView'

export default class Bollons extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick = (body) => {
    if (body.id && !this.props.par) this.props.dispatch({type: 'MODAL', payload: body})
  }

  render() {
    const {fill, fontFamily, strokeDark} = this.props.state
    const state = Data(this.props.width, this.props.height, this.props.fontSize, this.props.animation, this.props.well, this.props.fontSizeNumber)

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
            onTouchEnd={() => this.onClick({id: rect.id, indent: 1})}
            onClick={() => this.onClick({id: rect.id, indent: 1})}
        />)
        }
        {/*{state.circle.map((circle, ind) => {*/}
          {/*console.log(circle)*/}
          {/*return <Images*/}
              {/*key={ind}*/}
              {/*x={circle.x}*/}
              {/*y={circle.y}*/}
              {/*images={circle.images}*/}
              {/*rotation={circle.rotation}*/}
          {/*/>*/}
        {/*})*/}
        {/*}*/}
        <ImageView width={this.props.width}
                   height={this.props.height}/>

        {state.text.map((text, index) => <Text
            key={`${text.text}`}
            x={text.x}
            fontSize={text.fontSize || this.props.fontSize}
            fontFamily={fontFamily}
            fill={strokeDark}
            onTouchEnd={() => this.onClick({id: text.id, indent: 1})}
            onClick={() => this.onClick({id: text.id, indent: 1})}
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
