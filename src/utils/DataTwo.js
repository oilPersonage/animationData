
import home1 from './../data/houses/houseData-1'
import home2 from './../data/houses/houseData-2'
import home3 from './../data/houses/houseData-3'
import home4 from './../data/houses/houseData-4'
import home5 from './../data/houses/houseData-5'
import home6 from './../data/houses/houseData-6'
import home7 from './../data/houses/houseData-7'
import home8 from './../data/houses/houseData-8'
import home9 from './../data/houses/houseData-9'

import ctp1 from './../data/ctp/ctpData-1'
import ctp2 from './../data/ctp/ctpData-2'
import ctp3 from './../data/ctp/ctpData-3'

import ns from './../data/nsData'

export default function (index) {
  const sumV = (home1.v[index] + home2.v[index] + home3.v[index] + home4.v[index] + home5.v[index] + home6.v[index] + home7.v[index] + home8.v[index] + home9.v[index]).toFixed(2)
  const currentNs = ns.v[index];
  const finish = (currentNs - (+sumV + ctp3.v[index] )).toFixed(2)
  const finishPersent = (Number(finish)/currentNs * 100).toFixed(2);
  return {
    top: [
      {
        title: "ВНИИССОК, Дом №1",
        v: home1.v[index].toFixed(2),
        h: home1.h[index].toFixed(2),
      },
      {
        title: 'ВНИИССОК, Дом №3',
        v: home3.v[index].toFixed(2),
        h: home3.h[index].toFixed(2),
      },
      {
        title: 'ВНИИССОК, Дом №4',
        v: home4.v[index].toFixed(2),
        h: home4.h[index].toFixed(2),
      },
      {
        title: 'ВНИИССОК, Дом №6',
        v: home6.v[index].toFixed(2),
        h: home6.h[index].toFixed(2),
      },
      {
        title: 'ВНИИССОК, Дом №8',
        v: home8.v[index].toFixed(2),
        h: home8.h[index].toFixed(2),
      },
      {
        title: 'ВНИИССОК, Дом №9',
        v: home2.v[index].toFixed(2),
        h: home2.h[index].toFixed(2),
      },
      {
        title: 'ВНИИССОК, ЦТП ВНИИССОК',
        v: home9.v[index].toFixed(2),
        h: home9.h[index].toFixed(2),
      },
      {
        title: 'ВНИИССОК, Дом №5',
        v: home5.v[index].toFixed(2),
        h: home5.h[index].toFixed(2),
      },
      {
        title: 'ВНИИССОК, Дом №11',
        v: home7.v[index].toFixed(2),
        h: home7.h[index].toFixed(2),
      },
    ],
    bottom: [
      {
        title: 'мкрн. Гусарская Баллада',
        v: ctp3.v[index].toFixed(2),
        h: ctp3.h[index].toFixed(2),
      },
      {
        title: 'ЦТП-1',
        v: ctp1.v[index].toFixed(2),
        h: ctp1.h[index].toFixed(2),
      },
      {
        title: 'ЦТП-2',
        v: ctp2.v[index].toFixed(2),
        h: ctp2.h[index].toFixed(2),
      },
    ],
    sumV: sumV,
    finish: finish,
    finishPersent: finishPersent
  }
}
