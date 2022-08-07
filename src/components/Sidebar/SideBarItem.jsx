import { AddPhotoAlternateTwoTone, ArrowForwardIos, AutoStories, AutoStoriesOutlined, CropFreeSharp, Dashboard, ExtensionTwoTone, HistoryToggleOffOutlined, OpenInNewTwoTone, QrCodeScanner, Storage, SupportAgent, ToggleOff } from '@mui/icons-material'
import React from 'react'

const SideBarItem = (prop) => {
    const Componentx = prop.icon;
    return (
        <div className="SideBar-Option">
            <div className="SideBar-Option-wrapper">
                <Componentx className='SideBar-option-Dash' />
                <div className="SideBar-Option-Name">{prop.name}</div>
            </div>
            <ArrowForwardIos className="SideBar-Option-Arrow" />
        </div>
    )
}

export default SideBarItem