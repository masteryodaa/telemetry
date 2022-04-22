import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import Sidenav from './Sidenav';
import Map from './Map';
import DatePicker from 'react-date-picker';



function Result(
  { g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12,
    setG1, setG2, setG3, setG4, setG5, setG6, setG7, setG8, setG9, setG10, setG11, setG12, loaded, setLoaded, failed, setFailed
  }
) {

  useEffect(() => {
    setG1(g1);
    setG2(g2);
    setG3(g3);
    setG4(g4);
    setG5(g5);
    setG6(g6);
    setG7(g7);
    setG8(g8);
    setG9(g9);
    setG10(g10);
    setG11(g11);
    setG12(g12);
  }, [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, setG1, setG2, setG3, setG4, setG5, setG6, setG7, setG8, setG9, setG10, setG11, setG12]);

  const [fromDate, setFromDate] = useState(new Date('2021/04/25'));
  const [toDate, setToDate] = useState(new Date('2021/05/25'));

  const changeFromDate = (date) => {
    setFromDate(date);
    
    
  }

  const changeToDate = (date) => {
    setToDate(date)
  } 
  




  // console.log(g1);
  // console.log(g1.date);
  // console.log(g1.prediction);


  let g1y1Error = [];


  for (let i = 0; i < g1.date.length; i++) {
    g1y1Error.push(g1.prediction[i] + g1.error);
  }



  let g1y2Error = [];

  for (let i = 0; i < g1.date.length; i++) {
    g1y2Error.push(g1.prediction[i] - g1.error);
  }



  let g1mean = [];

  for (let i = 0; i < g1.date.length; i++) {
    g1mean.push(g1.mean);
  }



  let g2y1Error = [];

  for (let i = 0; i < g2.date.length; i++) {
    g2y1Error.push(g2.prediction[i] + g2.error);
  }


  let g2y2Error = [];

  for (let i = 0; i < g2.date.length; i++) {
    g2y2Error.push(g2.prediction[i] - g2.error);
  }


  let g2mean = [];

  for (let i = 0; i < g2.date.length; i++) {
    g2mean.push(g2.mean);
  }




  let g3y1Error = [];

  for (let i = 0; i < g3.date.length; i++) {
    g3y1Error.push(g3.prediction[i] + g3.error);
  }




  let g3y2Error = [];

  for (let i = 0; i < g3.date.length; i++) {
    g3y2Error.push(g3.prediction[i] - g3.error);
  }


  let g3mean = [];

  for (let i = 0; i < g3.date.length; i++) {
    g3mean.push(g3.mean);
  }



  let g4y1Error = [];

  for (let i = 0; i < g4.date.length; i++) {
    g4y1Error.push(g4.prediction[i] + g4.error);
  }



  let g4y2Error = [];

  for (let i = 0; i < g4.date.length; i++) {
    g4y2Error.push(g4.prediction[i] - g4.error);
  }


  let g4mean = [];

  for (let i = 0; i < g4.date.length; i++) {
    g4mean.push(g4.mean);
  }



  let g5y1Error = [];

  for (let i = 0; i < g5.date.length; i++) {
    g5y1Error.push(g5.prediction[i] + g5.error);
  }




  let g5y2Error = [];

  for (let i = 0; i < g5.date.length; i++) {
    g5y2Error.push(g5.prediction[i] - g3.error);
  }

  let g5mean = [];

  for (let i = 0; i < g5.date.length; i++) {
    g5mean.push(g5.mean);
  }



  let g6y1Error = [];

  for (let i = 0; i < g6.date.length; i++) {
    g6y1Error.push(g6.prediction[i] + g6.error);
  }


  let g6y2Error = [];

  for (let i = 0; i < g6.date.length; i++) {
    g6y2Error.push(g6.prediction[i] - g6.error);
  }


  let g6mean = [];

  for (let i = 0; i < g6.date.length; i++) {
    g6mean.push(g6.mean);
  }




  let g7y1Error = [];

  for (let i = 0; i < g7.date.length; i++) {
    g7y1Error.push(g7.prediction[i] + g7.error);
  }




  let g7y2Error = [];

  for (let i = 0; i < g7.date.length; i++) {
    g7y2Error.push(g7.prediction[i] - g7.error);
  }


  let g7mean = [];

  for (let i = 0; i < g7.date.length; i++) {
    g7mean.push(g7.mean);
  }


  let g8y1Error = [];

  for (let i = 0; i < g8.date.length; i++) {
    g8y1Error.push(g8.prediction[i] + g8.error);
  }



  let g8y2Error = [];

  for (let i = 0; i < g8.date.length; i++) {
    g8y2Error.push(g8.prediction[i] - g8.error);
  }


  let g8mean = [];

  for (let i = 0; i < g8.date.length; i++) {
    g8mean.push(g8.mean);
  }



  let g9y1Error = [];

  for (let i = 0; i < g9.date.length; i++) {
    g9y1Error.push(g9.prediction[i] + g9.error);
  }



  let g9y2Error = [];

  for (let i = 0; i < g9.date.length; i++) {
    g9y2Error.push(g9.prediction[i] - g9.error);
  }

  let g9mean = [];

  for (let i = 0; i < g9.date.length; i++) {
    g9mean.push(g9.mean);
  }



  let g10y1Error = [];

  for (let i = 0; i < g10.date.length; i++) {
    g10y1Error.push(g10.prediction[i] + g10.error);
  }




  let g10y2Error = [];

  for (let i = 0; i < g10.date.length; i++) {
    g10y2Error.push(g10.prediction[i] - g10.error);
  }

  let g10mean = [];

  for (let i = 0; i < g10.date.length; i++) {
    g10mean.push(g10.mean);
  }


  let g11y1Error = [];

  for (let i = 0; i < g11.date.length; i++) {
    g11y1Error.push(g11.prediction[i] + g11.error);
  }




  let g11y2Error = [];

  for (let i = 0; i < g11.date.length; i++) {
    g11y2Error.push(g11.prediction[i] - g11.error);
  }


  let g11mean = [];

  for (let i = 0; i < g11.date.length; i++) {
    g11mean.push(g11.mean);
  }



  return (
    <div className='container resultPage'>
      {/* <p className='text-center resTitle'>Prediction dashboard</p> */}


      <div className="graph_container">

        <div className="graph_left ">

          <div className="graph graph1 leftgraph" id='graph1'>

            {
              g1.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g1.notification_data["predicted value"]}</div>
                        <div>Real Value - {g1.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }

            <Plot

              data={[
                {
                  x: g1.date,
                  y: g1.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g1.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g1.label,
                  marker: { color: 'fdb833', size: 3 },
                  showlegend: false,
                },

                {
                  x: g1.date,
                  y: g1y1Error,
                  mode: 'none',
                  fill: 'tonextx',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g1.date,
                  y: g1y2Error,
                  mode: 'none',
                  fill: 'tonextx',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },


                // {
                //   x: g1.date,
                //   y: g1mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name:'Mean',
                //   marker: {
                //     size: 1,
                //   }
                // },


                {
                  x: g1.date,
                  y: g1.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g1.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  marker: { color: '#143601', size: 4 },
                  showlegend: true,
                  name: "Prediction",
                },


                {
                  x: [g1.qry_date],
                  y: [g1.user_qry],
                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7
                  },
                  showlegend: true,
                  name: 'user query'
                }

              ]}


              layout={{
                autosize: false,
                width: 600,
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

              config={{
                responsive: true,
              }}

            />

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g1.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g1.mean_err}%
              </div>
            </div>

            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g1.pred_err}% </small>
            <small className='mb-1 p-0 secondary'>deviation from historical mean : {g1.mean_err}% </small> */}
          </div>


          <div className="graph graph2 leftgraph" id='graph2'>

            {
              g2.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g2.notification_data["predicted value"]}</div>
                        <div>Real Value - {g2.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }

            <Plot

              data={[
                {
                  x: g2.date,
                  y: g2.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g2.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g2.label,
                  marker: { color: 'fdb833' },
                  showlegend: false,
                },

                {
                  x: g2.date,
                  y: g2y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g2.date,
                  y: g2y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g2.date,
                  y: g2.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g2.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  marker: { color: '#143601', size: 4 },
                  showlegend: true,
                  name: "prediction",
                },

                // {
                //   x: g2.date,
                //   y: g2mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name: "mean",                  marker: {
                //     size: 1,
                //   }
                // },

                {
                  x: [g2.qry_date],
                  y: [g2.user_qry],
                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7,
                  },
                  showlegend: true,
                  name: 'user query',
                },

              ]}

              config={{
                responsive: true,
              }}

              layout={{

                autosize: false,
                width: 600,
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
            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g2.pred_err}%</small>
            <small className='mb-1 p-0 secondary'>deviation from historical prediction : {g2.mean_err}%</small> */}

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g2.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g2.mean_err}%
              </div>
            </div>

          </div>

          <div className="graph graph3 leftgraph" id='graph3'>

            {
              g3.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g3.notification_data["predicted value"]}</div>
                        <div>Real Value - {g3.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }

            <Plot

              data={[
                {
                  x: g3.date,
                  y: g3.prediction,
                  type: 'scatter',
                  mode: 'markers+lines',

                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g3.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g3.label,
                  marker: { color: 'fdb833' },
                  showlegend: false,
                },

                {
                  x: g3.date,
                  y: g3y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g3.date,
                  y: g3y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g3.date,
                  y: g3.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g3.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  marker: { color: '#143601', size: 4 },
                  showlegend: true,
                  name: "prediction",
                },

                // {
                //   x: g3.date,
                //   y: g3mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name: "mean", marker: {
                //     size: 1,
                //   }
                // },

                {
                  x: [g3.qry_date],
                  y: [g3.user_qry],
                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7,
                  },
                  name: 'user query',
                }

              ]}

              config={{
                responsive: true,
              }}

              layout={{
                autosize: false,
                width: 600,
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

            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g3.pred_err}%</small>
            <small className='mb-1 p-0 secondary'>deviation from historical prediction : {g3.mean_err}%</small> */}

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g3.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g3.mean_err}%
              </div>
            </div>
          </div>

          <div className="graph graph4 leftgraph" id='graph4'>

            {
              g4.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g4.notification_data["predicted value"]}</div>
                        <div>Real Value - {g4.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }


            <Plot

              data={[
                {
                  x: g4.date,
                  y: g4.prediction,
                  type: 'scatter',
                  mode: 'markers+lines',

                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g4.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g4.label,
                  marker: { color: 'fdb833' },
                  showlegend: false,
                },

                {
                  x: g4.date,
                  y: g4y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g4.date,
                  y: g4y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g4.date,
                  y: g4.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g4.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  marker: { color: '#143601', size: 4 },
                  showlegend: true,
                  name: "prediction",
                },

                // {
                //   x: g4.date,
                //   y: g4mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name: "mean", marker: {
                //     size: 1,
                //   }
                // },

                {
                  x: [g4.qry_date],
                  y: [g4.user_qry],
                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7,
                  },
                  name: 'user query',
                }

              ]}

              config={{
                responsive: true,
              }}

              layout={{
                autosize: false,
                width: 600,
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

            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g4.pred_err}%</small>
            <small className='mb-1 p-0 secondary'>deviation from historical prediction : {g4.mean_err}%</small> */}

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g4.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g4.mean_err}%
              </div>
            </div>

          </div>

          <div className="graph graph5 leftgraph" id='graph5'>

            {
              g5.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g5.notification_data["predicted value"]}</div>
                        <div>Real Value - {g5.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }

            <Plot

              data={[
                {
                  x: g5.date,
                  y: g5.prediction,
                  type: 'scatter',
                  mode: 'markers',

                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g5.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g5.label,
                  marker: { color: 'fdb833' },
                  showlegend: false,
                },

                {
                  x: g5.date,
                  y: g5y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g5.date,
                  y: g5y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g5.date,
                  y: g5.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g5.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  marker: { color: '#143601', size: 4 },
                  showlegend: true,
                  name: "prediction",
                },

                // {
                //   x: g5.date,
                //   y: g5mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name: "mean", marker: {
                //     size: 1,
                //   }
                // },

                {
                  x: [g5.qry_date],
                  y: [g5.user_qry],
                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7,
                  },
                  name: 'user query',
                }

              ]}

              config={{
                responsive: true,
              }}

              layout={{
                autosize: false,
                width: 600,
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
            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g5.pred_err}%</small>
            <small className='mb-1 p-0 secondary'>deviation from historical prediction : {g5.mean_err}%</small> */}

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g5.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g5.mean_err}%
              </div>
            </div>
          </div>

          <div className="graph graph6 leftgraph" id='graph6'>

            {
              g6.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g6.notification_data["predicted value"]}</div>
                        <div>Real Value - {g6.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }

            <Plot

              data={[
                {
                  x: g6.date,
                  y: g6.prediction,
                  type: 'scatter',
                  mode: 'markers+lines',

                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g6.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g6.label,
                  marker: { color: 'fdb833' },
                  showlegend: false,
                },

                {
                  x: g6.date,
                  y: g6y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g6.date,
                  y: g6y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g6.date,
                  y: g6.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g6.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  marker: { color: '#143601', size: 4 },
                  showlegend: true,
                  name: "prediction",
                },

                // {
                //   x: g6.date,
                //   y: g6mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name: "mean", marker: {
                //     size: 1,
                //   }
                // },

                {
                  x: [g6.qry_date],
                  y: [g6.user_qry],
                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7,
                  },
                  name: 'user query',
                }

              ]}

              config={{
                responsive: true,
              }}

              layout={{
                autosize: false,
                width: 600,
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
            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g6.pred_err}%</small>
            <small className='mb-1 p-0 secondary'>deviation from historical prediction : {g6.mean_err}%</small> */}

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g6.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g6.mean_err}%
              </div>
            </div>
          </div>

          <div className="graph graph7 leftgraph" id='graph7'>

            {
              g7.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g7.notification_data["predicted value"]}</div>
                        <div>Real Value - {g7.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }

            <Plot

              data={[
                {
                  x: g7.date,
                  y: g7.prediction,
                  type: 'scatter',
                  mode: 'markers+lines',

                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g7.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g7.label,
                  marker: { color: 'fdb833' },
                  showlegend: false,
                },

                {
                  x: g7.date,
                  y: g7y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g7.date,
                  y: g7y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g7.date,
                  y: g7.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g7.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  marker: { color: '#143601', size: 4 },
                  showlegend: true,
                  name: "prediction",
                },

                // {
                //   x: g7.date,
                //   y: g7mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name: "mean", marker: {
                //     size: 1,
                //   }
                // },

                {
                  x: [g7.qry_date],
                  y: [g7.user_qry],
                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7,
                  },
                  name: 'user query',
                }

              ]}

              config={{
                responsive: true,
              }}

              layout={{
                autosize: false,
                width: 600,
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
            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g7.pred_err}%</small>
            <small className='mb-1 p-0 secondary'>deviation from historical prediction : {g7.mean_err}%</small> */}

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g7.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g7.mean_err}%
              </div>
            </div>

          </div>

          <div className="graph graph8 leftgraph" id='graph8'>

            {
              g8.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g8.notification_data["predicted value"]}</div>
                        <div>Real Value - {g8.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }

            <Plot

              data={[
                {
                  x: g8.date,
                  y: g8.prediction,
                  type: 'scatter',
                  mode: 'markers+lines',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g8.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g8.label,
                  marker: { color: 'fdb833', size: 3 },
                  showlegend: false,
                },

                {
                  x: g8.date,
                  y: g8y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g8.date,
                  y: g8y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g8.date,
                  y: g8.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g8.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  marker: { color: '#143601', size: 4 },
                  showlegend: true,
                  name: "prediction",
                },

                // {
                //   x: g8.date,
                //   y: g8mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name: "mean", marker: {
                //     size: 1,
                //   }
                // },

                {
                  x: [g8.qry_date],
                  y: [g8.user_qry],
                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7,
                  },
                  name: 'user query',
                }

              ]}

              config={{
                responsive: true,
              }}

              layout={{
                autosize: false,
                width: 600,
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
            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g8.pred_err}</small>
            <small className='mb-1 p-0 secondary'>deviation from historical prediction : {g8.mean_err}%</small> */}

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g8.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g8.mean_err}%
              </div>
            </div>

          </div>

          <div className="graph graph9 leftgraph" id='graph9'>

            {
              g9.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g9.notification_data["predicted value"]}</div>
                        <div>Real Value - {g9.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }

            <Plot

              data={[
                {
                  x: g9.date,
                  y: g9.prediction,
                  type: 'scatter',
                  mode: 'markers+lines',

                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g9.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g9.label,
                  marker: { color: 'fdb833' },
                  showlegend: false,
                },

                {
                  x: g9.date,
                  y: g9y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g9.date,
                  y: g9y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g9.date,
                  y: g9.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g9.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  showlegend: true,
                  name: "prediction",
                  marker: { color: '#143601', size: 4 },

                },

                // {
                //   x: g9.date,
                //   y: g9mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name: 'mean',
                //   marker: {
                //     size: 1,
                //   }
                // },

                {
                  x: [g9.qry_date],
                  y: [g9.user_qry],
                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7,
                  },
                  name: 'user query',
                }

              ]}

              config={{
                responsive: true,
              }}

              layout={{
                autosize: false,
                width: 600,
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
            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g9.pred_err}%</small>
            <small className='mb-1 p-0 secondary'>deviation from historical prediction : {g9.mean_err}%</small> */}

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g9.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g9.mean_err}%
              </div>
            </div>
          </div>


          <div className="graph graph10 leftgraph" id='graph10'>

            {
              g10.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g10.notification_data["predicted value"]}</div>
                        <div>Real Value - {g10.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }

            <Plot

              data={[
                {
                  x: g10.date,
                  y: g10.prediction,
                  type: 'scatter',
                  mode: 'markers+lines',

                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g10.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g10.label,
                  marker: { color: 'fdb833' },
                  showlegend: false,
                },

                {
                  x: g10.date,
                  y: g10y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g10.date,
                  y: g10y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g10.date,
                  y: g10.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g10.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  showlegend: true,
                  name: 'prediction',
                  marker: { color: '#143601', size: 4 },

                },

                // {
                //   x: g10.date,
                //   y: g10mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name: 'mean',
                //   marker: {
                //     size: 1,
                //   }
                // },

                {
                  x: [g10.qry_date],
                  y: [g10.user_qry],
                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7,
                  },
                  name: 'user query',
                },


              ]}

              config={{
                responsive: true,
              }}

              layout={{
                autosize: false,
                width: 600,
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
            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g10.pred_err}%</small>
            <small className='mb-1 p-0 secondary'>deviation from historical prediction : {g10.mean_err}%</small> */}

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g10.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g10.mean_err}%
              </div>
            </div>

          </div>



          <p className='indep_info'>Independent Graph</p>

        </div>

        {/* <div className="ranger mb-2">
          <div className='date'>
            <div className="fromRes me-3">
              <p className='me-3'>From</p>
              <DatePicker value={fromDate} onChange={changeFromDate} format='dd-MM-y' yearPlaceholder='yyyy' monthPlaceholder='mm' dayPlaceholder='dd' />
            </div>

            <div className="fromRes ">
              <p className='me-3'>To</p>
              <DatePicker value={toDate} onChange={changeToDate} format='dd-MM-y' yearPlaceholder='yyyy' monthPlaceholder='mm' dayPlaceholder='dd' />
            </div>
          </div>
        </div> */}

        <div className="graph_right">

          <div className="graph graph11 rightgraph" id='graph11'>

            {
              g11.notification ?

                <div className="bellIcon">
                  <div className="tooltip">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>

                    <div className="notification tooltiptext">
                      <div className="notification_text">
                        {/* <p>{g9.notification_data.name}</p> */}
                        <div>Predicted Value - {g11.notification_data["predicted value"]}</div>
                        <div>Real Value - {g11.notification_data["real value"]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                : null
            }


            <Plot

              data={[


                {
                  x: g11.date,
                  y: g11.prediction,
                  type: 'scatter',
                  // mode: 'markers+lines',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 1,
                    width: 0,
                    type: 'constant',
                    value: g11.error,
                    visible: false,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  name: g11.label,
                  marker: { color: 'fdb833' },
                  showlegend: false,
                },


                {
                  x: g11.date,
                  y: g11y1Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                {
                  x: g11.date,
                  y: g11y2Error,
                  mode: 'none',
                  fill: 'tonexty',
                  fillcolor: '#b2ff9e',
                  showlegend: false,
                },

                // {
                //   x: g11.date,
                //   y: g11mean,
                //   line: {
                //     color: 'black',
                //     width: 2
                //   },
                //   error_y: {
                //     color: '#b2ff9e',
                //     thickness: 1,
                //     width: 0,
                //     type: 'constant',
                //     value: 80,
                //     visible: false,
                //   },
                //   showlegend: true,
                //   name: 'mean',
                //   marker: {
                //     size: 1,
                //   }
                // },




                {
                  x: g11.date,
                  y: g11.prediction,
                  type: 'scatter',
                  mode: 'markers',
                  error_y: {
                    color: '#b2ff9e',
                    thickness: 0,
                    width: 0,
                    type: 'constant',
                    value: g11.error,
                    visible: true,
                  },
                  line: {
                    color: '#143601',
                    width: 2
                  },
                  marker: {
                    color: '#143601',
                    size: 4
                  },
                  showlegend: true,
                  name: 'prediction',

                },

                {
                  x: [g11.qry_date],
                  y: [g11.user_qry],

                  type: 'scatter',
                  mode: 'markers',
                  marker: {
                    color: 'd80032',
                    symbol: 'diamond',
                    size: 7,
                  },
                  name: 'user query',
                },



              ]}

              config={{
                responsive: true,
              }}

              layout={{
                autosize: false,
                width: 600,
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
            {/* <small className='mt-1 p-0 secondary'>deviation from model' prediction : {g11.pred_err}% </small>
            <small className='mb-1 p-0 secondary'>deviation from historical mean :  {g11.mean_err}% </small> */}

            <div className="graph_info">
              <div>
                deviation from model' prediction : {g11.pred_err}%
              </div>

              <div>
                deviation from historical mean : {g11.mean_err}%
              </div>
            </div>

          </div>

          <p className='dep_info'>Dependent Graph</p>

        </div>

      </div>


      <div className="map_container">
        <Map
          g12={g12} setG12={setG12}
        />
      </div>

      <Sidenav
        g1={g1.label}
        g2={g2.label}
        g3={g3.label}
        g4={g4.label}
        g5={g5.label}
        g6={g6.label}
        g7={g7.label}
        g8={g8.label}
        g9={g9.label}
        g10={g10.label}

        g1Flag={g1.notification}
        g2Flag={g2.notification}
        g3Flag={g3.notification}
        g4Flag={g4.notification}
        g5Flag={g5.notification}
        g6Flag={g6.notification}
        g7Flag={g7.notification}
        g8Flag={g8.notification}
        g9Flag={g9.notification}
        g10Flag={g10.notification}


      />


    </div>
  )
}

export default Result