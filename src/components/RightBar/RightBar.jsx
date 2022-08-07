import React from 'react'
import './RightBar.css'
import IMG from './imgs/img2.jpg'
import RightBarUser from './RightBarUser'


const RightBar = () => {
    return (
        <div className="RightBar">
            <div className="RightBar-Header">
                <h3>Top Customers</h3>
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" />
            </div>
            <div className="RightBar-body">

                <RightBarUser src={IMG} malek name="Malek Mneimneh" />
                <RightBarUser src="https://bootdey.com/img/Content/avatar/avatar1.png" name="John abc" />
                <RightBarUser src="https://bootdey.com/img/Content/avatar/avatar2.png" name="Zien xyz" />
                <RightBarUser src="https://bootdey.com/img/Content/avatar/avatar3.png" name="Aya Doe" />
            </div>
            <div className="RightBar-Footer">
                <h3 className='RightBar-Footer-h3-title'>Today's Orders</h3>
                <p className='RightBar-Footer-p-title'>
                    Latest Orders For Today
                </p>
                <div className="RightBar-Footer-papers">
                    <div className="RightBar-Footer-paper">
                        <p className="RightBar-Footer-paper-p">#1233</p>
                        <h4>Google Inc</h4>
                        <p className="RightBar-Footer-paper-p">4 Apr, 2021</p>
                        <hr />
                        <div className="RightBar-Footer-Paper-Footer">
                            <p>Due</p>
                            <p>$744.00</p>
                        </div>
                    </div>
                    <div className="RightBar-Footer-paper">
                        <p className="RightBar-Footer-paper-p">#1233</p>
                        <h4>Google Inc</h4>
                        <p className="RightBar-Footer-paper-p">4 Apr, 2021</p>
                        <hr />
                        <div className="RightBar-Footer-Paper-Footer">
                            <p>Due</p>
                            <p>$744.00</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightBar