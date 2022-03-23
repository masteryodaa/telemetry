import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';

const animatedComponents = makeAnimated();

function Selector(props) {


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'red', label: 'red' },
        { value: 'blue', label: 'blue' },
        { value: 'green', label: 'green' }
    ]


    const [independentVariables, setIndependentVariables] = useState([]);
    const [dependentVariables, setDependentVariables] = useState([]);

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [inputDate, setInputDate] = useState(new Date());

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

        console.log('sending data');
        console.log(independentVariables);
        console.log(dependentVariables);
        console.log('from ', fromDate);
        console.log('to ', toDate);
        console.log('inputDate ', inputDate);

        const formdata = new FormData();
        formdata.append('independentVariables', independentVariables);
        formdata.append('dependentVariables', dependentVariables);
        formdata.append('fromDate', fromDate);
        formdata.append('toDate', toDate);
        formdata.append('inputDate', inputDate);

        fetch('http://127.0.0.1:5000/', {
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
                    props.setData(data);
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
                    // defaultValue={[options[4], options[5]]}
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
                    // defaultValue={[options[4], options[5]]}
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

                        // sendData
                        () => {console.log('sending data');}
                    }>
                        Process
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Selector