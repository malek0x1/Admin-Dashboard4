import { Search } from '@mui/icons-material'
import React from 'react'
// import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ComposedChart, PieChart, Pie } from 'recharts';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// import IMG from '../../img.jpeg'
import IMG from './img2.jpg'

import './Main.css'


import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

const datax = [
    {

        A: 150,
        B: 110,
        fullMark: 150
    },
    {
        A: 150,
        B: 130,
        fullMark: 150
    },
    {
        A: 86,
        B: 130,
        fullMark: 150
    },
    {
        A: 99,
        B: 100,
        fullMark: 150
    },
    {
        A: 85,
        B: 90,
        fullMark: 150
    },
    {
        A: 150,
        B: 85,
        fullMark: 150
    }
];

const Main = () => {
    const theme = useTheme();
    const matched = useMediaQuery(theme.breakpoints.down("sm"))
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];


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
                            {/* <LineChart width={500} height={300} data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                            </LineChart> */}
                            {/* <ResponsiveContainer width="100%" height="100%"> */}
                            <BarChart className='graph-1' width={matched ? 250 : 400} height={250} data={data}>
                                <Bar dataKey="uv" fill="#8884d8" />
                            </BarChart>
                            {/* </ResponsiveContainer> */}
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
                                <div className="progress-name">
                                    <p>Meetings</p>
                                    <p>40/50</p>
                                </div>
                                <div className="progress-bar progress-1"></div>
                                <div className="progress-name">
                                    <p>Deals</p>
                                    <p>80/100</p>
                                </div>
                                <div className="progress-bar progress-2"></div>
                                <div className="progress-name">
                                    <p>Order Value</p>
                                    <p>900$/1000$</p>
                                </div>
                                <div className="progress-bar progress-3"></div>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="Graph-Body-End">
                    <div className="Graph-Body-End-left">
                        <h2 className="Main-Body-Graph-header-title">Recent Customers</h2>
                        <div className="Graph-Body-End-left-users">
                            <div className="Graph-Body-End-left-user">
                                <div className="users-info-wrapper">
                                    <img style={{width:'70px',height:"65px",objectFit:'cover'}} className="img-circle"  src={IMG} alt="" />
                                    <div className="users-info">
                                        <p className='FullName'>Malek Mneimneh</p>
                                        <p className='username'> @malek0x1</p>
                                    </div>
                                </div>
                                <p className='user-status green'>paid</p>
                            </div>
                            <div className="Graph-Body-End-left-user">
                                <div className="users-info-wrapper">
                                    <img className="img-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />

                                    <div className="users-info">
                                        <p className='FullName'>John abc</p>
                                        <p className='username'> @john</p>
                                    </div>
                                </div>
                                <p className='user-status red'>Refunded</p>
                            </div>
                            <div className="Graph-Body-End-left-user">
                                <div className="users-info-wrapper">
                                    <img className="img-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                    <div className="users-info">
                                        <p className='FullName'>Zien xyz</p>
                                        <p className='username'> @zien</p>
                                    </div>
                                </div>
                                <p className='user-status green'>Paid</p>
                            </div>
                            <div className="Graph-Body-End-left-user">
                                <div className="users-info-wrapper">
                                    <img className="img-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                    <div className="users-info">
                                        <p className='FullName'>Aya Doe</p>
                                        <p className='username'> @malek0x1</p>
                                    </div>
                                </div>
                                <p className='user-status red'>Refunded</p>
                            </div>
                        </div>


                    </div>
                    <div className="Graph-Body-End-right">
                        <h2 className="Main-Body-Graph-header-title">Monthly Sales</h2>
                        {/* <PieChart width={400} height={400}>
                            <Pie data={data01} dataKey="value" cx="50%" cy="30%" outerRadius={60} fill="#8884d8" />
                            <Pie data={data02} dataKey="value" cx="50%" cy="30%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        </PieChart> */}

                        <RadarChart
                            cx={matched ? 130 : 150}
                            cy={150}
                            outerRadius={150}
                            width={matched ? 260 : 280}
                            height={320}
                            data={datax}
                        >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar
                                name="Mike"
                                dataKey="A"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.6}
                            />
                        </RadarChart>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main