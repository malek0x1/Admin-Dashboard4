import { AddPhotoAlternateTwoTone, ArrowForwardIos, AutoStories, AutoStoriesOutlined, CropFreeSharp, Dashboard, ExtensionTwoTone, HistoryToggleOffOutlined, OpenInNewTwoTone, QrCodeScanner, Storage, SupportAgent, ToggleOff } from '@mui/icons-material'
import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='SideBar'>
            <div className="SideBar-Header">
                <div className="SideBar-Logo">MALEK0x1</div>
                <p className="SideBar-Category">CUSTOM</p>
                <div className="SideBar-Options">
                    <div className="SideBar-Option">
                        <div className="SideBar-Option-wrapper">
                            <Dashboard className='SideBar-option-Dash' />
                            <div className="SideBar-Option-Name">Dashboard</div>
                        </div>
                        <ArrowForwardIos className="SideBar-Option-Arrow" />
                    </div>
                    <div className="SideBar-Option">
                        <div className="SideBar-Option-wrapper">
                            <QrCodeScanner className='SideBar-option-Dash' />
                            <div className="SideBar-Option-Name">Products</div>
                        </div>
                        <ArrowForwardIos className="SideBar-Option-Arrow" />
                    </div>
                    <div className="SideBar-Option">
                        <div className="SideBar-Option-wrapper">
                            <SupportAgent className='SideBar-option-Dash' />
                            <div className="SideBar-Option-Name">Customers</div>
                        </div>
                        <ArrowForwardIos className="SideBar-Option-Arrow" />
                    </div>
                    <div className="SideBar-Option">
                        <div className="SideBar-Option-wrapper">
                            <AutoStoriesOutlined className='SideBar-option-Dash' />
                            <div className="SideBar-Option-Name">Library</div>
                        </div>
                        <ArrowForwardIos className="SideBar-Option-Arrow" />
                    </div>

                    <div className="SideBar-Option">
                        <div className="SideBar-Option-wrapper">
                            <ToggleOff className='SideBar-option-Dash' />
                            <div className="SideBar-Option-Name">Properties</div>
                        </div>
                        <ArrowForwardIos className="SideBar-Option-Arrow" />
                    </div>
                </div>
            </div>
            <div className="SideBar-Footer">
                <p className="SideBar-Category">COMPONENTS</p>
                <div className="SideBar-Options">
                    <div className="SideBar-Option">
                        <div className="SideBar-Option-wrapper">
                            <Storage className='SideBar-option-Dash' />
                            <div className="SideBar-Option-Name">Base</div>
                        </div>
                        <ArrowForwardIos className="SideBar-Option-Arrow" />
                    </div>
                    <div className="SideBar-Option">
                        <div className="SideBar-Option-wrapper">
                            <AddPhotoAlternateTwoTone className='SideBar-option-Dash' />
                            <div className="SideBar-Option-Name">Custom</div>
                        </div>
                        <ArrowForwardIos className="SideBar-Option-Arrow" />
                    </div>
                    <div className="SideBar-Option">
                        <div className="SideBar-Option-wrapper">
                            <ExtensionTwoTone className='SideBar-option-Dash' />
                            <div className="SideBar-Option-Name">Extended</div>
                        </div>
                        <ArrowForwardIos className="SideBar-Option-Arrow" />
                    </div>

                    <div className="SideBar-Option">
                        <div className="SideBar-Option-wrapper">
                            <OpenInNewTwoTone className='SideBar-option-Dash' />
                            <div className="SideBar-Option-Name">Links</div>
                        </div>
                        <ArrowForwardIos className="SideBar-Option-Arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar