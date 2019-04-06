import React from 'react'
import {connect} from 'react-redux'
import Chart from "./One/Chart";

import skv1 from '../../images/skv1.png'


class Modal extends React.PureComponent{
  constructor(props) {
    super(props)

    this.state = {
      opacity: 0,
      top: -document.body.clientHeight,
      body: '',
      images: {
        1: skv1
      },
      topModal: -document.body.clientHeight
    }
  }

  componentWillReceiveProps(props, state) {
    if (props.state.view) {
      this.setState({opacity: 1, top: '10%', body: props.state.body, topModal: 0, graph: props.state.body.graph})
    }
  }

  onClick = (e) => {
    if (e.target === this.modal || e.target === this.close) {
      this.setState({
        opacity: 0,
        top: -document.body.clientHeight,
      })
      this.timeout = setTimeout( ()=> {
        this.setState({
          topModal: -document.body.clientHeight,
          body: ''
        })
        this.props.dispatch({type: "MODAL-HIDE", payload: {}})
        clearInterval(this.timeout)
      }, 500)
    }
  }


  render() {
    return <div className="modal" style={{opacity: this.state.opacity, top: this.state.topModal}} ref={node => this.modal = node} onClick={this.onClick}>
      <div className="modalBody" style={{top: this.state.top}}>
        {this.state.body.indent === 1 &&
          <div className="contentModal">
            <div className="title">Скважина {this.state.body.id} </div>
            <div className="modalSchemeBox">
              <img src={`${this.state.images[1]}`} alt=""/>
              <Chart graph={this.state.graph} modal={'modalChart'}/>
            </div>
            </div>
        }
        <div className="closeModal" ref={node => this.close = node}>Закрыть</div>
      </div>
    </div>
  }
}

export default connect(state => {return{ state: state.modal}}, dispatch => {return {dispatch: dispatch}})(Modal)
