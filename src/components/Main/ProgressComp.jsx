import React from 'react'

const ProgressComp = ({name,rate}) => {
    return (
        <div className="progress-name">
            <p>{name}</p>
            <p>{rate}</p>
        </div>)
}

export default ProgressComp