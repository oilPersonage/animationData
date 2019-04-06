import React from 'react'
import {Stage, Rect, Text, Layer, Line} from 'react-konva';
import {connect} from 'react-redux'
import Data from "../../../utils/DataTwo";
import Back from "../Back";
import ChartJS from "chart.js";

class Two extends React.Component {
    constructor(props) {
        super(props)
        this.state = {view: 0}
    }

    componentDidMount() {
        const ctx = this.chartCanvas.getContext('2d')
        const data = {
            labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"],
            datasets: [{
                label: 'Вода',
                data: this.props.graphHouses,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                pointRadius: (this.chartCanvas.clientWidth >= 200) ? 1 : 0,

            }]
        }
        const showTicks = (this.chartCanvas.clientWidth >= 200);
        new ChartJS(ctx, {
            type: 'line',
            data: data,
            options: {
                scaleShowLabels: true,
                maintainAspectRatio: false,
                showTooltips: showTicks,
                scales: {
                    xAxes: [{
                        ticks: {
                            display: showTicks
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            display: showTicks
                        }
                    }],
                },
                legend: {
                    display: false,
                    labels: {
                        fontColor: 'black'
                    }
                },
                title: {
                    display: showTicks,
                    text: 'График расхода воды (м3)'
                },

            },
        });
        this.setState({
            view: 1
        })
    }

    onClick = (e, body) => {
        if (this.props.par || !body) return
        this.props.dispatch({type: "MODAL", payload: body})
    }

    render() {
        const {clientWidth} = document.body
        let heightCont, widthCont, fontSize, fontSizeTitle, percent, fontNumber, smallTitle;
        const {length, strokeDark} = this.props.state

        if (this.props.state.length && this.props.par) {
            heightCont = length ? length.widthCont * 0.5 : length.heightCont * 2
            widthCont = length ? length.widthCont : length.heightCont * 2
            percent = length.widthCont * 100 / 1920 * 0.01
            fontSizeTitle = percent * 40
            smallTitle = percent * 18
            fontSize = percent * 20
            fontNumber = percent * 28
        } else {
            heightCont = (clientWidth - 60) * 0.5
            widthCont = clientWidth
            percent = widthCont * 100 / 1920 * 0.01
            fontSizeTitle = percent * 40
            fontSize = percent * 24
            smallTitle = percent * 18
            fontNumber = percent * 28
        }

        const state = Data(this.props.currentIndex)

        return <div className="componentBoxTwo"
                    style={{opacity: this.state.view, width: widthCont, height: heightCont}}>
            {!this.props.par && <Back two={60} history={this.props.history}/>}
            {heightCont && widthCont && fontSize ?
                <div className="twoBox" style={{color: strokeDark}}>
                    <div className="twoBoxTitle" style={{fontSize: fontSizeTitle}}>Показания приборов учета в пос.
                        ВНИИССОК и мкрн.Гусарская баллада
                    </div>
                    <div className="top" style={{padding: percent * 15}}>
                        <div className='left'>
                            {state.top.map(item => <div className='twoItem' key={item.title}>
                                <div className="leftTitle" style={{fontSize}}>{item.title}</div>
                                <div className="leftBody">
                                    <div className="twoFlow" style={{padding: percent * 10}}>
                                        <div className="topTitle" style={{fontSize: smallTitle}}>Расход</div>
                                        <div className="smallBox">
                                            <div className="num" style={{fontSize: fontNumber}}>{item.v}</div>
                                            <div className="v" style={{fontSize: fontSize * 0.8}}>м3</div>
                                        </div>
                                    </div>
                                    <div className="twoPressure" style={{padding: percent * 10}}>
                                        <div className="topTitle" style={{fontSize: smallTitle}}>Давление</div>
                                        <div className="smallBox">
                                            <div className="num" style={{fontSize: fontNumber}}>{item.h}</div>
                                            <div className="v" style={{fontSize: fontSize * 0.8}}>м.вод.ст.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                        <div className='twoItem'>
                            <div className="bottomSumTitle" style={{fontSize}}>Суммарный расход
                                <br/>в пос. ВНИИССОК
                            </div>
                            <div className="smallBoxBottom">
                                <div className="num"
                                     style={{fontSize: state.finish.length < 6 ? (fontNumber + 10) : (fontNumber + 10) * 0.8}}>{state.sumV}</div>
                                <div className="v" style={{fontSize: fontSize}}>м3</div>
                            </div>
                            <div className="twoGraph">
                                <canvas ref={node => this.chartCanvas = node}/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom" style={{padding: percent * 15}}>
                        {state.bottom.map(item => <div className='twoItem' key={item.title}>
                            <div className="leftTitle" style={{fontSize}}>{item.title}</div>
                            <div className="leftBody">
                                <div className="twoFlow" style={{padding: percent * 10}}>
                                    <div className="topTitle" style={{fontSize: smallTitle}}>Расход</div>
                                    <div className="smallBox">
                                        <div className="num"
                                             style={{fontSize: item.v.length < 6 ? fontNumber : fontNumber * 0.8}}>{item.v}</div>
                                        <div className="v" style={{fontSize: fontSize * 0.8}}>м3</div>
                                    </div>
                                </div>
                                <div className="twoPressure" style={{padding: percent * 10}}>
                                    <div className="topTitle" style={{fontSize: smallTitle}}>Давление</div>
                                    <div className="smallBox" style={{fontSize}}>
                                        <div className="num"
                                             style={{fontSize: item.v.length < 6 ? fontNumber : fontNumber * 0.8}}>{item.h}</div>
                                        <div className="v" style={{fontSize: fontSize * 0.8}}>м.вод.ст.</div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                        <div className='twoItem'>
                            <div className="bottomSumTitle" style={{fontSize}}>Баланс подачи и расхода воды</div>
                            <div className="smallBoxBottom">
                                <div className="num"
                                     style={{fontSize: state.finish.length < 6 ? (fontNumber + 10) * 0.7 : (fontNumber + 10) * 0.7}}>{state.finish}</div>
                                <div className="v" style={{fontSize: fontSize}}>м3</div>
                            </div>
                            <div className="smallBoxBottom">
                                <div className="num"
                                     style={{fontSize: state.finishPersent.length < 6 ? (fontNumber + 10) * 0.7 : (fontNumber + 10) * 0.7   }}>{state.finishPersent}</div>
                                <div className="v" style={{fontSize: fontSize}}>%</div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    }
}

export default connect(state => {
    return {state: state}
})(Two)
