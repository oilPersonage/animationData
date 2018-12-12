import React from 'react'
import {connect} from 'react-redux'

class Modal extends React.PureComponent{
  constructor(props) {
    super(props)

    this.state = {
      opacity: 0,
      top: -document.body.clientHeight,
      body: '',
      topModal: -document.body.clientHeight
    }
  }

  componentWillReceiveProps(props, state) {
    if (props.state.view) {
      this.setState({opacity: 1, top: '10%', body: props.state.body, topModal: 0})
    }
  }

  onClick = (e) => {
    if (e.target === this.modal || e.target === this.close) {
      console.log(e.target)
      this.setState({
        opacity: 0,
        top: -document.body.clientHeight,
      })
      this.timeout = setTimeout( ()=> {
        this.setState({
          topModal: -document.body.clientHeight,
          body: ''
        })
        this.props.dispatch({type: "MODAL", payload: ''})
        clearInterval(this.timeout)
      }, 500)
    }
  }


  render() {
    console.log(this.props, this.state)
    return <div className="modal" style={{opacity: this.state.opacity, top: this.state.topModal}} ref={node => this.modal = node} onClick={this.onClick}>
      <div className="modalBody" style={{top: this.state.top}}>
        <div className="contentModal">{this.state.body}</div>
        <div className="closeModal" ref={node => this.close = node}>Закрыть</div>
      </div>
    </div>
  }
}

export default connect(state => {return{ state: state.modal}}, dispatch => {return {dispatch: dispatch}})(Modal)
