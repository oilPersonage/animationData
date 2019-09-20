import React from 'react'
import {Stage, Rect, Text, Layer, Line, Circle} from 'react-konva';
import {connect} from 'react-redux'
import Data from "../../../utils/DataThree";
import Back from "../Back";
import axios from 'axios'

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
    const {clientWidth, clientHeight}   = document.body
    let heightCont, widthCont;
    heightCont = clientHeight
    widthCont = clientHeight * 2
    console.log(heightCont, widthCont)

    const Dots = [
      {x: 19.17, y: 23, title: 'Какой-то текст', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiMDdkZGEyZDAtZGI5MC0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINC00L7QvCA0INCS0LLQvtC0IDEifX1d\n'},
      {x: 25.7, y: 21.8, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiM2U0MDM2ODAtZGI5MC0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINC00L7QvCA0INCS0LLQvtC0IDIifX1d\n'},
      {x: 32.7, y: 16, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiZTA1YTk1YjAtZGI4Zi0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINC00L7QvCAzIn19XQ%3D%3D\n'},
      {x: 40.1, y: 14.4, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiMTY4MDc3ZTAtZGI3Ny0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINC00L7QvCAxIn19XQ%3D%3D\n'},
      {x: 41.4, y: 22.6, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiYjEyZjNjYTAtZGI4Zi0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINC00L7QvCA1In19XQ%3D%3D\n'},
      {x: 41.4, y: 38.6, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiYWYwNzczNDAtZGI5Mi0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQk9GD0YHQsNGA0YHQutCw0Y8g0LHQsNC70LvQsNC00LAg0J%2FQvtC00LDRh9CwINCS0LLQvtC0MSJ9fV0%3D\n'},
      {x: 36.9, y: 44, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiMzQ0YTNmMjAtZGI5Mi0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQltCaINCT0YPRgdCw0YDRgdC60LDRjyDQsdCw0LvQu9Cw0LTQsCDQptCi0J8gMSJ9fV0%3D\n'},
      {x: 18, y: 41.8, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiMGQ1Yzk0MzAtZGI5Mi0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQltCaINCT0YPRgdCw0YDRgdC60LDRjyDQsdCw0LvQu9Cw0LTQsCDQptCi0J8gMiJ9fV0%3D\n'},
      {x: 20.8, y: 32.3, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiYmRkMGM0YTAtZGI5MC0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINC00L7QvCA4In19XQ%3D%3D\n'},
      {x: 46.8, y: 32.3, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiZTJlYzZlYjAtZGI5MC0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINC00L7QvCA5In19XQ%3D%3D\n'},
      {x: 60.8, y: 29.5, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiODA4MzU2YjAtZGI5Mi0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINC00L7QvCAxMSJ9fV0%3D\n'},
      {x: 80, y: 29, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiOTVkMGJmNTAtZGI5MC0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINCm0KLQnyJ9fV0%3D\n'},
      {x: 19.8, y: 52.9, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiMDM1NDU0YjAtZGI5MS0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINCS0JfQoyDQndCw0YHQvtGB0L3QsNGPIDEg0L0uIDEifX1d\n'},
      {x: 24.9, y: 52.9, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiNThlMTFlNDAtZGI5MS0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINCS0JfQoyDQndCw0YHQvtGB0L3QsNGPIDEg0L0uIDIifX1d\n'},
      {x: 25, y: 65.9, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiZTYyM2Q2ODAtZGI5MS0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINCS0JfQoyDQodC60LLQsNC20LjQvdCwIDEifX1d\n'},
      {x: 22.2, y: 65.9, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiN2VhYWUyYTAtZGI5MS0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINCS0JfQoyDQodC60LLQsNC20LjQvdCwIDIifX1d\n'},
      {x: 19.4, y: 65.9, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiYTNkYTg5ZTAtZGI5MS0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINCS0JfQoyDQodC60LLQsNC20LjQvdCwIDMifX1d\n'},
      {x: 16.5, y: 65.9, title: '', link: 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19&state=W3siaWQiOiJkZWZhdWx0IiwicGFyYW1zIjp7fX0seyJpZCI6IndhdGVyX2J1aWxkaW5nIiwicGFyYW1zIjp7ImVudGl0eUlkIjp7ImlkIjoiYzg3YmQzZDAtZGI5MS0xMWU5LTlmZjYtOWI4MWQ0NDJiYTE5IiwiZW50aXR5VHlwZSI6IkFTU0VUIn0sImVudGl0eU5hbWUiOiLQktCd0JjQmNCh0KHQntCaINCS0JfQoyDQodC60LLQsNC20LjQvdCwIDQifX1d\n'},
    ]
    // const pos = (length, percent, height) => {
    //   return (length * percent) / 100 - height
    // }
    // const state = Data(widthCont, heightCont, fontSizeTitle)
    const url = 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19'
    return <div className='ThreeBox'>
      {!this.props.par && <Back two={60} history={this.props.history}/>}
      <div style={{overflow: 'auto'}}>
        <div className="containerMap" style={{minWidth: widthCont, maxHeight: heightCont, height: '100%', position: 'relative'}}>
          <div className="imgMap" />
          {Dots.map(el => <a className='LinkToDash' title={el.title} style={{top: `${el.y}%`, left: `${el.x}%`}} target="_blank" href={el.link}></a>)}
        </div>
      </div>
      {/*<iframe className='iframe' width={`${widthCont}px`} height={`${heightCont}px`} frameBorder="0" src={url} allowFullScreen allow="geolocation"></iframe>*/}
    </div>
  }
}

export default connect(state => {
  return {state: state}
})(Three)
