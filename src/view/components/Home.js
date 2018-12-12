import React from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

import One from "./One/One";
import Four from "./Four/Four";
import Three from "./Three/Three";
import Two from "./Two/Two";

class Home extends React.Component {
  constructor(props) {
    super(props)

    let heightCont, widthCont;
    const {clientWidth} = document.body
    heightCont = (clientWidth / 2) * 0.5 - 60
    widthCont = clientWidth / 2 - 60
    this.props.dispatch({type: "HEIGHT", payload: {heightCont, widthCont}})
  }

  render() {
    const {now, well} = this.props
    console.log(this.props)
    if (this.props.state) {
      return <div className="full">
        <div className="content">
          <Link to='/one'><One state={this.props.state.length} now={now} history={this.props.history} well={well} par={1}/></Link>
          <Link to='/two'><Two state={this.props.state.length} par={1}/></Link>
          <Link to='/three'><Three state={this.props.state.length} par={1}/></Link>
          <Link to='/four'><Four state={this.props.state.length} par={1}/></Link>
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
