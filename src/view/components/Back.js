import React from 'react'

export default class Back extends React.PureComponent {
  render () {
    return <div className='backButton' onClick={()=> this.props.history.goBack()}>Назад</div>
  }
}
