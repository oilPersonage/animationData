import React from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

import One from "./One/One";
import Four from "./Four/Four";
import Three from "./Three/Three";
import Two from "./Two/Two";
import Back from '../components/Back'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.heightCont = 0;
    this.widthCont = 0;
    const {clientWidth} = document.body
    const mobile = clientWidth < 998
    this.heightCont = mobile ? clientWidth * 0.5 : ((clientWidth - clientWidth * 0.05) / 2) * 0.5
    this.widthCont = mobile ? clientWidth - 10 : (clientWidth - clientWidth * 0.05) / 2
    this.props.dispatch({type: "HEIGHT", payload: {heightCont: this.heightCont, widthCont: this.widthCont}})
  }

  render() {
    const {clientWidth} = document.body
    const style={height: this.heightCont, width: this.widthCont, left: clientWidth / 2 - this.widthCont - 5}
    const {now, well} = this.props
    if (this.props.state.length) {
      return <div className="full">
        <div className="content">
          <Back history={this.props.history}/>
          <div className='contentTop'>
            <Link to='/one' className="link" style={style}><One state={this.props.state.length} electr={this.props.electr} now={now} history={this.props.history} well={well} par={1}/></Link>
            <Link to='/two' className="link" style={style}><Two state={this.props.state.length} currentIndex={this.props.currentIndex} graphHouses={this.props.graphHouses} par={1}/></Link>
          </div>
          <div className='contentTop'>
            <Link to='three' className='linkAbsolute' style={style} />
            <div className="link" style={style}><Three state={this.props.state.length} par={1}/></div>
            <Link to='/four' className="link" style={style}><Four
                finishGraphNS={this.props.finishGraphNS}
                finishNSEE={this.props.finishNSEE}
                finishGraphNSH={this.props.finishGraphNSH}
                finishGraphE={this.props.finishGraphE}
                graph={this.props.graph}
                state={this.props.state.length}
                par={1}
            /></Link>
          </div>
        </div>
      </div>
    } else {
      return ''
    }
  }
}

export default connect(state => {
  return {state: state}
})(Home)
