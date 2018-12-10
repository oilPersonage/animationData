import React from 'react'
import {Stage, Text, Layer} from 'react-konva';
import Bollons from './Bollons'
import WaterHome from './WaterHome'
import BottomBlock from './BottomBlock'
import Chart from './Chart'

export default class One extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 0,

        }
    }

    componentDidMount() {

        this.setState({
            height: this.cont.clientHeight,
            width: this.cont.clientWidth,
            view: 1
        })
    }


    render() {
        const {height, width} = this.state
        const fillStroke = '#070832'
        let heightCont, widthCont;
        const { clientWidth} = document.body
        heightCont = clientWidth*0.5
        widthCont = clientWidth
        const percent = widthCont * 100 / 1920 * 0.01
        const fontSize = percent * 40

        const pos = (length, percent, height) => {
            return (length * percent) / 100 - height
        }

        return <div className="componentBox" style={{height: heightCont, width: widthCont, opacity: this.state.view}} ref={node => this.cont = node}>
            <Chart/>
            {heightCont && widthCont && fontSize ? <Stage width={widthCont} height={heightCont}>
                <Layer>
                    <Text
                        x={pos(widthCont, 50, 100)}
                        y={pos(heightCont, 5, fontSize)}
                        fontFamily="RobotoRegular"
                        fontSize={fontSize}
                        fill={fillStroke}
                        text="ВЗУ"
                    />
                </Layer>
                    <Bollons height={heightCont} width={widthCont}/>
                    <BottomBlock pos={pos} height={height} width={width}/>
                    <WaterHome height={heightCont} width={widthCont}/>
                </Stage>
                : null}
        </div>
    }
}
