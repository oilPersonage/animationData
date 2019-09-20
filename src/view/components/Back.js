import React from 'react'

export default function Back({two, history}) {
    return <div className='backButton' style={{left: two}} onClick={()=> history.goBack()}>Назад</div>
}
