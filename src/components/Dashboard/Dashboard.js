import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]
const Dashboard = () => {

    return (
        <div>
            <h1 className='text-center text-3xl my-16'>This is Dashboard Page {data.length}</h1>

            <div className="linechart-section">
                <LineChart width={500} height={500} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <Tooltip></Tooltip>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                </LineChart>
            </div>

        </div>
    );
};

export default Dashboard;