export default function (width, height, fontSize) {

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
            },
            {
                x: pos(width, 20, 0),
                y: pos(height, 90, pos(height, 25, 0)),
                width: pos(width, 6, 0),
                height: pos(height, 25, 0),
            },
            {
                x: pos(width, 30, 0),
                y: pos(height, 90, pos(height, 25, 0)),
                width: pos(width, 6, 0),
                height: pos(height, 25, 0),
            },
            {
                x: pos(width, 40, 0),
                y: pos(height, 90, pos(height, 25, 0)),
                width: pos(width, 6, 0),
                height: pos(height, 25, 0),
            }],
        text: [
            {
                x: pos(width, 11.5, 0),
                y: pos(height, 96, fontSize),
                text: 'Скв.1',
            },
            {
                x: pos(width, 21.5, 0),
                y: pos(height, 96, fontSize),
                text: 'Скв.2',
            },
            {
                x: pos(width, 31.5, 0),
                y: pos(height, 96, fontSize),
                text: 'Скв.3',
            },
            {
                x: pos(width, 41.5, 0),
                y: pos(height, 96, fontSize),
                text: 'Скв.4',
            },
            {
                x: pos(width, 10, 0),
                y: pos(height, 62, fontSize ),
                text: 'Q1',
            },
            {
                x: pos(width, 20, 0),
                y: pos(height, 62, fontSize  ),
                text: 'Q2',
            },
            {
                x: pos(width, 30, 0),
                y: pos(height, 62, fontSize  ),
                text: 'Q3',
            },
            {
                x: pos(width, 40, 0),
                y: pos(height, 62, fontSize  ),
                text: 'Q4',
            },
            {
                x: pos(width, 46, 0),
                y: pos(height, 18, fontSize ),
                text: '∑Q',
            },
        ],
        line: [
            {points: [
                pos(width, 13, 0),
                pos(height, 85, 0),
                pos(width, 13, 0),
                pos(height, 55, 0),
                pos(width, 23, 0),
                pos(height, 55, 0)
            ]},
            {points: [
                pos(width, 23, 0),
                pos(height, 85, 0),
                pos(width, 23, 0),
                pos(height, 55, 0),
                pos(width, 33, 0),
                pos(height, 55, 0)
            ]},
            {points: [
                pos(width, 33, 0),
                pos(height, 85, 0),
                pos(width, 33, 0),
                pos(height, 55, 0),
                pos(width, 43, 0),
                pos(height, 55, 0)
            ]},
            {points: [
                pos(width, 43, 0),
                pos(height, 85, 0),
                pos(width, 43, 0),
                pos(height, 20, 0),
                pos(width, 53, 0),
                pos(height, 20, 0),
                pos(width, 53, 0),
                pos(height, 23, 0),
                pos(width, 51, 0),
                pos(height, 26, 0),
                pos(width, 55, 0),
                pos(height, 26, 0),
                pos(width, 53, 0),
                pos(height, 23, 0),
            ]},
        ],
        circle: [
            {
                x: pos(width, 13, 0),
                y: pos(height, 85, 0),
                radius: pos(width, 2, 0)
            },
            {
                x: pos(width, 13, 0),
                y: pos(height, 85, 0),
                dash: [10, 5],
                radius: pos(width, 1.8, 0)
            },
            {
                x: pos(width, 23, 0),
                y: pos(height, 85, 0),
                radius: pos(width, 2, 0),
            },
            {
                x: pos(width, 23, 0),
                y: pos(height, 85, 0),
                radius: pos(width, 1.8, 0),
                dash: [10, 5],
            },
            {
                x: pos(width, 33, 0),
                y: pos(height, 85, 0),
                radius: pos(width, 2, 0),
            },
            {
                x: pos(width, 33, 0),
                y: pos(height, 85, 0),
                radius: pos(width, 1.8, 0),
                dash: [10, 5]
            },
            {
                x: pos(width, 43, 0),
                y: pos(height, 85, 0),
                radius: pos(width, 2, 0),
            },
            {
                x: pos(width, 43, 0),
                y: pos(height, 85, 0),
                dash: [10, 5],
                radius: pos(width, 1.8, 0),
            }
        ]
    }
}