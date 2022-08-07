import { AddPhotoAlternateTwoTone, ArrowForwardIos, AutoStories, AutoStoriesOutlined, CropFreeSharp, Dashboard, ExtensionTwoTone, HistoryToggleOffOutlined, OpenInNewTwoTone, QrCodeScanner, Storage, SupportAgent, ToggleOff } from '@mui/icons-material'
import React from 'react'
import './Sidebar.css'
import SideBarItem from './SideBarItem'
const Sidebar = () => {
    return (
        <div className='SideBar'>
            <div className="SideBar-Header">
                <div className="SideBar-Logo">MALEK0x1</div>
                <p className="SideBar-Category">CUSTOM</p>
                <div className="SideBar-Options">
                    <SideBarItem icon={Dashboard} name="Dashboard" />
                    <SideBarItem icon={QrCodeScanner} name="Products" />
                    <SideBarItem icon={SupportAgent} name="Customers" />
                    <SideBarItem icon={AutoStoriesOutlined} name="Library" />
                    <SideBarItem icon={ToggleOff} name="Properties" />
                </div>
            </div>
            <div className="SideBar-Footer">
                <p className="SideBar-Category">COMPONENTS</p>
                <div className="SideBar-Options">
                    <SideBarItem icon={Storage} name="Base" />
                    <SideBarItem icon={AddPhotoAlternateTwoTone} name="Custom" />
                    <SideBarItem icon={ExtensionTwoTone} name="Extended" />
                    <SideBarItem icon={OpenInNewTwoTone} name="Links" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar