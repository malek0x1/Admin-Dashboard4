import React from 'react'

const RightBarUser = (prop) => {
    return (
        <div className="RightBar-body-user">
            {prop.malek ?
                <img src={prop.src} style={{ objectFit: 'cover' }} />
                :
                <img src={prop.src} />
            }
            <div className="RightBar-body-user-detail">
                <p className='p-name'>{prop.name}</p>
                <p className="p-address">France, Paris</p>
            </div>
        </div>)
}

export default RightBarUser