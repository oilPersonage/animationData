import React from 'react'
import ChartJS from 'chart.js'

export default class ChartFour extends React.PureComponent {
  componentDidMount () {
    const ctx = this.canvas.getContext('2d')
    const ctx1 = this.canvasTwo.getContext('2d')
    const ctx2 = this.canvasThree.getContext('2d')
    const ctx3 = this.canvasFour.getContext('2d')

    const data = {
      labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"],
      datasets: [{
        label: 'Вода',
        data: this.props.finishGraphNS,
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)'
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
          text: 'График подачи воды с насосной станции'
        }
      }
    });
    const dataRadar = {
      labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"],
      datasets: [{
        label: 'Электроэнергия',
        data: this.props.graph,
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    }
    new ChartJS(ctx1, {
      type: 'line',
      data: dataRadar,
      options: {
        title: {
          display: true,
          text: 'График потребления электроэнергии'
        }
      }
    });

    const dataThree = {
      labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"],
      datasets: [{
        data: this.props.finishNSEE,
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    }
    new ChartJS(ctx2, {
      type: 'line',
      data: dataThree,
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'График удельного показателя потребления электроэнергии (ээ/вода)'
        }
      }
    });
    const dataFour = {
      labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"],
      datasets: [{
        label: 'Давление',
        data: this.props.finishGraphNSH,
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    }
    new ChartJS(ctx3, {
      type: 'line',
      data: dataFour,
      options: {
        tooltip: {
          fillStyle: 'rgba(255, 255, 255, 0.3)'
        },
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'График давления на насосной станции'
        }
      }
    });
  }
  render() {
    return <div>
      <div className="canvasCartOne"><canvas ref={node => this.canvas = node} /></div>
      <div className="canvasCartTwo"><canvas ref={node => this.canvasTwo = node} /></div>
      <div className="canvasCartThree"><canvas ref={node => this.canvasThree = node} /></div>
      <div className="canvasCartFour"><canvas ref={node => this.canvasFour = node} /></div>
    </div>
  }
}
