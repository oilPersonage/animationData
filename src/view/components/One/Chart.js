import React from 'react'
import ChartJS from 'chart.js'

export default class Chart extends React.PureComponent {
    componentDidMount () {
        const ctx = this.canvas.getContext('2d')
        const data = {
            labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"],
            datasets: [{
                label: 'Вода',
                data: this.props.graph,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
        new ChartJS(ctx, {
            type: 'line',
            data: data,
            options: {
                title: {
                    display: true,
                    text: 'График подачи воды в НС'
                }
            }
        });
    }
    render() {
        return <div className={`canvasCart ${this.props.modal}`}><canvas ref={node => this.canvas = node} /></div>
    }
}
