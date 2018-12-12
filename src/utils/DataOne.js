

export default function (width, height, fontSize, rotation, data) {

  const pos = (length, percent, height) => {
    return (length * percent) / 100 - height
  }


  return {
    rect: [
      {
        x: pos(width, 10, 0),
        y: pos(height, 90, pos(height, 25, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 25, 0),
        stroke: true
      },
      {
        x: pos(width, 12, 0),
        y: pos(height, 65, pos(height, 1, 0)),
        width: pos(width, 2, 0),
        height: pos(height, 1, 0),
        fill: true,
        stroke: true
      },
        // clapan
      {
        x: pos(width, 10, 0),
        y: pos(height, 80 + 20 * rotation, pos(height, 2, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 2, 0),
        stroke: true,
        fill: true
      },
      {
        x: pos(width, 20, 0),
        y: pos(height, 90, pos(height, 25, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 25, 0),
        stroke: true
      },
      {
        x: pos(width, 20, 0),
        y: pos(height, 80 + 20 * rotation, pos(height, 2, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 2, 0),
        stroke: true,
        fill: true
      },
      {
        x: pos(width, 22, 0),
        y: pos(height, 65, pos(height, 1, 0)),
        width: pos(width, 2, 0),
        height: pos(height, 1, 0),
        fill: true,
        stroke: true
      },
      {
        x: pos(width, 30, 0),
        y: pos(height, 90, pos(height, 25, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 25, 0),
        stroke: true
      },
      {
        x: pos(width, 30, 0),
        y: pos(height, 80 + 20 * rotation, pos(height, 2, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 2, 0),
        stroke: true,
        fill: true
      },
      {
        x: pos(width, 32, 0),
        y: pos(height, 65, pos(height, 1, 0)),
        width: pos(width, 2, 0),
        height: pos(height, 1, 0),
        fill: true,
        stroke: true
      },
      {
        x: pos(width, 40, 0),
        y: pos(height, 90, pos(height, 25, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 25, 0),
        stroke: true,
      },
      {
        x: pos(width, 40, 0),
        y: pos(height, 80 + 20 * rotation, pos(height, 2, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 2, 0),
        stroke: true,
        fill: true
      },
      {
        x: pos(width, 42, 0),
        y: pos(height, 65, pos(height, 1, 0)),
        width: pos(width, 2, 0),
        height: pos(height, 1, 0),
        fill: true,
        stroke: true
      },
      // white rect
      {
        x: pos(width, 51.5, 0),
        y: pos(height, 55, pos(height, 30, 0)),
        width: pos(width, 3, 0),
        height: pos(height, 30, 0),
      },
      {
        x: pos(width, 52, 0),
        y: pos(height, 55 + rotation * 2 % 10 * 2, pos(height, 30, 0)),
        width: pos(width, 0.5, 0),
        height: pos(height, 3, 0),
        fill: "white"
      },
      {
        x: pos(width, 52.8, 0),
        y: pos(height, 56 + rotation * 3 % 10 * 2, pos(height, 30, 0)),
        width: pos(width, 0.5, 0),
        height: pos(height, 3, 0),
        fill: "white"
      },
      {
        x: pos(width, 53.5, 0),
        y: pos(height, 57 + rotation * 1.5 % 10 * 2, pos(height, 30, 0)),
        width: pos(width, 0.5, 0),
        height: pos(height, 3, 0),
        fill: "white"
      },
      ],
    text: [
      {
        x: pos(width, 11.5, 0),
        y: pos(height, 96, fontSize),
        text: 'Скв.1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 11.5, 0),
        y: pos(height, 70, fontSize),
        text: data[0].q.toFixed(2),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 21.5, 0),
        y: pos(height, 96, fontSize),
        text: 'Скв.2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 21.5, 0),
        y: pos(height, 70, fontSize),
        text: data[1].q.toFixed(2),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 31.5, 0),
        y: pos(height, 96, fontSize),
        text: 'Скв.3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 31.5, 0),
        y: pos(height, 70, fontSize),
        text: data[2].q.toFixed(2),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 41.5, 0),
        y: pos(height, 96, fontSize),
        text: 'Скв.4',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 41.5, 0),
        y: pos(height, 70, fontSize),
        text: data[3].q.toFixed(2),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 10, 0),
        y: pos(height, 62, fontSize),
        text: 'Q1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 20, 0),
        y: pos(height, 62, fontSize),
        text: 'Q2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 30, 0),
        y: pos(height, 62, fontSize),
        text: 'Q3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 40, 0),
        y: pos(height, 62, fontSize),
        text: 'Q4',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        x: pos(width, 46, 0),
        y: pos(height, 18, fontSize),
        text: '∑Q',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
    ],
    line: [
      {
        points: [
          pos(width, 12.5, 0),
          pos(height, 64.5, 0),

          pos(width, 12.5, 0),
          pos(height, 54.5, 0),

          pos(width, 42.5, 0),
          pos(height, 54.5, 0),

          pos(width, 42.5, 0),
          pos(height, 19.5, 0),

          pos(width, 53.5, 0),
          pos(height, 19.5, 0),

          pos(width, 53.5, 0),
          pos(height, 22.5, 0),

          pos(width, 55, 0),
          pos(height, 25, 0),

          pos(width, 51, 0),
          pos(height, 25, 0),

          pos(width, 52.5, 0),
          pos(height, 22.5, 0),

          pos(width, 52.5, 0),
          pos(height, 21.5, 0),

          pos(width, 43.5, 0),
          pos(height, 21.5, 0),

          pos(width, 43.5, 0),
          pos(height, 64.5, 0),

          pos(width, 42.5, 0),
          pos(height, 64.5, 0),

          pos(width, 42.5, 0),
          pos(height, 56.5, 0),

          pos(width, 33.5, 0),
          pos(height, 56.5, 0),

          pos(width, 33.5, 0),
          pos(height, 64.5, 0),

          pos(width, 32.5, 0),
          pos(height, 64.5, 0),

          pos(width, 32.5, 0),
          pos(height, 56.5, 0),

          pos(width, 23.5, 0),
          pos(height, 56.5, 0),

          pos(width, 23.5, 0),
          pos(height, 64.5, 0),

          pos(width, 22.5, 0),
          pos(height, 64.5, 0),

          pos(width, 22.5, 0),
          pos(height, 56.5, 0),

          pos(width, 13.5, 0),
          pos(height, 56.5, 0),

          pos(width, 13.5, 0),
          pos(height, 64.5, 0),
        ],
        width: 10,
        fill: true,
        closed: true
      },
    ],
    circle: [
      {
        x: pos(width, 13, 0),
        y: pos(height, 84.5, 0),
        radius: pos(width, 2, 0),
      },
      {
        x: pos(width, 13, 0),
        y: pos(height, 84.5, 0),
        dash: [10, 5],
        ref: 'circle',
        radius: pos(width, 1.8, 0),
        rotation: rotation * -150,
      },
      {
        x: pos(width, 23, 0),
        y: pos(height, 84.5, 0),
        radius: pos(width, 2, 0),
      },
      {
        x: pos(width, 23, 0),
        y: pos(height, 84.5, 0),
        radius: pos(width, 1.8, 0),
        dash: [10, 5],
        rotation: rotation * -50,
      },
      {
        x: pos(width, 33, 0),
        y: pos(height, 84.5, 0),
        radius: pos(width, 2, 0),
      },
      {
        x: pos(width, 33, 0),
        y: pos(height, 84.5, 0),
        radius: pos(width, 1.8, 0),
        dash: [10, 5],
        rotation: rotation * -500,
      },
      {
        x: pos(width, 43, 0),
        y: pos(height, 84.5, 0),
        radius: pos(width, 2, 0),
      },
      {
        x: pos(width, 43, 0),
        y: pos(height, 84.5, 0),
        dash: [10, 5],
        rotation: rotation * -100,
        radius: pos(width, 1.8, 0),
      }
    ]
  }
}
