import React from 'react'
import {Stage, Text, Layer} from 'react-konva';
import {connect} from 'react-redux'

import Bollons from './Bollons'
import WaterHome from './WaterHome'
import BottomBlock from './BottomBlock'
import Back from '../Back'

import logo from '../../../images/logo.png';
import svg from '../../../utils/SVG'
import nasos from "../../../images/SVG/nasos.svg";

class One extends React.Component {

    constructor(props) {
        super(props)
        this.state = {view: 0, animation: 1}
    }

    componentDidMount() {
        this.setState({view: 1})
    }

    onClick = (index) => {
        if (!this.props.par) this.props.dispatch({type: 'MODAL', payload: {id: index, indent: 1}})
    }

    render() {
        const {now, well} = this.props
        const {clientWidth} = document.body
        let heightCont, widthCont, fontSize, fontSizeTitle, percent, fontSizeNumber;
        const {length, strokeDark, fontFamily} = this.props.state

        if (this.props.state.length && this.props.par) {
            heightCont = length ? length.widthCont * 0.5 : length.heightCont * 2
            widthCont = length ? length.widthCont : length.heightCont * 2
            percent = length.widthCont * 100 / 1920 * 0.01
            fontSizeTitle = percent * 60
            fontSize = percent * 28
            fontSizeNumber = percent * 40
        } else {
            heightCont = (clientWidth - 60) * 0.5
            widthCont = clientWidth
            percent = widthCont * 100 / 1920 * 0.01
            fontSizeTitle = percent * 60
            fontSize = percent * 28
            fontSizeNumber = percent * 40
        }

        const pos = (length, percent, height) => {
            return (length * percent) / 100 - height
        }
        const svgView = svg(well)

        return <div className="componentBox" style={{height: heightCont, width: widthCont, opacity: this.state.view}}
                    ref={node => this.cont = node}>
            <div className="logo"><img src={logo}/></div>
            {!this.props.par && <Back history={this.props.history}/>}
            {heightCont && widthCont && fontSize ? <Stage width={widthCont} height={heightCont}>
                    <Layer>
                        <Text
                            x={0}
                            y={pos(heightCont, 5, fontSize)}
                            fontFamily={fontFamily}
                            fontSize={fontSizeTitle}
                            align={"center"}
                            width={widthCont}
                            fill={strokeDark}
                            text="ВЗУ ВНИИССОК"
                        />
                    </Layer>
                    <Bollons well={well}
                             dispatch={this.props.dispatch}
                             par={this.props.par}
                             circ={this.state.circ}
                             animation={this.state.animation}
                             height={heightCont}
                             width={widthCont}
                             fontSizeNumber={fontSizeNumber}
                             state={{...this.props.state}}
                             fontSize={fontSize}/>
                    <BottomBlock animation={this.state.animation}
                                 pos={pos}
                                 electr={this.props.electr}
                                 height={heightCont}
                                 width={widthCont}
                                 state={{...this.props.state}}
                                 fontSizeNumber={fontSizeNumber}
                                 fontSize={fontSize}/>
                    <WaterHome animation={this.state.animation}
                               well={well}
                               fontSizeNumber={fontSizeNumber}
                               now={now}
                               pos={pos}
                               height={heightCont}
                               width={widthCont}
                               state={{...this.props.state}}
                               fontSize={fontSize}/>
                </Stage>
                : null}
            <div className="nasos"><img src={nasos} /></div>
            {svgView.map((svg, index) => <div onClick={() => this.onClick(index + 1)} key={index + 4}>{svg}</div>)}
            {/*{svg()}*/}
        </div>
    }
}

export default connect(state => {
    return {state: state}
})(One)
