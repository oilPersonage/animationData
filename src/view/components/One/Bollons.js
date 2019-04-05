import React from 'react'
import {Line, Layer, Rect, Image as ImageKonva, Text} from 'react-konva';
import Data from '../../../utils/DataOne'
import Img from '../../../utils/Img';
import ImageView from './ImageView'

import well from '../../../images/well.png';

export default class Bollons extends React.Component {
    constructor(props) {
        super(props)
    }

    onClick = (body) => {
        if (body.id && !this.props.par) this.props.dispatch({type: 'MODAL', payload: body})
    }

    render() {
        const {fill, strokeGray, fontFamily, strokeDark} = this.props.state
        const state = Data(this.props.width, this.props.height, this.props.fontSize, this.props.animation, this.props.well, this.props.fontSizeNumber)

        const image = {
                path: well,
                width: 400,
                height: 688
            },
            zoom = 0.3,
            view = {
                width: image.width * zoom,
                height: image.height * zoom
            };

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

                {state.img.map((img, index) => <Img
                    src={image.path}
                    width={img.width}
                    height={img.height}
                    x={img.x}
                    key={img.x}
                    y={img.y}
                    onTouchEnd={() => this.onClick({id: img.id, indent: 1})}
                    onClick={() => this.onClick({id: img.id, indent: 1})}
                    space="fill"/>
                )}

                {/*<ImageView width={this.props.width}*/}
                           {/*height={this.props.height}/>*/}

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
                    stroke={strokeGray}
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
