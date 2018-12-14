import React from 'react'
import {Stage, Rect, Text, Layer, Line, Circle} from 'react-konva';
import {connect} from 'react-redux'
import Data from "../../../utils/DataThree";
import Back from "../Back";

class Three extends React.Component {
  constructor(props) {
    super(props)
    this.state = {view: 0}
  }

  componentDidMount() {
    this.setState({
      view: 1
    })
  }


  render() {
    const {clientWidth} = document.body
    let heightCont, widthCont;
    const {length} = this.props.state

    if (this.props.state.length && this.props.par) {
      heightCont = length ? length.widthCont * 0.5 : length.heightCont * 2
      widthCont = length ? length.widthCont : length.heightCont * 2
    } else {
      heightCont = (clientWidth) * 0.5
      widthCont = clientWidth
    }

    // const pos = (length, percent, height) => {
    //   return (length * percent) / 100 - height
    // }
    // const state = Data(widthCont, heightCont, fontSizeTitle)

    return <div>
      {!this.props.par && <Back two={60} history={this.props.history}/>}
      <iframe width={`${widthCont}px`} height={`${this.props.par ? heightCont : heightCont * 1.5}px`} frameBorder="0" src="https://widgets.scribblemaps.com/sm/?d&z&l&gc&af&mc&lat=55.65890834069489&lng=37.211058139801025&vz=17&type=custom_style&ti&s&width=550&height=400&id=NaqpOK_8wF" allowFullScreen allow="geolocation"></iframe>
    </div>
  }
}

export default connect(state => {
  return {state: state}
})(Three)
