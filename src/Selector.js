import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';


import TableModal from './TableModal';

const animatedComponents = makeAnimated();

function Selector(props) {


    const options = [
        { value: 'ME Torque (Avg.)', label: 'ME Torque (Avg.)' },
        { value: 'ME Speed (Avg.)', label: 'ME Speed (Avg.)' },
        { value: 'ME Mass FO Flow Rate (Avg.)', label: 'ME Mass FO Flow Rate (Avg.)' },
        { value: 'True Wind Speed at Anemometer Height (Avg.)', label: 'True Wind Speed at Anemometer Height (Avg.)' },
        { value: 'True Wind Direction at Anemometer Height (Avg.)', label: 'True Wind Direction at Anemometer Height (Avg.)' },
        { value: 'Speed Through Water (Avg.)', label: 'Speed Through Water (Avg.)' },
        { value: 'Rate of turn (Avg.)', label: 'Rate of turn (Avg.)' },
        { value: 'Sea Water Depth (Avg.)', label: 'Sea Water Depth (Avg.)' },
        { value: 'Relative Wind Speed at Anemometer Height (Avg.)', label: 'Relative Wind Speed at Anemometer Height (Avg.)' },
        { value: 'Relative Wind Direction at Anemometer Height (Avg.)', label: 'Relative Wind Direction at Anemometer Height (Avg.)' },
        { value: 'ME Shaft Power (Avg.)', label: 'ME Shaft Power (Avg.)' }
    ]

    const vesselNames = [
        { value: 'HANNAH_SCHULTE', label: 'HANNAH SCHULTE' },
        { value: 'MAX_SCHULTE', label: 'MAX SCHULTE' },
        { value: 'MAJESTIC', label: 'MAJESTIC' },
        { value: 'FRIEDRICH_SCHULTE', label: 'FRIEDRICH SCHULTE' },
        { value: 'LUDWIG_SCHULTE', label: 'LUDWIG SCHULTE' },
        { value: 'MIMMI_SCHULTE', label: 'MIMMI SCHULTE' },
        { value: 'GOTTFRIED_SCHULTE', label: 'GOTTFRIED SCHULTE' },
        { value: 'LOUISA_SCHULTE', label: 'LOUISA SCHULTE' },
        { value: 'FLORA_SCHULTE', label: 'FLORA SCHULTE' },
        { value: 'GUENTHER_SCHULTE', label: 'GUENTHER SCHULTE' },
        { value: 'MINERVA', label: 'MINERVA' },
        { value: 'EVERHARD_SCHULTE', label: 'EVERHARD SCHULTE' },
    ]

    const [vessel, setVessel] = useState([]);

    let alertOptions = [];

    const [alert, setAlert] = useState([]);



    const [independentVariables, setIndependentVariables] = useState([]);
    const [dependentVariables, setDependentVariables] = useState([]);

    const [independentVariables1, setIndependentVariables1] = useState([]);
    const [dependentVariables1, setDependentVariables1] = useState([]);

    const [independentVariables2, setIndependentVariables2] = useState([]);
    const [dependentVariables2, setDependentVariables2] = useState([]);

    const [independentVariables3, setIndependentVariables3] = useState([]);
    const [dependentVariables3, setDependentVariables3] = useState([]);

    const [frequency1, setFrequency1] = useState('');
    const [frequency2, setFrequency2] = useState('');
    const [frequency3, setFrequency3] = useState('');

    const [alertName1, setAlertName1] = useState('');
    const [alertName2, setAlertName2] = useState('');
    const [alertName3, setAlertName3] = useState('');

    const [fromDate, setFromDate] = useState(new Date('2021/04/25'));
    const [toDate, setToDate] = useState(new Date('2021/05/25'));
    const [inputDate, setInputDate] = useState(new Date('2021/05/05'));

    const changeFromDate = (date) => {
        setFromDate(date)
    }

    const changeToDate = (date) => {
        setToDate(date)
    }

    const changeInputDate = (date) => {
        setInputDate(date)
    }


        

    const saveconfig = () => {
        // alertOptions.push({
        //    value:{
        //          alertName: row.alertName,
        //             dependent: row.dependent,
        //             independent: row.independent,
        //             days: row.days
        //    },
        //     label: row.alertName
        // })
        
        alertOptions.push({
            value: {
                alertName: alertName1,
                dependent: dependentVariables1,
                independent: independentVariables1,
                days: frequency1
            },
            label: alertName1
        },
        {
            value: {
                alertName: alertName2,
                dependent: dependentVariables2,
                independent: independentVariables2,
                days: frequency2
            },
            label: alertName2
        },
        {
            value: {
                alertName: alertName3,
                dependent: dependentVariables3,
                independent: independentVariables3,
                days: frequency3
            },
            label: alertName3
        }
        )


        console.log(alertOptions)
    }



    const sendData = () => {

        props.setFailed(false);
        props.setLoaded(false);

        // console.log('from ', fromDate);
        // console.log('to ', toDate);
        // console.log('inputDate ', inputDate);

        let independentArray = [];
        let dependentArray = [];

        independentVariables.forEach(element => {
            independentArray.push(element.value);
        });

        dependentVariables.forEach(element => {
            dependentArray.push(element.value);
        });


        const formdata = new FormData();
        formdata.append('Independent_var', independentArray);
        formdata.append('dependent_var', dependentArray);
        formdata.append('date_from', fromDate);
        formdata.append('date_to', toDate);
        formdata.append('date_inp', inputDate);

        fetch(
            // 'http://127.0.0.1:5000/',
            // 'http://127.0.0.1:3001/',
            'https://telemetry-backend.herokuapp.com/',

            {
                method: 'POST',
                body: formdata,
            })

            .then(
                (response) => {

                    if (response.status === 200) {
                        props.setFailed(false);
                        return response.json();
                    }
                    else {
                        console.log('error from server');
                        props.setFailed(true);
                    }

                }
            )

            .then(
                data => {
                    console.log(data);

                    props.setG1(data[Object.keys(data)[0]]);
                    props.setG2(data[Object.keys(data)[1]]);
                    props.setG3(data[Object.keys(data)[2]]);
                    props.setG4(data[Object.keys(data)[3]]);
                    props.setG5(data[Object.keys(data)[4]]);
                    props.setG6(data[Object.keys(data)[5]]);
                    props.setG7(data[Object.keys(data)[6]]);
                    props.setG8(data[Object.keys(data)[7]]);
                    props.setG9(data[Object.keys(data)[8]]);
                    props.setG10(data[Object.keys(data)[9]]);
                    props.setG11(data[Object.keys(data)[10]]);

                    props.setLoaded(true);

                }
            )

            .catch(
                error => {
                    console.log('try again');
                    props.setFailed(true);
                    console.log(props.failed);
                }
            )

    }

    return (



        <div className="select container">
            <div className="variables">
                <p className='m-0 mb-2'>Vessel Name</p>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    // defaultValue={[options[0]]} 
                    placeholder="Select vessel name"
                    // isMulti
                    options={vesselNames}
                    noOptionsMessage={() => "No options"}
                    onChange={setVessel}
                />
            </div>

            <div className="variables my-4">
                <p className='m-0 mb-2'>Alert Name</p>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    // defaultValue={[options[1]]}
                    placeholder="Select alert name"
                    // isMulti
                    options={alertOptions}
                    noOptionsMessage={() => "No options. Make some configs first."}
                    onChange={setAlert}
                />

            </div>

            <div className=" my-3">
                <div className='date'>
                    <div className="from ">
                        <p className='me-3'>From</p>
                        <DatePicker value={fromDate} onChange={changeFromDate} format='dd-MM-y' yearPlaceholder='yyyy' monthPlaceholder='mm' dayPlaceholder='dd' />
                    </div>

                    <div className="to ">
                        <p className='me-3'>To</p>
                        <DatePicker value={toDate} onChange={changeToDate} format='dd-MM-y' yearPlaceholder='yyyy' monthPlaceholder='mm' dayPlaceholder='dd' />
                    </div>
                </div>



                <div className=" input dates mt-5">
                    <p className='me-3'>Input date</p>
                    <DatePicker value={inputDate} onChange={changeInputDate} format='dd-MM-y' yearPlaceholder='yyyy' monthPlaceholder='mm' dayPlaceholder='dd' />
                </div>
            </div>

            <div className='process my-3'>



                <Link to={'/result'}>
                    <div className="button text-center text-white noselect" onClick={

                        () => {
                            console.log('sending data');
                            sendData();
                        }

                    }>
                        Process
                    </div>
                </Link>
            </div>




            {/* Modal Popup */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title">Vessel configuration </h5>
                            <button onClick={saveconfig} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">


                            {/* modal body */}

                            {/* <PopupModal /> */}


                            <TableModal 
                            options={options} independentVariables1={independentVariables1} dependentVariables1={dependentVariables1}
                            independentVariables2={independentVariables2} dependentVariables2={dependentVariables2}
                            independentVariables3={independentVariables3} dependentVariables3={dependentVariables3}
                            setIndependentVariables1={setIndependentVariables1} setDependentVariables1={setDependentVariables1}
                            setIndependentVariables2={setIndependentVariables2} setDependentVariables2={setDependentVariables2}
                            setIndependentVariables3={setIndependentVariables3} setDependentVariables3={setDependentVariables3}
                            alertName1={alertName1} alertName2={alertName2} alertName3={alertName3}
                            setAlertName1={setAlertName1} setAlertName2={setAlertName2} setAlertName3={setAlertName3}
                            frequency1={frequency1} frequency2={frequency2} frequency3={frequency3}
                            setFrequency1={setFrequency1} setFrequency2={setFrequency2} setFrequency3={setFrequency3}
                            alert={alert} vessel={vessel} independentVariables={independentVariables} dependentVariables={dependentVariables} setDependentVariables={setDependentVariables} setIndependentVariables={setIndependentVariables}
                             />



                            {/* <div className="container d-flex flex-column align-items-center">
                                <div className="row">
                                    <div className="">

                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Alert Name</th>
                                                    <th>Independent variable</th>
                                                    <th>Dependent variable</th>
                                                    <th>Frequency</th>
                                                    <th><button className="btn btn-outline-success" onClick={
                                                        addTableRows}
                                                    >+</button></th>
                                                </tr>

                                            </thead>
                                            <tbody>

                                                <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} options={options}
                                                    dependentVariables={dependentVariables} setDependentVariables={setDependentVariables} independentVariables={independentVariables} setIndependentVariables={setIndependentVariables} frequency={frequency} setFrequency={setFrequency}
                                                />

                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="col-sm-4">

                                    </div>
                                </div>

                            </div> */}

                        </div>

                        <div className="modal-footer">

                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Selector