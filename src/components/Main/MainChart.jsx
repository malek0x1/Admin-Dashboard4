import React from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

const MainChart = (prop) => {
    return (
        <RadarChart
            cx={prop.matched ? 130 : 150}
            cy={150}
            outerRadius={150}
            width={prop.matched ? 260 : 280}
            height={320}
            data={prop.datax}
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
    )
}

export default MainChart