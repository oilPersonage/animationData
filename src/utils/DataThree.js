export default function (width, height, fontSize) {

  const pos = (length, percent, height) => {
    return (length * percent) / 100 - height
  }

  return {
    rect: [
      {
        x: pos(width, 15, 0),
        y: pos(height, 75, pos(height, 65, 0)),
        width: pos(width, 70, 0),
        height: pos(height, 65, 0),
        fill: false,
      },
      {
        x: pos(width, 87, 0),
        y: pos(height, 20, pos(height, 10, 0)),
        width: pos(width, 5, 0),
        height: pos(height, 10, 0),
        fill: true,
      },
      {
        x: pos(width, 87, 0),
        y: pos(height, 40, pos(height, 15, 0)),
        width: pos(width, 5, 0),
        height: pos(height, 15, 0),
        fill: true,
      },

      {
        x: pos(width, 35, 0),
        y: pos(height, 87, pos(height, 8, 0)),
        width: pos(width, 10, 0),
        height: pos(height, 8, 0),
        fill: true,
      },
      {
        x: pos(width, 50, 0),
        y: pos(height, 87, pos(height, 8, 0)),
        width: pos(width, 10, 0),
        height: pos(height, 8, 0),
        fill: true,
      },
      {
        x: pos(width, 87, 0),
        y: pos(height, 95, pos(height, 20, 0)),
        width: pos(width, 5, 0),
        height: pos(height, 20, 0),
        fill: true,
      },
      {
        x: pos(width, 87, 0),
        y: pos(height, 70, pos(height, 10, 0)),
        width: pos(width, 5, 0),
        height: pos(height, 10, 0),
        fill: true,
      },
    ],
    line: [
      {
        points: [
          pos(width, 5, 0),
          pos(height, 40, 0),

          pos(width, 15, 0),
          pos(height, 40, 0),
        ],
        closed: true,
      },
      {
        points: [
          pos(width, 15, 0),
          pos(height, 75, 0),

          pos(width, 15, 0),
          pos(height, 92, 0),

          pos(width, 90, 0),
          pos(height, 92, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 40, 0),
          pos(height, 75, 0),

          pos(width, 40, 0),
          pos(height, 80, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 85, 0),
          pos(height, 35, 0),

          pos(width, 90, 0),
          pos(height, 35, 0),
        ],
        closed: false,
      },
    ],
    text: [
      {
        x: pos(width, 13, fontSize*2),
        y: pos(height, 41.5, fontSize),
        text: '∑Q',
        color: true
      },
      {
        x: pos(width, 58, fontSize*2),
        y: pos(height, 85, fontSize),
        text: 'Q1',
      },
      {
        x: pos(width, 42, fontSize*2),
        y: pos(height, 85, fontSize),
        text: 'ЦТП-1',
      },
      {
        x: pos(width, 92.8, fontSize*2),
        y: pos(height, 17, fontSize),
        text: 'Q2',
      },
      {
        x: pos(width, 92.8, fontSize*2),
        y: pos(height, 42, fontSize),
        text: 'ЦТП-2',
        rotation: 270,
      },
      {
        x: pos(width, 92.8, fontSize*2),
        y: pos(height, 67, fontSize),
        text: 'Q3',
      },
      {
        x: pos(width, 92.7, fontSize*2),
        y: pos(height, 97, fontSize),
        rotation: 270,
        text: 'КОТЕЛЬ.',
      },
    ]
  }
}
