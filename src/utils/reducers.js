const initialState = {
  fill: '#9FB7FF',
  fontFamily: 'RobotoRegular',
  strokeDark: '#353b76',
  fillHome: '#e29c80',
  fillWhite: '#fff',
  modal: {
    view: false,
    body: ''
  },
}

export default function todoApp(state = initialState, action) {
  const {payload, type} = action
  if (type === 'HEIGHT') {
    const length = {
      heightCont: payload.heightCont,
      widthCont: payload.widthCont
    }
    return {...state, length}
    }
  if (type === 'MODAL') {
    const modal = {
      view: !state.modal.view,
      body: payload
    }
    return {...state, modal}
  }

  // Пока не обрабатываем никаких действий
  // и просто возвращаем состояние, которое приняли в качестве параметра
  return state
}
