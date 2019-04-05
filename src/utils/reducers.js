import well from '../data/wellsData'

const initialState = {
  fill: '#5fb9e1',
  fontFamily: 'Arial',
  strokeDark: '#076ba6',
  fillHome: '#e29c80',
  fillWhite: '#fff',
  strokeGray: '#938994',
  strokeBlack: '#333',
  modal: {
    view: false,
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
  if (type === 'MODAL-HIDE')  {
    const modal = {
      view: !state.modal.view,
      body: payload,
    }
    return {...state, modal}
  }
  if (type === 'MODAL') {
    const date = new Date()
    const currentIndex = Math.round((date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds()) / 5)
    const currentHourIndex = (5 * 12 * 60) / 5
    const graph=[]
    const clone = well[payload.id].v.slice(0)
    const currentArr = clone.splice(0, currentIndex)
    for (let i = 0; i <= 23; i++) {
      if (currentArr[i*currentHourIndex]) {
        const item = {y:  currentArr[i*currentHourIndex] - currentArr[(i-1)*currentHourIndex], x: i}
        graph.push(item)
      }
    }

    const modal = {
      view: !state.modal.view,
      body: {
        id: payload.id,
        indent: payload.indent,
        graph
      }
    }
    return {...state, modal}
  }

  // Пока не обрабатываем никаких действий
  // и просто возвращаем состояние, которое приняли в качестве параметра
  return state
}
