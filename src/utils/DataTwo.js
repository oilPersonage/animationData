export default function (width, height, fontSize) {

  const pos = (length, percent, height) => {
    return (length * percent) / 100 - height
  }
  const text = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
  return {
    rect: [
      {
        x: pos(width, 15, 0),
        y: pos(height, 20, pos(height, 10, 0)),
        width: pos(width, 10, 0),
        height: pos(height, 10, 0),
        body: text
      },
      {
        x: pos(width, 25, 0),
        y: pos(height, 40, pos(height, 10, 0)),
        width: pos(width, 4, 0),
        height: pos(height, 10, 0),
        text: 'CTP',
      },

      {
        x: pos(width, 41, 0),
        y: pos(height, 75, pos(height, 8, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 8, 0),
      },
      {
        x: pos(width, 33, 0),
        y: pos(height, 75, pos(height, 8, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 8, 0),
      },
      {
        x: pos(width, 25, 0),
        y: pos(height, 75, pos(height, 8, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 8, 0),
      },

      {
        x: pos(width, 15, 0),
        y: pos(height, 70, pos(height, 15, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 15, 0),
        body: text,
      },
      {
        x: pos(width, 25, 0),
        y: pos(height, 90, pos(height, 10, 0)),
        width: pos(width, 12, 0),
        body: text,
        height: pos(height, 10, 0),
      },
      {
        x: pos(width, 80, 0),
        y: pos(height, 55, pos(height, 15, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 15, 0),
      },
      {
        x: pos(width, 87, 0),
        y: pos(height, 40, pos(height, 15, 0)),
        width: pos(width, 6, 0),
        height: pos(height, 15, 0),
        body: text,
        text: 2,
      },
      {
        x: pos(width, 70, 0),
        y: pos(height, 20, pos(height, 10, 0)),
        width: pos(width, 10, 0),
        height: pos(height, 10, 0),
        body: text,
        text: 1,
      },
      {
        x: pos(width, 63, 0),
        y: pos(height, 35, pos(height, 15, 0)),
        width: pos(width, 5, 0),
        height: pos(height, 15, 0),
        body: text,
        text: 3,
      },
      // bottom-left
      {
        x: pos(width, 5, 0),
        y: pos(height, 90, pos(height, 15, 0)),
        width: pos(width, 15, 0),
        height: pos(height, 15, 0),
      },
      ],
    line: [
      {
        points: [
          pos(width, 5, 0),
          pos(height, 35, 0),
          pos(width, 7, 0),
          pos(height, 35, 0),
          pos(width, 7, 0),
          pos(height, 30, 0),
          pos(width, 12, 0),
          pos(height, 30, 0),
          pos(width, 12, 0),
          pos(height, 45, 0),
          pos(width, 7, 0),
          pos(height, 45, 0),
          pos(width, 7, 0),
          pos(height, 50, 0),
          pos(width, 5, 0),
          pos(height, 50, 0),
        ],
        body: text,
        closed: true,
      },
      {
        points: [
          pos(width, 62, 0),
          pos(height, 70, 0),

          pos(width, 67, 0),
          pos(height, 70, 0),

          pos(width, 67, 0),
          pos(height, 65, 0),

          pos(width, 72, 0),
          pos(height, 65, 0),

          pos(width, 72, 0),
          pos(height, 80, 0),

          pos(width, 67, 0),
          pos(height, 80, 0),

          pos(width, 67, 0),
          pos(height, 85, 0),

          pos(width, 62, 0),
          pos(height, 85, 0),
        ],
        body: text,
        closed: true,
      },
      {
        points: [
          pos(width, 83, 0),
          pos(height, 70, 0),

          pos(width, 88, 0),
          pos(height, 70, 0),

          pos(width, 88, 0),
          pos(height, 65, 0),

          pos(width, 93, 0),
          pos(height, 65, 0),

          pos(width, 93, 0),
          pos(height, 80, 0),

          pos(width, 88, 0),
          pos(height, 80, 0),

          pos(width, 88, 0),
          pos(height, 85, 0),

          pos(width, 83, 0),
          pos(height, 85, 0),
        ],
        body: text,
        closed: true,
      },
      {
        points: [
          pos(width, 49, 0),
          pos(height, 23, 0),

          pos(width, 59, 0),
          pos(height, 23, 0),

          pos(width, 59, 0),
          pos(height, 32, 0),

          pos(width, 52, 0),
          pos(height, 32, 0),

          pos(width, 52, 0),
          pos(height, 36, 0),

          pos(width, 50, 0),
          pos(height, 36, 0),

          pos(width, 50, 0),
          pos(height, 40, 0),

          pos(width, 45, 0),
          pos(height, 40, 0),

          pos(width, 45, 0),
          pos(height, 32, 0),

          pos(width, 47, 0),
          pos(height, 32, 0),

          pos(width, 47, 0),
          pos(height, 28, 0),

          pos(width, 49, 0),
          pos(height, 28, 0),
        ],
        body: text,
        closed: true,
      },
      {
        points: [
          pos(width, 5, 0),
          pos(height, 48, 0),

          pos(width, 80, 0),
          pos(height, 48, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 23, 0),
          pos(height, 10, 0),

          pos(width, 23, 0),
          pos(height, 85, 0),

          pos(width, 25, 0),
          pos(height, 85, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 23, 0),
          pos(height, 35, 0),

          pos(width, 25, 0),
          pos(height, 35, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 20, 0),
          pos(height, 63.5, 0),

          pos(width, 44, 0),
          pos(height, 63.5, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 44, 0),
          pos(height, 63.5, 0),

          pos(width, 44, 0),
          pos(height, 68, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 36, 0),
          pos(height, 63.5, 0),

          pos(width, 36, 0),
          pos(height, 68, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 28, 0),
          pos(height, 63.5, 0),

          pos(width, 28, 0),
          pos(height, 68, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 70, 0),
          pos(height, 48, 0),

          pos(width, 70, 0),
          pos(height, 70, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 61, 0),
          pos(height, 48, 0),

          pos(width, 61, 0),
          pos(height, 15, 0),

          pos(width, 72, 0),
          pos(height, 15, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 59, 0),
          pos(height, 27, 0),

          pos(width, 65, 0),
          pos(height, 27, 0),
        ],
        closed: false,
      },
      {
        points: [
          pos(width, 90, 0),
          pos(height, 67.5, 0),

          pos(width, 77.5, 0),
          pos(height, 67.5, 0),

          pos(width, 77.5, 0),
          pos(height, 32, 0),

          pos(width, 90, 0),
          pos(height, 32, 0),
        ],
        closed: false,
      },
    ],
    text: [
      {
        x: pos(width, 15.5, fontSize*2),
        y: pos(height, 84, fontSize),
        text: '∑Q',
        body: text,
      },
      {
        x: pos(width, 13, fontSize*2),
        y: pos(height, 40, fontSize),
        text: 'Q1',
        body: text,
      },
      {
        x: pos(width, 23, fontSize*2),
        y: pos(height, 17, fontSize),
        text: '№6',
        body: text,
      },
      {
        x: pos(width, 20.5, fontSize*2),
        y: pos(height, 65, fontSize),
        text: 'ЦТП',
        body: text,
      },
      {
        x: pos(width, 32.5, fontSize*2),
        y: pos(height, 87, fontSize),
        text: 'ФГБНУ',
        body: text,
      },
      {
        x: pos(width, 58, fontSize*2),
        y: pos(height, 29.5, fontSize),
        text: '№4',
        body: text,
      },
      {
        x: pos(width, 68.5, fontSize*2),
        y: pos(height, 29.5, fontSize),
        text: '№3',
        body: text,
      },
      {
        x: pos(width, 78, fontSize*2),
        y: pos(height, 17, fontSize),
        text: '№1',
        body: text,
      },
      {
        x: pos(width, 93, fontSize*2),
        y: pos(height, 35, fontSize),
        text: '№2',
        body: text,
      },
      {
        x: pos(width, 85.5, fontSize*2),
        y: pos(height, 50, fontSize),
        text: '№5',
        body: text,
      },
      {
        x: pos(width, 91, fontSize*2),
        y: pos(height, 77, fontSize),
        text: '№8',
        body: text,
      },
      {
        x: pos(width, 70, fontSize*2),
        y: pos(height, 77, fontSize),
        text: '№9',
        body: text,
      },
    ]
  }
}
