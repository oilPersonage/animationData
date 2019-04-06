import React from 'react'
import {Text, Layer, Rect, Circle, RegularPolygon, Line} from 'react-konva';
import Img from '../../../utils/Img';

export default function WatterHome(props) {
    const {height, width, pos, fontSize, well, rotation, fontSizeNumber} = props
    const {fill, fontFamily, strokeDark, fillWhite, strokeBlack, strokeGray, fillHome} = props.state
    const {nsQ, nsH, nsV} = props.now

    const circle = [
        {
            x: pos(width, 82.5, 0),
            y: pos(height, 55, 0),
            radius: pos(width, 2, 0),
        }]

    // const image = {
    //         path: nasos,
    //         width: 400,
    //         height: 688
    //     },
    //     zoom = 0.3,
    //     view = {
    //         width: image.width * zoom,
    //         height: image.height * zoom
    //     };

    let amount = 0
    well.map(item => amount = item.v + amount)

    return <Layer>
        {/*<Rect*/}
        {/*// TOP БОЛЬШОЙ*/}
        {/*x={pos(width, 49.9, 0)}*/}
        {/*y={pos(height, 60, pos(height, 45, 0))}*/}
        {/*width={pos(width, 20.2, 0)}*/}
        {/*height={pos(height, 45, 0)}*/}
        {/*stroke={fill}*/}
        {/*/>*/}
        <Rect
            // TOP small
            x={pos(width, 50, 0)}
            y={pos(height, 60, pos(height, 25, 0))}
            width={pos(width, 20, 0)}
            height={pos(height, 25, 0)}
            fill={fill}
            stroke={strokeGray}
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
                pos(height, 33 - rotation / 2, 0),

                pos(width, 55 + rotation, 0),
                pos(height, 33 + rotation, 0),

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
        <Text
            x={pos(width, 54, 0)}
            y={pos(height, 50, fontSizeNumber)}
            fontFamily={fontFamily}
            fontSize={fontSizeNumber * 1.2}
            fill={fillWhite}
            text={`${amount.toFixed(2)} м3`}
        />
        <Rect
            // TOP Home
            x={pos(width, 75, 0)}
            y={pos(height, 50, pos(height, 40, 0))}
            width={pos(width, 15, 0)}
            height={pos(height, 50, 0)}
            fill={fillHome}
        />
        <Rect
            // Window Home
            x={pos(width, 76.5, 0)}
            y={pos(height, 27, pos(height, 8, 0))}
            width={pos(width, 12.5, 0)}
            height={pos(height, 7.5, 0)}
            fill="#fff"
        />
        <Rect
            // Window Home
            x={pos(width, 76.5, 0)}
            y={pos(height, 37, pos(height, 8, 0))}
            width={pos(width, 12.5, 0)}
            height={pos(height, 7.5, 0)}
            fill="#fff"
        />
        <Rect
            // Window Home
            x={pos(width, 76.5, 0)}
            y={pos(height, 47, pos(height, 8, 0))}
            width={pos(width, 12.5, 0)}
            height={pos(height, 7.5, 0)}
            fill="#fff"
        />
        <Text
            x={pos(width, 77, 0)}
            y={pos(height, 25, fontSizeNumber)}
            fontFamily={fontFamily}
            fontSize={fontSizeNumber * 0.9}
            fill={strokeDark}
            text={`${nsQ.toFixed(2)} м3/час`}
        />
        <Text
            x={pos(width, 77, 0)}
            y={pos(height, 35, fontSizeNumber)}
            fontFamily={fontFamily}
            fontSize={fontSizeNumber * 0.9}
            fill={strokeDark}
            text={`${nsV.toFixed(2)} м3`}
        />
        <Text
            x={pos(width, 77, 0)}
            y={pos(height, 45, fontSizeNumber)}
            fontFamily={fontFamily}
            fontSize={fontSizeNumber * 0.8}
            fill={strokeDark}
            text={`${nsH.toFixed(2)} м.вод.ст.`}
        />
        {/*<Img*/}
        {/*src={image.path}*/}
        {/*width={pos(width, 6.56, 0)}*/}
        {/*height={pos(height, 3, 0)}*/}
        {/*x={pos(width, 79.5, 0)}*/}
        {/*y={pos(height, 50.5, pos(height, 3, 0))}*/}
        {/*space="fill"/>*/}
        <Rect
            x={pos(width, 70.1, 0)}
            y={pos(height, 57, pos(height, 3, 0))}
            width={pos(width, 0.5, 0)}
            height={pos(height, 3, 0)}
            fill={strokeDark}
        />
        <Line
            points={[
                pos(width, 70.5, 0),
                pos(height, 56, 0),
                pos(width, 70.5, 0),
                pos(height, 55, 0),
                pos(width, 79.5, 0),
                pos(height, 55, 0),
                pos(width, 79.5, 0),
                pos(height, 56, 0),
            ]}
            closed={true}
            fill={fill}
            stroke={strokeDark}
            strokeWidth={2}
        />
        <Line
            points={[
                pos(width, 86, 0),
                pos(height, 55, 0),
                pos(width, 96, 0),
                pos(height, 55, 0),
                pos(width, 96, 0),
                pos(height, 56, 0),
                pos(width, 86, 0),
                pos(height, 56, 0),
            ]}
            stroke={strokeDark}
            closed={true}
            fill={fill}
            strokeWidth={2}
        />
        {/*{circle.map((circle, index) => <Circle*/}
        {/*key={`${circle.x}${index}`}*/}
        {/*x={circle.x}*/}
        {/*y={circle.y}*/}
        {/*radius={circle.radius}*/}
        {/*dash={circle.dash}*/}
        {/*stroke={strokeDark}*/}
        {/*fill={fill}*/}
        {/*/>)}*/}
        {/*<Line*/}
        {/*points={[*/}
        {/*pos(width, 80, 0),*/}
        {/*pos(height, 60, 0),*/}
        {/*pos(width, 82.5, 0),*/}
        {/*pos(height, 55, 0),*/}
        {/*pos(width, 85, 0),*/}
        {/*pos(height, 60, 0),*/}
        {/*]}*/}
        {/*stroke={strokeDark}*/}
        {/*fill={fill}*/}
        {/*strokeWidth={2}*/}
        {/*closed={true}*/}
        {/*/>*/}
        <Line
            points={[
                pos(width, 91, 0),
                pos(height, 55, 0),

                pos(width, 97, 0),
                pos(height, 55, 0),

                pos(width, 97, 0),
                pos(height, 54, 0),

                pos(width, 100, 0),
                pos(height, 55.5, 0),

                pos(width, 97, 0),
                pos(height, 57, 0),

                pos(width, 97, 0),
                pos(height, 56, 0),

                pos(width, 91, 0),
                pos(height, 56, 0),
            ]}
            width={10}
            stroke={strokeDark}
            closed={true}
            fill={fill}
            closed={true}
        />
        <Text
            x={pos(width, 57.5, 0)}
            y={pos(height, 30, fontSize)}
            fontFamily={fontFamily}
            fontSize={fontSize * 1.8}
            fill={strokeBlack}
            text='РЧВ'
        />
        <Text
            x={pos(width, 81.5, 0)}
            y={pos(height, 15, fontSize)}
            fontFamily={fontFamily}
            fontSize={fontSize * 1.8}
            fill={strokeBlack}
            text='НС'
        />
    </Layer>
}
