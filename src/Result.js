import React, { useEffect } from 'react'
import Plot from 'react-plotly.js';
// import Independent from './Independent';
import Sidenav from './Sidenav';
// import Slide from './Slide';
// import json from './data.json'

function Result(
  // { g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11 }
) {

  let newData = window.res_data;

  // console.log(newData);

  let g1 = newData[Object.keys(newData)[0]];
  let g2 = newData[Object.keys(newData)[1]];
  let g3 = newData[Object.keys(newData)[2]];
  let g4 = newData[Object.keys(newData)[3]];
  let g5 = newData[Object.keys(newData)[4]];
  let g6 = newData[Object.keys(newData)[5]];
  let g7 = newData[Object.keys(newData)[6]];
  let g8 = newData[Object.keys(newData)[7]];
  let g9 = newData[Object.keys(newData)[8]];
  let g10 = newData[Object.keys(newData)[9]];
  let g11 = newData[Object.keys(newData)[10]];


  // console.log(g1.date);

  let g1date = [];


  g1.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g1date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g1x1 = [];
  let g1x1Error = [];
  let g1y1Error = [];


  for (let i = 0; i < g1.date.length; i++) {
    g1x1.push(g1.date[i] + g1.error);
    g1y1Error.push(g1.prediction[i] + g1.error);
  }

  g1.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g1x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g1x2 = [];
  let g1x2Error = [];
  let g1y2Error = [];

  for (let i = 0; i < g1.date.length; i++) {
    g1x2.push(g1.date[i] - g1.error);
    g1y2Error.push(g1.prediction[i] - g1.error);
  }

  g1.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g1x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g1mean = [];

  for (let i = 0; i < g1.date.length; i++) {
    g1mean.push(g1.mean);
  }


  let g2date = [];

  g2.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g2date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g2x1 = [];
  let g2x1Error = [];
  let g2y1Error = [];

  for (let i = 0; i < g2.date.length; i++) {
    g2x1.push(g2.date[i] + g2.error);
    g2y1Error.push(g2.prediction[i] + g2.error);
  }

  g2.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g2x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g2x2 = [];
  let g2x2Error = [];
  let g2y2Error = [];

  for (let i = 0; i < g2.date.length; i++) {
    g2x2.push(g2.date[i] - g2.error);
    g2y2Error.push(g2.prediction[i] - g2.error);
  }

  g2.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g2x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g2mean = [];

  for (let i = 0; i < g2.date.length; i++) {
    g2mean.push(g2.mean);
  }

  let g3date = [];

  g3.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g3date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g3x1 = [];
  let g3x1Error = [];
  let g3y1Error = [];

  for (let i = 0; i < g3.date.length; i++) {
    g3x1.push(g3.date[i] + g3.error);
    g3y1Error.push(g3.prediction[i] + g3.error);
  }

  g3.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g3x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g3x2 = [];
  let g3x2Error = [];
  let g3y2Error = [];

  for (let i = 0; i < g3.date.length; i++) {
    g3x2.push(g3.date[i] - g3.error);
    g3y2Error.push(g3.prediction[i] - g3.error);
  }

  g3.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g3x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g3mean = [];

  for (let i = 0; i < g3.date.length; i++) {
    g3mean.push(g3.mean);
  }


  let g4date = [];

  g4.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g4date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g4x1 = [];
  let g4x1Error = [];
  let g4y1Error = [];

  for (let i = 0; i < g4.date.length; i++) {
    g4x1.push(g4.date[i] + g4.error);
    g4y1Error.push(g4.prediction[i] + g4.error);
  }

  g4.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g4x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g4x2 = [];
  let g4x2Error = [];
  let g4y2Error = [];

  for (let i = 0; i < g4.date.length; i++) {
    g4x2.push(g4.date[i] - g4.error);
    g4y2Error.push(g4.prediction[i] - g4.error);
  }

  g4.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g4x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g4mean = [];

  for (let i = 0; i < g4.date.length; i++) {
    g4mean.push(g4.mean);
  }

  let g5date = [];

  g5.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g5date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g5x1 = [];
  let g5x1Error = [];
  let g5y1Error = [];

  for (let i = 0; i < g5.date.length; i++) {
    g5x1.push(g5.date[i] + g5.error);
    g5y1Error.push(g5.prediction[i] + g5.error);
  }

  g5.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g5x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g5x2 = [];
  let g5x2Error = [];
  let g5y2Error = [];

  for (let i = 0; i < g5.date.length; i++) {
    g5x2.push(g5.date[i] - g5.error);
    g5y2Error.push(g5.prediction[i] - g3.error);
  }

  g5.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g5x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g5mean = [];

  for (let i = 0; i < g5.date.length; i++) {
    g5mean.push(g5.mean);
  }

  let g6date = [];

  g6.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g6date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g6x1 = [];
  let g6x1Error = [];
  let g6y1Error = [];

  for (let i = 0; i < g6.date.length; i++) {
    g6x1.push(g6.date[i] + g6.error);
    g6y1Error.push(g6.prediction[i] + g6.error);
  }

  g6.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g6x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g6x2 = [];
  let g6x2Error = [];
  let g6y2Error = [];

  for (let i = 0; i < g6.date.length; i++) {
    g6x2.push(g6.date[i] - g6.error);
    g6y2Error.push(g6.prediction[i] - g6.error);
  }

  g6.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g6x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g6mean = [];

  for (let i = 0; i < g6.date.length; i++) {
    g6mean.push(g6.mean);
  }

  let g7date = [];

  g7.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g7date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g7x1 = [];
  let g7x1Error = [];
  let g7y1Error = [];

  for (let i = 0; i < g7.date.length; i++) {
    g7x1.push(g7.date[i] + g7.error);
    g7y1Error.push(g7.prediction[i] + g7.error);
  }

  g7.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g7x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g7x2 = [];
  let g7x2Error = [];
  let g7y2Error = [];

  for (let i = 0; i < g7.date.length; i++) {
    g7x2.push(g7.date[i] - g7.error);
    g7y2Error.push(g7.prediction[i] - g7.error);
  }

  g7.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g7x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g7mean = [];

  for (let i = 0; i < g7.date.length; i++) {
    g7mean.push(g7.mean);
  }

  let g8date = [];

  g8.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g8date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g8x1 = [];
  let g8x1Error = [];
  let g8y1Error = [];

  for (let i = 0; i < g8.date.length; i++) {
    g8x1.push(g8.date[i] + g8.error);
    g8y1Error.push(g8.prediction[i] + g8.error);
  }

  g8.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g8x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g8x2 = [];
  let g8x2Error = [];
  let g8y2Error = [];

  for (let i = 0; i < g8.date.length; i++) {
    g8x2.push(g8.date[i] - g8.error);
    g8y2Error.push(g8.prediction[i] - g8.error);
  }

  g8.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g8x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g8mean = [];

  for (let i = 0; i < g8.date.length; i++) {
    g8mean.push(g8.mean);
  }

  let g9date = [];

  g9.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g9date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g9x1 = [];
  let g9x1Error = [];
  let g9y1Error = [];

  for (let i = 0; i < g9.date.length; i++) {
    g9x1.push(g9.date[i] + g9.error);
    g9y1Error.push(g9.prediction[i] + g9.error);
  }

  g9.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g9x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g9x2 = [];
  let g9x2Error = [];
  let g9y2Error = [];

  for (let i = 0; i < g9.date.length; i++) {
    g9x2.push(g9.date[i] - g9.error);
    g9y2Error.push(g9.prediction[i] - g9.error);
  }

  g9.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g9x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g9mean = [];

  for (let i = 0; i < g9.date.length; i++) {
    g9mean.push(g9.mean);
  }

  let g10date = [];

  g10.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g10date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g10x1 = [];
  let g10x1Error = [];
  let g10y1Error = [];

  for (let i = 0; i < g10.date.length; i++) {
    g10x1.push(g10.date[i] + g10.error);
    g10y1Error.push(g10.prediction[i] + g10.error);
  }

  g10.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g10x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g10x2 = [];
  let g10x2Error = [];
  let g10y2Error = [];

  for (let i = 0; i < g10.date.length; i++) {
    g10x2.push(g10.date[i] - g10.error);
    g10y2Error.push(g10.prediction[i] - g10.error);
  }

  g10.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g10x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g10mean = [];

  for (let i = 0; i < g10.date.length; i++) {
    g10mean.push(g10.mean);
  }

  let g11date = [];

  g11.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g11date.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g11x1 = [];
  let g11x1Error = [];
  let g11y1Error = [];

  for (let i = 0; i < g11.date.length; i++) {
    g11x1.push(g11.date[i] + g11.error);
    g11y1Error.push(g11.prediction[i] + g11.error);
  }

  g11.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g11x1Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g11x2 = [];
  let g11x2Error = [];
  let g11y2Error = [];

  for (let i = 0; i < g11.date.length; i++) {
    g11x2.push(g11.date[i] - g11.error);
    g11y2Error.push(g11.prediction[i] - g11.error);
  }

  g11.date.forEach(function (element) {
    let z = "" + element;
    let x = z.substring(0, 10);
    let y = parseInt(x);

    let a = new Date(y * 1000);

    g11x2Error.push(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds());

  });

  let g11mean = [];

  for (let i = 0; i < g11.date.length; i++) {
    g11mean.push(g11.mean);
  }

  return (
    <div className='container mt-5'>
      <Sidenav />

      <p className='text-center mb-5 resTitle'>Graph Visaulisation</p>


      <div className="graph_container">

        <div className="graph_left">

          <div className="graph1 graph leftgraph my-1" id='graph1'>

            <Plot

              data={[
                {
                  x: g1date.slice(0, 10),
                  y: g1.prediction.slice(0, 10),
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g1.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g1.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g1x1Error.slice(0, 10),
                  y: g1y1Error.slice(0, 10),
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g1x2Error.slice(0, 10),
                  y: g1y2Error.slice(0, 10),
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g1date.slice(0, 10),
                  y: g1.prediction.slice(0, 10),
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g1.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g1.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g1date.slice(0, 10),
                  y: g1mean.slice(0, 10),
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                },

                // {
                //   x: g1date,
                //   y: g1.user_qry,
                //   type: 'markers',
                //   mode: 'markers',
                //   marker: {
                //     color: 'purple',
                //     symbol: 'diamond',
                //   },
                // }

              ]}

              layout={{
                autosize: false,
                width: 500,
                height: 300,
                title: g1.label + " Plot",
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
                  title: g1.label,
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

              }}


            />
          </div>


          

          <div className="graph graph2 leftgraph" id='graph2'>
            <Plot

              data={[
                {
                  x: g2date,
                  y: g2.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g2.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g2.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g2x1Error,
                  y: g2y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g2x2Error,
                  y: g2y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g2date,
                  y: g2.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g2.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g2.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g2date,
                  y: g2mean,
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                }

              ]}

              layout={{

                autosize: false,
                width: 500,
                height: 300, title: g2.label + " Plot",
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
                  title: g2.label,
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

              }}


            />
          </div>

          <div className="graph graph3 leftgraph" id='graph3'>
            <Plot

              data={[
                {
                  x: g3date,
                  y: g3.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g3.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g3.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g3x1Error,
                  y: g3y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g3x2Error,
                  y: g3y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g3date,
                  y: g3.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g3.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g3.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g3date,
                  y: g3mean,
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                }

              ]}

              layout={{
                autosize: false,
                width: 500,
                height: 300,
                title: g3.label + " Plot",
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
                  title: g3.label,
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

              }}


            />
          </div>

          <div className="graph graph4 leftgraph" id='graph4'>
            <Plot

              data={[
                {
                  x: g4date,
                  y: g4.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g4.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g4.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g4x1Error,
                  y: g4y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g4x2Error,
                  y: g4y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g4date,
                  y: g4.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g4.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g4.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g4date,
                  y: g4mean,
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                }

              ]}

              layout={{
                autosize: false,
                width: 500,
                height: 300,
                title: g4.label + " Plot",
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
                  title: g4.label,
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

              }}


            />
          </div>

          <div className="graph graph5 leftgraph" id='graph5'>
            <Plot

              data={[
                {
                  x: g5date,
                  y: g5.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g5.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g5.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g5x1Error,
                  y: g5y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g5x2Error,
                  y: g5y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g5date,
                  y: g5.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g5.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g5.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g5date,
                  y: g5mean,
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                }

              ]}

              layout={{
                autosize: false,
                width: 500,
                height: 300,
                title: g5.label + " Plot",
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
                  title: g5.label,
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

              }}


            />
          </div>

          <div className="graph graph6 leftgraph" id='graph6'>
            <Plot

              data={[
                {
                  x: g6date,
                  y: g6.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g6.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g6.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g6x1Error,
                  y: g6y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g6x2Error,
                  y: g6y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g6date,
                  y: g6.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g6.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g6.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g6date,
                  y: g6mean,
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                }

              ]}

              layout={{
                autosize: false,
                width: 500,
                height: 300,
                title: g6.label + " Plot",
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
                  title: g6.label,
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

              }}


            />
          </div>

          <div className="graph graph7 leftgraph" id='graph7'>
            <Plot

              data={[
                {
                  x: g7date,
                  y: g7.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g7.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g7.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g7x1Error,
                  y: g7y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g7x2Error,
                  y: g7y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g7date,
                  y: g7.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g7.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g7.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g7date,
                  y: g7mean,
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                }

              ]}

              layout={{
                autosize: false,
                width: 500,
                height: 300,
                title: g7.label + " Plot",
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
                  title: g7.label,
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

              }}


            />
          </div>

          <div className="graph graph8 leftgraph" id='graph8'>
            <Plot

              data={[
                {
                  x: g8date,
                  y: g8.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g8.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g8.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g8x1Error,
                  y: g8y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g8x2Error,
                  y: g8y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g8date,
                  y: g8.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g8.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g8.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g8date,
                  y: g8mean,
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                }

              ]}

              layout={{
                autosize: false,
                width: 500,
                height: 300,
                title: g8.label + " Plot",
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
                  title: g8.label,
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

              }}


            />
          </div>

          <div className="graph graph9 leftgraph" id='graph9'>
            <Plot

              data={[
                {
                  x: g9date,
                  y: g9.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g9.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g9.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g9x1Error,
                  y: g9y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g9x2Error,
                  y: g9y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g9date,
                  y: g9.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g9.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g9.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g9date,
                  y: g9mean,
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                }

              ]}

              layout={{
                autosize: false,
                width: 500,
                height: 300,
                title: g9.label + " Plot",
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
                  title: g9.label,
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

              }}


            />
          </div>


          <div className="graph graph10 leftgraph" id='graph10'>
            <Plot

              data={[
                {
                  x: g10date,
                  y: g10.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g10.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g10.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g10x1Error,
                  y: g10y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g10x2Error,
                  y: g10y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g10date,
                  y: g10.prediction,
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g10.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g10.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g10date,
                  y: g10mean,
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                }

              ]}

              layout={{
                autosize: false,
                width: 500,
                height: 300,
                title: g10.label + " Plot",
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
                  title: g10.label,
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

              }}


            />
          </div>



          <p>Independent Graph</p>

        </div>

        <div className="graph_right">

          <div className="graph graph11" id='graph11'>
            <Plot

              data={[
                {
                  x: g11date.slice(0, 10),
                  y: g11.prediction.slice(0, 10),
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g11.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g11.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g11x1Error.slice(0, 10),
                  y: g11y1Error.slice(0, 10),
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g11x2Error.slice(0, 10),
                  y: g11y2Error.slice(0, 10),
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#ffbf69',
                  showlegend: false,
                },

                {
                  x: g11date.slice(0, 10),
                  y: g11.prediction.slice(0, 10),
                  type: 'scatter',
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g11.error,
                    visible: true,
                  },
                  line: {
                    color: 'blue',
                    width: 2
                  },
                  name: g11.label,
                  marker: { color: 'green' },
                  showlegend: false,
                },

                {
                  x: g11date.slice(0, 10),
                  y: g11mean.slice(0, 10),
                  line: {
                    color: 'black',
                    width: 2
                  },
                  error_y: {
                    color: '#ff0000',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: 80,
                    visible: false,
                  },
                  showlegend: false,
                  marker: {
                    size: 1,
                  }
                }

              ]}

              layout={{
                autosize: false,
                width: 500,
                height: 300,
                title: g11.label + " Plot",
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
                  title: g11.label,
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

              }}


            />
          </div>

          <p>Dependent Graph</p>

        </div>

      </div>


    </div>
  )
}

export default Result