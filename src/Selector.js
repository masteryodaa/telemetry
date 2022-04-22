import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';


// import TableModal from './TableModal';

// import Row from './Row';
import TableRows from './TableRows';


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




    const [independentVariables, setIndependentVariables] = useState([options[1]]);
    const [dependentVariables, setDependentVariables] = useState([options[0]]);

    const [fromDate, setFromDate] = useState(new Date('2021/04/25'));
    const [toDate, setToDate] = useState(new Date('2021/05/25'));
    const [inputDate, setInputDate] = useState(new Date('2021/05/06'));

    const changeFromDate = (date) => {
        setFromDate(date)
    }

    const changeToDate = (date) => {
        setToDate(date)
    }

    const changeInputDate = (date) => {
        setInputDate(date)
    }


    const [rowsData, setRowsData] = useState([{
        alertName: 'Alert 1',
        dependent: dependentVariables,
        independent: independentVariables,
        days: '50'
    }]);

    let alertOptions = [
        {
            value: {
                alertName: 'Alert 1',
                dependent: [options[2]],
                independent: [options[0], options[1], options[2]],
                days: 100
            }, label: 'Alert 1'
        }
    ];

    const [alert, setAlert] = useState([]);

    const addTableRows = () => {

        // setIndependentVariables([]);
        // setDependentVariables([]);

        const rowsInput = {
            alertName: '',
            dependent: [],
            independent: [],
            days: ''
        }
        rowsInput['dependent'] = dependentVariables;
        rowsInput['independent'] = independentVariables;
        setRowsData([...rowsData, rowsInput])

        setIndependentVariables([]);
        setDependentVariables([]);

    }
    const deleteTableRows = (index) => {
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
    }

    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        // rowsInput.dependent=dependentVariables;
        // rowsInput.independent=independentVariables;
        rowsInput['dependent'] = dependentVariables;
        rowsInput['independent'] = independentVariables;
        setRowsData(rowsInput);

    }



    const addRow = () => {
        let row = [...rowsData];
        console.log('row', row);
        
        row.forEach(element => {
            if (element.alertName === row.alertName) {
                row.splice(row.indexOf(element), 1);

                   alertOptions.push({
                    value: {
                        alertName: element.alertName,
                        dependent: dependentVariables,
                        independent: independentVariables,
                        days: element.days
                    },
                    label: element.alertName
                })
            }
        });
    }

    const saveconfig = () => {
        let row = [...rowsData];
        row.forEach(element => {
            alertOptions.push({
               value: {
                     alertName: element.alertName,
                        dependent: element.dependent,
                        independent: element.independent,
                        days: element.days
               },
                label: element.alertName
            })
        });


        // console.log('row', row);
        console.log('alertOptions', alertOptions)
    }

    const sendData = () => {

        console.log('alert', alert);
        console.log('vesselname', vessel);

        props.setFailed(false);
        props.setLoaded(false);

        const data = {
            'vessel': vessel,
            'fromDate': fromDate,
            'toDate': toDate,
            'inputDate': inputDate,
            'alert': alert
        }

        let independentArray = [];
        let dependentArray = [];

        rowsData.forEach(element => {
            independentArray.push(element.independent.map(item => item.value));
            dependentArray.push(element.dependent.map(item => item.value));
        });


        fetch(  
            // 'http://127.0.0.1:5000/',
            // 'http://127.0.0.1:3001/',
            'https://telemetry-api.herokuapp.com/',

            {
                method: 'POST',
                body: JSON.stringify(data),
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
                    props.setG12(data[Object.keys(data)[11]]);

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
                    // defaultValue={[alertOptions[0]]}
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
                            console.log(alert); 
                        }

                    }>
                        Process
                    </div>
                </Link>
            </div>




            {/* Modal Popup */}

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title text-center" style={{ "margin": "auto" }}>Alert configuration </h5>
                            <button onClick={saveconfig} type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body p-0 py-2">


                            <div className="container d-flex flex-column align-items-center" >
                                <div className="row" style={{ 'marginBottom': '140px' }}>
                                    <div className="">

                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th><button className="btn btn-outline-success" onClick={
                                                        addTableRows}
                                                    >+</button></th>
                                                    <th>Alert Name</th>
                                                    <th>Independent variable</th>
                                                    <th>Dependent variable</th>
                                                    <th>Frequency</th>
                                                    <th>Save</th>
                                                </tr>

                                            </thead>
                                            <tbody>

                                                <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} options={options}
                                                    dependentVariables={dependentVariables} setDependentVariables={setDependentVariables} independentVariables={independentVariables} setIndependentVariables={setIndependentVariables}
                                                    addRow={addRow}
                                                />

                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="col-sm-4">

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Selector