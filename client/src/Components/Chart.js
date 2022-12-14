import React from 'react';


import Plot from 'react-plotly.js';
import "../Style/componets/Chart.css";


const Chart = () => {
  return (
    <div className='absolute-center chart-color'>
        <Plot 
            data={[
                {
                    x:["Jan", "Feb", "March"," Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                    y:[50, 45, 55, 65, 75, 79, 72, 67, 65, 63 ,62, 60],
                    type:'scatter',
                    "line.color":"white"
                },
                {
                    x:["Jan", "Feb", "March"," Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                    y:[40, 50, 65, 75, 62, 66, 76, 56, 78, 56, 76, 56],
                    type:'scatter'
                }
              ]}
            layout={{
              width:700 ,
              height:400, 
              title: "Graph", 
              plot_bgcolor:"rgb(14, 15, 35)", 
              paper_bgcolor:"rgb(14, 15, 35)",
            xaxis: {
            showgrid: false,
            zeroline: false,
            color: "white"
            },
            yaxis: {
              color: "white"
            }, }}
        />
    </div>
   
  )
}

export default Chart