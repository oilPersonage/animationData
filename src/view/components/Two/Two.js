import React from 'react'
import {Stage, Rect, Text, Layer, Line} from 'react-konva';
import {connect} from 'react-redux'
import Data from "../../../utils/DataTwo";
import Back from "../Back";

class Two extends React.Component {
  constructor(props) {
    super(props)
    this.state = {view: 0}
  }

  componentDidMount() {
    this.setState({
      view: 1
    })
  }

  onClick = (e, body) => {
    if (this.props.par || !body) return
    this.props.dispatch({type: "MODAL", payload: body})
  }

  render() {
    const {clientWidth} = document.body
    let heightCont, widthCont, fontSize, fontSizeTitle, percent;
    const {length, strokeDark, fill, fillWhite, fontFamily} = this.props.state

    if (this.props.state.length && this.props.par) {
      heightCont = length ? length.widthCont * 0.5 : length.heightCont * 2
      widthCont = length ? length.widthCont : length.heightCont * 2
      percent = length.widthCont * 100 / 1920 * 0.01
      fontSizeTitle = percent * 40
      fontSize = percent * 28
    } else {
      heightCont = (clientWidth - 60) * 0.5
      widthCont = clientWidth
      percent = widthCont * 100 / 1920 * 0.01
      fontSizeTitle = percent * 40
      fontSize = percent * 28
    }

    const pos = (length, percent, height) => {
      return (length * percent) / 100 - height
    }
    const state = Data(widthCont, heightCont, fontSizeTitle)

    return <div className="componentBox" style={{height: heightCont, width: widthCont, opacity: this.state.view}}>
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
                  text="ПОС. ВНИИССОК"
              />
            </Layer>
            <Layer>
              {state.rect.map((rect, index) => <Rect
                  key={index}
                  x={rect.x}
                  y={rect.y}
                  width={rect.width}
                  height={rect.height}
                  fill={fill}
                  onClick={(e)=> this.onClick(e, rect.body)}
              />)
              }

              {state.line.map((line, index) => <Line
                  key={`${index}-${index}`}
                  points={line.points}
                  stroke={fill}
                  fill={fill}
                  closed={line.closed}
                  strokeWidth={2}
                  onClick={(e)=> this.onClick(e, line.body)}
              />)}

              {state.text.map(text => <Text
                  key={text.x}
                  x={text.x}
                  y={text.y}
                  fontFamily={fontFamily}
                  fontSize={fontSizeTitle}
                  fill={fillWhite}
                  onClick={(e)=> this.onClick(e, text.body)}
                  text={text.text}
              />)}

            </Layer>
          </Stage>
          : null}
    </div>
  }
}

export default connect(state => {return {state: state}})(Two)
