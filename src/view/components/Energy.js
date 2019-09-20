import React from 'react'
import Back from './Back'
import img from '../../images/graph.jpg'

export default function Energy ({history}) {
  const url = 'http://84.51.66.126:8080/dashboard/f7ec6db0-3f19-11e9-9664-8f82c71da1ca?publicId=6113ef70-d83a-11e9-9ff6-9b81d442ba19'
    return <div className="full">
            <Back history={history}/>
            <a href={url} target='_blank' className="imageEnergy" style={{backgroundImage: `url(${img})`}}></a>
    </div>
}
