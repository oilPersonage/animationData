import React from 'react'
    import Back from './Back'
    import img from '../../images/graph.jpg'

export default function Energy ({history}) {
    return <div className="full">
            <Back history={history}/>
            <div className="imageEnergy" style={{backgroundImage: `url(${img})`}}></div>
    </div>
}