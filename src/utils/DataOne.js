export default function (width, height, fontSize, rotation, data, fontSizeNumber) {

    const pos = (length, percent, height) => {
        return (length * percent) / 100 - height
    }
    const body = {
        img: [
            {
                x: pos(width, 9.4, 0),
                y: pos(height, 90, pos(height, 25, 0)),
                width: pos(width, 6, 0),
                height: pos(height, 25, 0),
                stroke: true,
                id: 1,
            },
            {
                x: pos(width, 19.4, 0),
                y: pos(height, 90, pos(height, 25, 0)),
                width: pos(width, 6, 0),
                height: pos(height, 25, 0),
                stroke: true,
                id: 2,
            },
            {
                x: pos(width, 29.4, 0),
                y: pos(height, 90, pos(height, 25, 0)),
                width: pos(width, 6, 0),
                height: pos(height, 25, 0),
                stroke: true,
                id: 3,
            },
            {
                x: pos(width, 39.44, 0),
                y: pos(height, 90, pos(height, 25, 0)),
                width: pos(width, 6, 0),
                height: pos(height, 25, 0),
                stroke: true,
                id: 4,
            },
        ],
        rect: [

            {
                x: pos(width, 12, 0),
                y: pos(height, 65, pos(height, 1, 0)),
                width: pos(width, 2, 0),
                height: pos(height, 1, 0),
                fill: true,
                stroke: true
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
                x: pos(width, 32, 0),
                y: pos(height, 65, pos(height, 1, 0)),
                width: pos(width, 2, 0),
                height: pos(height, 1, 0),
                fill: true,
                stroke: true,
            },
            {
                x: pos(width, 42, 0),
                y: pos(height, 65, pos(height, 1, 0)),
                width: pos(width, 2, 0),
                height: pos(height, 1, 0),
                fill: true,
                stroke: true
            },
            // clapan
            // {
            //   x: pos(width, 10, 0),
            //   y: pos(height, 80 + 20 * rotation, pos(height, 2, 0)),
            //   width: pos(width, 6, 0),
            //   height: pos(height, 2, 0),
            //   stroke: true,
            //   fill: true
            // },

            // {
            //   x: pos(width, 20, 0),
            //   y: pos(height, 80 + 20 * rotation, pos(height, 2, 0)),
            //   width: pos(width, 6, 0),
            //   height: pos(height, 2, 0),
            //   stroke: true,
            //   fill: true
            // },


            // {
            //   x: pos(width, 30, 0),
            //   y: pos(height, 80 + 20 * rotation, pos(height, 2, 0)),
            //   width: pos(width, 6, 0),
            //   height: pos(height, 2, 0),
            //   stroke: true,
            //   fill: true
            // },


            // {
            //   x: pos(width, 40, 0),
            //   y: pos(height, 80 + 20 * rotation, pos(height, 2, 0)),
            //   width: pos(width, 6, 0),
            //   height: pos(height, 2, 0),
            //   stroke: true,
            //   fill: true
            // },

            // white rect
            // {
            //     x: pos(width, 51.5, 0),
            //     y: pos(height, 55, pos(height, 30, 0)),
            //     width: pos(width, 3, 0),
            //     height: pos(height, 30, 0),
            // },
            // {
            //     x: pos(width, 52, 0),
            //     y: pos(height, 55 + rotation * 2 % 10 * 2, pos(height, 30, 0)),
            //     width: pos(width, 0.5, 0),
            //     height: pos(height, 3, 0),
            //     fill: "white"
            // },
            // {
            //     x: pos(width, 52.8, 0),
            //     y: pos(height, 56 + rotation * 3 % 10 * 2, pos(height, 30, 0)),
            //     width: pos(width, 0.5, 0),
            //     height: pos(height, 3, 0),
            //     fill: "white"
            // },
            // {
            //     x: pos(width, 53.5, 0),
            //     y: pos(height, 57 + rotation * 1.5 % 10 * 2, pos(height, 30, 0)),
            //     width: pos(width, 0.5, 0),
            //     height: pos(height, 3, 0),
            //     fill: "white"
            // },
        ],
        text: [
            {
                x: pos(width, 11.5, 0),
                y: pos(height, 99, fontSize),
                text: 'Скв.1',
                id: 1,
            },
            {
                x: pos(width, 8.5, 0),
                y: pos(height, 95.5, fontSizeNumber),
                fontSize: fontSizeNumber*0.7,
                text: `${data[0].q.toFixed(2)} м3/час`,
                id: 1,
            },
            {
                x: pos(width, 21.5, 0),
                y: pos(height, 99, fontSize),
                text: 'Скв.2',
                id: 2,
            },
            {
                x: pos(width, 18.5, 0),
                y: pos(height, 95.5, fontSizeNumber),
                fontSize: fontSizeNumber*0.7,
                text: `${data[1].q.toFixed(2)} м3/час`,
                id: 2,
            },
            {
                x: pos(width, 31.5, 0),
                y: pos(height, 99, fontSize),
                text: 'Скв.3',
                id: 3,
            },
            {
                x: pos(width, 28.5, 0),
                y: pos(height, 95.5, fontSizeNumber),
                fontSize: fontSizeNumber*0.7,
                text: `${data[2].q.toFixed(2)} м3/час`,
                id: 3,
            },
            {
                x: pos(width, 41.5, 0),
                y: pos(height, 99, fontSize),
                text: 'Скв.4',
                id: 4,
            },
            {
                x: pos(width, 38.5, 0),
                y: pos(height, 95.5, fontSizeNumber),
                fontSize: fontSizeNumber*0.7,
                text: `${data[3].q.toFixed(2)} м3/час`,
                id: 4,
            },
            {
                x: pos(width, 10, 0),
                y: pos(height, 62, fontSize),
                text: 'Q1',
            },
            {
                x: pos(width, 20, 0),
                y: pos(height, 62, fontSize),
                text: 'Q2',
            },
            {
                x: pos(width, 30, 0),
                y: pos(height, 62, fontSize),
                text: 'Q3',
            },
            {
                x: pos(width, 40, 0),
                y: pos(height, 62, fontSize),
                text: 'Q4',
            },
            {
                x: pos(width, 43, 0),
                y: pos(height, 37, fontSize),
                text: '∑Q',
            },
        ],
        line: [
            {
                points: [
                    pos(width, 12.5, 0),
                    pos(height, 63.8, 0),

                    pos(width, 12.5, 0),
                    pos(height, 43.5, 0),

                    pos(width, 22.5, 0),
                    pos(height, 43.5, 0),

                    pos(width, 22.5, 0),
                    pos(height, 43.5, 0),

                    pos(width, 32.5, 0),
                    pos(height, 43.5, 0),

                    pos(width, 32.5, 0),
                    pos(height, 43.5, 0),

                    pos(width, 42.5, 0),
                    pos(height, 43.5, 0),

                    pos(width, 42.5, 0),
                    pos(height, 43.5, 0),

                    pos(width, 50.5, 0),
                    pos(height, 43.5, 0),

                    pos(width, 50.5, 0),
                    pos(height, 43.5, 0),

                    pos(width, 50.5, 0),
                    pos(height, 45.5, 0),

                    pos(width, 43.5, 0),
                    pos(height, 45.5, 0),

                    pos(width, 43.5, 0),
                    pos(height, 63.8, 0),

                    pos(width, 42.5, 0),
                    pos(height, 63.8, 0),

                    pos(width, 42.5, 0),
                    pos(height, 45.5, 0),

                    pos(width, 33.5, 0),
                    pos(height, 45.5, 0),

                    pos(width, 33.5, 0),
                    pos(height, 63.8, 0),

                    pos(width, 32.5, 0),
                    pos(height, 63.8, 0),

                    pos(width, 32.5, 0),
                    pos(height, 45.5, 0),

                    pos(width, 23.5, 0),
                    pos(height, 45.5, 0),

                    pos(width, 23.5, 0),
                    pos(height, 63.8, 0),

                    pos(width, 22.5, 0),
                    pos(height, 63.8, 0),

                    pos(width, 22.5, 0),
                    pos(height, 45.5, 0),

                    pos(width, 13.5, 0),
                    pos(height, 45.5, 0),

                    pos(width, 13.5, 0),
                    pos(height, 63.8, 0),
                ],
                width: 10,
                fill: true,
                closed: true
            },

            {
                points: [
                    pos(width, 40, 0),
                    pos(height, 38, 0),

                    pos(width, 46, 0),
                    pos(height, 38, 0),

                    pos(width, 46, 0),
                    pos(height, 37, 0),

                    pos(width, 49, 0),
                    pos(height, 39, 0),

                    pos(width, 46, 0),
                    pos(height, 41, 0),

                    pos(width, 46, 0),
                    pos(height, 40, 0),

                    pos(width, 40, 0),
                    pos(height, 40, 0),
                ],
                width: 10,
                fill: true,
                closed: true
            },
        ],
        circle: [
            // {
            //   x: pos(width, 13, 0),
            //   y: pos(height, 84.5, 0),
            //   images: img,
            //   width: pos(width, 4, 0),
            //   height: pos(height, 8, 0),
            // },
            // {
            //   x: pos(width, 13, 0),
            //   y: pos(height, 84.5, 0),
            //   dash: [10, 5],
            //   ref: 'circle',
            //   radius: pos(width, 1.8, 0),
            //   rotation: rotation * -150,
            // },
            // {
            //   x: pos(width, 23, 0),
            //   y: pos(height, 84.5, 0),
            //   radius: pos(width, 2, 0),
            // },
            // {
            //   x: pos(width, 23, 0),
            //   y: pos(height, 84.5, 0),
            //   radius: pos(width, 1.8, 0),
            //   dash: [10, 5],
            //   rotation: rotation * -50,
            // },
            // {
            //   x: pos(width, 33, 0),
            //   y: pos(height, 84.5, 0),
            //   radius: pos(width, 2, 0),
            // },
            // {
            //   x: pos(width, 33, 0),
            //   y: pos(height, 84.5, 0),
            //   radius: pos(width, 1.8, 0),
            //   dash: [10, 5],
            //   rotation: rotation * -500,
            // },
            // {
            //   x: pos(width, 43, 0),
            //   y: pos(height, 84.5, 0),
            //   radius: pos(width, 2, 0),
            // },
            // {
            //   x: pos(width, 43, 0),
            //   y: pos(height, 84.5, 0),
            //   dash: [10, 5],
            //   rotation: rotation * -100,
            //   radius: pos(width, 1.8, 0),
            // }
        ]
    }

    return body
}
