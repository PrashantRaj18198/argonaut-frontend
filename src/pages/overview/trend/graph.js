import { useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2'

import GraphHeading from './graphHeading';

import graph from './graph.module.css';

const Graph = ({ data }) => {
    const [dataset, setDataset] = useState({});
    
    useEffect(() => {
        let canvas = document.getElementById('canvas')
        let ctx = canvas.getContext("2d")
        const width = Number(canvas.style.width.replace('px', '')) - 200;
        let gradient = ctx.createLinearGradient(0, 0, width, 0)
        gradient.addColorStop(0, '#3751FF')
        gradient.addColorStop(1, '#FFFFFF')
        const dataset = {
            labels : data,
            datasets: [
                {
                    backgroundColor : gradient, // Put the gradient here as a fill color
                    borderColor : "#3751FF",
                    pointBackgroundColor : "#fff",
                    pointBorderColor : "#3751FF",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#3751FF",
                    data : data
                }
            ]
        };
        setDataset(dataset);
    }, [])

    
    return (
            <div className={graph.container}>
                <GraphHeading />
                <Line
                id='canvas'
                data={dataset}
                width={100}
                height={30}
                options={{
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                drawOnChartArea: false
                            }
                        }]
                    }
                }}
            />
            </div>
    )
}

export default Graph;