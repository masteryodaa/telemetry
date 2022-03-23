import React from 'react'
import Plot from 'react-plotly.js';
import json from './data.json'

// import Plotly from './plotly.js';
// import Plotly from 'plotly.js-dist'
// import Plotly from 'plotly.js';

// import createPlotlyComponent from 'react-plotly.js/factory';
// import Plotly from "https://cdn.plot.ly/plotly-latest.min.js"
// const Plot = createPlotlyComponent(Plotly);

function Result(props) {

  let data_x = Object.keys(json.torque);
  let data_y = Object.values(json.torque);
  console.log(data_x);
  console.log(data_y);

  let dateX = [];

  data_x.forEach(function (element) {
    let x = element.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    dateX.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  // console.log(dateX.slice(0,10));


  return (
    <div className='container'>

      <h1 className='text-center my-3'>Result</h1>

      <Plot
        className='d-flex justify-content-center'
        data={[
          {
            x: dateX.slice(0, 10),
            y: data_y,
            type: 'scatter',

            error_y: {
              color: '#ff0000',
              thickness: 1,
              width: 0,
              type: 'constant',
              value: 10,
              visible: true,
              fill:'tonext'
            },

            fill: 'toself',
            fillcolor: 'yellow',

            line: {
              color: 'blue',
              width: 2
            },
            name: 'Torque',
            marker: { color: 'green' },
            // showlegend: true,
          },
          {
            // type: 'bar', x: dateX.slice(0, 10),
            // y: data_y,
          },
        ]}

        layout={{
          //  width: 320, height: 240,
          title: 'A Fancy Plot',
          xaxis: {
            title: 'Time',
            titlefont: {
              // family: 'Courier New, monospace',
              size: 12,
              color: '#7f7f7f'
            },
            tickfont: {
              family: 'Old Standard TT, serif',
              size: 12,
              color: '#7f7f7f'
            }
          },

          yaxis: {
            title: 'Torque',
            titlefont: {
              // family: 'Courier New, monospace',
              size: 12,
              color: '#7f7f7f'
            },
            tickfont: {
              family: 'Old Standard TT, serif',
              size: 12,
              color: '#7f7f7f'
            }
          },
          margin: {
            l: 50,
            r: 50,
            b: 100,
            t: 100,
            pad: 5
          },
          // paper_bgcolor: 'yellow',
          // plot_bgcolor: '#c7c7c7',
          // font: {
          //   family: 'Old Standard TT, serif',
          //   size: 14,
          //   color: '#7f7f7f'
          // }

        }}
      />

    </div>
  )
}

export default Result