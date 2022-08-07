import { Search } from '@mui/icons-material'
import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ComposedChart, PieChart, Pie } from 'recharts';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { data, data01, data02, datax, } from './data.js'
import IMG from './imgs/img2.jpg'

import './Main.css'


import MainChart from './MainChart.jsx';
import TopCustomers from './TopCustomers.jsx';
import ProgressComp from './ProgressComp.jsx';



const Main = () => {
    const theme = useTheme();
    const matched = useMediaQuery(theme.breakpoints.down("sm"))




    return (
        <div className='Main'>
            <div className="Main-Header">
                <input type="text" className='Main-Header-input' placeholder='Search...' />
                <Search className="Search-Icon" />
            </div>

            <div className="Main-Body">
                <div className="Main-Body-Widget">
                    <h1 className="Main-Body-Widget-Header">Upgrade your plan</h1>
                    <p className='Main-Body-Widget-p'>70% discount for 1 year of subscription</p>
                    <div className="Main-Body-Widget-btns">
                        <button > Go Primium</button>
                        <button> Try for free</button>
                    </div>
                </div>
                <div className="Main-Body-Graph">
                    <div className="Main-Body-Graph-header">
                        <h2 className="Main-Body-Graph-header-title">Daily Visitors</h2>
                    </div>

                    <div className="Graph-Wrapper">
                        <div className="graph-left">
                            <p className="graph-name">Today vs Yesterday</p>
                            <BarChart className='graph-1' width={matched ? 250 : 400} height={250} data={data}><Bar dataKey="uv" fill="#8884d8" /></BarChart>
                        </div>
                        <div className="graph-right">
                            <p className="graph-name">Overview</p>
                            <div className="overview-widgets">
                                <div className="overview-widget">
                                    <h3>990</h3>
                                    <p>Deals</p>
                                </div>
                                <div className="overview-widget">
                                    <h3 className="po">$9K</h3>
                                    <p style={{ color: "white" }}>Orders</p>
                                </div>
                            </div>
                            <div className="progress-wrapper">
                                <ProgressComp name="Meetings" rate="40/50" />
                                <div className="progress-bar progress-1"></div>
                                <ProgressComp name="Deals" rate="80/100" />
                                <div className="progress-bar progress-2"></div>
                                <ProgressComp name="Order Value" rate="900$/1000$" />
                                <div className="progress-bar progress-3"></div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="Graph-Body-End">
                    <div className="Graph-Body-End-left">
                        <h2 className="Main-Body-Graph-header-title">Recent Customers</h2>
                        <div className="Graph-Body-End-left-users">
                            <TopCustomers malek={true} src={IMG} name="Malek Mneimneh" user="malek0x1" status="Paid" color="green" />
                            <TopCustomers src="https://bootdey.com/img/Content/avatar/avatar1.png" name="John abc" user="john" status="Refunded" color="red" />
                            <TopCustomers src="https://bootdey.com/img/Content/avatar/avatar2.png" name="Zien xyz" user="zien" status="Paid" color="green" />
                            <TopCustomers src="https://bootdey.com/img/Content/avatar/avatar3.png" name="Aya Doe" user="aya" status="Refunded" color="red" />
                        </div>
                    </div>
                    <div className="Graph-Body-End-right">
                        <h2 className="Main-Body-Graph-header-title">Monthly Sales</h2>
                        <MainChart datax={datax} matched={matched} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main