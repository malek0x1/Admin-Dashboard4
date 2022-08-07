import React from 'react'

const TopCustomers = (prop) => {

    return (
        <div className="Graph-Body-End-left-user">
            <div className="users-info-wrapper">
                {prop.malek ?
                    <img style={{ width: '70px', height: "65px", objectFit: 'cover' }} className="img-circle" src={prop.src} alt="" />
                    :
                    <img className="img-circle" src={prop.src} alt="" />
                }
                <div className="users-info">
                    <p className='FullName'>{prop.name}</p>
                    <p className='username'>@{prop.user}</p>
                </div>
            </div>
            <p className={`user-status ${prop.color}`}>{prop.status}</p>
        </div>)
}

export default TopCustomers