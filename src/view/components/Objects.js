import React, {Component} from 'react'
import moment from 'moment'

import Back from './Back'
import data from '../../data/res'

let bigSum = 0

export default class HowMatch extends Component {

    formatter = (timeNow) => {
        const time = []
        for (let i = 0; i < 24; i++) {
            if (i < timeNow) time.push(<td className="headDiv">{`${moment(i, 'H').format('HH:mm')} - ${moment(i + 1, 'H').format('HH:mm')}`}</td>)
        }
        return <thead>
            <td rowSpan={2} className="headDiv">№ об.</td>
            <td rowSpan={2} className="headDiv">Название объекта</td>
            <td className="headDiv headBox" colSpan={timeNow}>время/потребление</td>
            <td className="headDiv box"><tr>Итого</tr></td>
            <tr className="headDiv box">
                {time}
                <tr className="headDiv">за день, кВт*ч</tr>
            </tr>
        </thead>
    }

    shouldComponentUpdate () {
        return false
    }

    rowItem = (data, time, date) => {
        const array = []
        Object.keys(data).forEach(el => array.push(data[el]))
        const arrRows = []
        array.forEach((item, indexHead) => {
            const arr = []
            Object.keys(item[date]).forEach(el => arr.push(item[date][el]))
            // const sum = arr.reduce((accum, value, i) => i > 3 || i < time && accum + value)

            const sum = arr.reduce((ac, value, i) => {
                if (i < time) {
                    return ac + value
                } else {
                    return ac
                }
            }).toFixed(3);
            bigSum = bigSum + Number(sum)
            {console.log(arr)}
            arrRows.push(<tr>
                <td>{`№${indexHead + 1}`}</td>
                <td>{Object.keys(data)[indexHead]}</td>
                {arr.map((d, index) => {
                    if (index < time) return <td>
                        {index === time ? sum : d}
                </td>
                })}
                {arr.length === 24 && <td>{sum}</td>}
            </tr>)
        })
        return arrRows
    }

    onClick = () => {
        window.open('http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19', '_blank');
    }

    render() {
        const {history} = this.props
        const time = moment().hour()
        // const date = moment().date()
        // const time = 24.00
        const date = 1

        return <div className="tableBox" >
            <Back history={history}/>
            {/*<div className="titleTable">{extraTitle[0][field[0]]}</div>*/}
            {/*<div className="tableInfo">{region[0][field[0]]}</div>*/}
            <div className='tableHead' onClick={this.onClick} style={{height: 'calc(100vh - 190px)', overflowY: 'scroll', width: "calc(100vw - 30px)"}}>
                <table className="table">
                    {this.formatter(time)}
                    {this.rowItem(data, time, date)}

                </table>
            </div>
            <div className="sumBox">
                <div className="tableInfo">Итого</div>
                <div className="tableInfo">{bigSum.toFixed(3)}</div>
            </div>
        </div>
    }
}
