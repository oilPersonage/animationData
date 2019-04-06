import React, {Component} from 'react'
import XLSX from 'xlsx'

import Back from './Back'
import img from '../../images/graph2.jpg'
import data from '../../data/xlsl'

export default class HowMatch extends Component {

    formatter = (obj) => {
        const arr = []
        Object.keys(obj).map((key, index) => {
            if (index === 17 || index === 12 || index === 20 || index === 22) return
            arr.push(<th className="headDiv">{obj[key]}</th>)
        })
        return arr
    }

    shouldComponentUpdate () {
        return false
    }

    rowItem = (data) => {
        const arrRows = []
        data.map((da) => {
            arrRows.push(<tr>{Object.keys(da).map((d, index) => {
                if (index === 19 && da[d] === "") return
                return <td>{da[d]}</td>})}
            </tr>)
        })
        // Object.keys(data).map(da => data[da].map((k, index) => console.log(k, index)))
        return arrRows
    }

    render() {
        const {history} = this.props
        let pars = data.slice(0)
        const extraTitle = pars.splice(0, 1)
        const head = pars.splice(0, 1)[0]
        const numberHead = pars.splice(0, 1)
        const region = pars.splice(0, 1)
        const total = pars.splice(pars.length - 1, 1)
        const totalDop = pars.splice(pars.length - 1, 1)
        const field = {
            0: "Список объектов"
        }

        console.log({region, total, totalDop})
        return <div >
            <Back history={history}/>
            <div className="titleTable">{extraTitle[0][field[0]]}</div>
            <div className="tableInfo">{region[0][field[0]]}</div>
            <div style={{height: 'calc(100vh - 190px)', overflowY: 'scroll', width: "calc(100vw - 30px)"}}>
                <table className="table">
                    <tr className="thead">{this.formatter(head, pars)}</tr>
                    {this.rowItem(pars)}

                </table>
            </div>
            <div className="tableInfo">{total[0][field[0]]}</div>
            <div className="tableInfo">{totalDop[0][field[0]]}</div>
        </div>
    }
}