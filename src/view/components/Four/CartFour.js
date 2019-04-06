import React from 'react'
import ChartJS from 'chart.js'

export default class ChartFour extends React.PureComponent {
  componentDidMount () {
    const ctx = this.canvas.getContext('2d')
    const ctx1 = this.canvasTwo.getContext('2d')
    const ctx2 = this.canvasThree.getContext('2d')
    const ctx3 = this.canvasFour.getContext('2d')
    const showTicks = (this.canvas.clientWidth >= 200);

    const data = {
      labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"],
      datasets: [{
        label: 'Вода',
        data: this.props.finishGraphNS,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        pointRadius: (this.canvas.clientWidth >= 200) ? 1 : 0,
      }]
    }

    new ChartJS(ctx, {
      type: 'line',
      data: data,
      options: {
        scaleShowLabels: true,
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
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          fontSize: this.props.widthCont < 600 ? 8 : 16,
          display: true,
          text: 'График подачи воды с насосной станции (м3)'
        }
      }
    });
    const dataRadar = {
      labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "16.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"],
      datasets: [{
        label: 'Электроэнергия',
        data: this.props.finishGraphE,
        backgroundColor: 'rgba(244, 164, 96, 0.5)',
        borderColor: 'rgba(244, 164, 96, 1)',
        borderWidth: 1,
        pointRadius: (this.canvasTwo.clientWidth >= 200) ? 1 : 0,
      }]
    }
    new ChartJS(ctx1, {
      type: 'line',
      data: dataRadar,
      options: {
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
        },
        tooltip: {
            fontColor: 'red'
        },
        title: {
          fontSize: this.props.widthCont < 600 ? 8 : 16,
          display: true,
          text: 'График потребления электроэнергии (кВт*час)'
        }
      }
    });

    const dataThree = {
      labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"],
      datasets: [{
        data: this.props.finishNSEE,
        backgroundColor: 'rgba(34, 139, 34, 0.5)',
        borderColor: 'rgba(34, 139, 34, 1)',
        borderWidth: 1,
        pointRadius: (this.canvasThree.clientWidth >= 200) ? 1 : 0,
      }]
    }
    new ChartJS(ctx2, {
      type: 'line',
      data: dataThree,
      options: {
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
          display: false
        },
        title: {
          fontSize: this.props.widthCont < 600 ? 8 : 16,
          display: true,
          text: 'График удельного показателя потребления электроэнергии (кВт*час/м3)'
        }
      }
    });
    const dataFour = {
      labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"],
      datasets: [{
        label: 'Давление',
        data: this.props.finishGraphNSH,
        backgroundColor: 'rgba(12, 54, 223, 0.5)',
        borderColor: 'rgba(12, 54, 223, 1)',
        borderWidth: 1,
        pointRadius: (this.canvasFour.clientWidth >= 200) ? 1 : 0,
      }]
    }
    new ChartJS(ctx3, {
      type: 'line',
      data: dataFour,
      options: {
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
        tooltip: {
          fillStyle: 'rgba(255, 255, 255, 0.3)'
        },
        legend: {
          display: false,
        },
        title: {
          fontSize: this.props.widthCont < 600 ? 8 : 16,
          display: true,
          text: 'График давления на насосной станции'
        }
      }
    });
  }
  render() {
    return <div className='fourFlex'>
      <div className="canvasCartOne"><canvas ref={node => this.canvas = node} /></div>
      <div className="canvasCartTwo"><canvas ref={node => this.canvasTwo = node} /></div>
      <div className="canvasCartThree"><canvas ref={node => this.canvasThree = node} /></div>
      <div className="canvasCartFour"><canvas ref={node => this.canvasFour = node} /></div>
    </div>
  }
}
