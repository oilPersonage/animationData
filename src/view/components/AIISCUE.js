import React from 'react'
import Back from './Back'
import img from '../../images/graph2.jpg'

export default function AIISCUE ({history}) {
    console.log({history})
    return <div className="full">
        <Back history={history}/>
        <div className="imageObject" style={{backgroundImage:  `url(${img})`}}></div>
    </div>
}