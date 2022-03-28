import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';

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


    const [independentVariables, setIndependentVariables] = useState([]);
    const [dependentVariables, setDependentVariables] = useState([]);

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



    const sendData = () => {

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
            'http://127.0.0.1:3001/',
            {
                method: 'POST',
                body: formdata,
            })

            .then(
                (response) => {
                    console.log(response);
                    return response.json();
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

    }

    return (



        <div className="select container">
            <div className="variables">
                <p className='m-0 mb-2'>Independent variables</p>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    // defaultValue={[options[0]]} 
                    placeholder="Select variables"
                    isMulti
                    options={options}
                    noOptionsMessage={() => "No options"}
                    onChange={setIndependentVariables}
                />
            </div>

            <div className="variables my-4">
                <p className='m-0 mb-2'>Dependent variables</p>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    // defaultValue={[options[1]]}
                    placeholder="Select variables"
                    isMulti
                    options={options}
                    noOptionsMessage={() => "No options"}
                    onChange={setDependentVariables}
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

        </div>
    )
}

export default Selector