import { useState } from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


function TableRows({ rowsData, deleteTableRows, handleChange, options,
     dependentVariables, setDependentVariables, independentVariables, setIndependentVariables,
      frequency, setFrequency, changeVariable,  }) {

    // const [independentVariables, setIndependentVariables] = useState([]);
    // const [dependentVariables, setDependentVariables] = useState([]);

    return (

 
        rowsData.map((data, index) => {
            const { alertName,
                dependent, independent, days } = data;
            return (

                <tr key={index}>
                    <td>
                        <input type="text" value={alertName} onChange={(evnt) => (handleChange(index, evnt))} name="alertName" className="form-control" />
                    </td>

                    {/* <td><input type="text" value={independentVariables}  onChange={(evnt)=>(handleChange(index, evnt))} name="independent" className="form-control"/> </td> */}
                    <td>
                        <Select
                            closeMenuOnSelect={true}
                            components={animatedComponents}
                            defaultValue={independent}
                            placeholder="Select variables"
                            isMulti
                            options={options} 
                            noOptionsMessage={() => "No options"}
                            onChange={
                                (value) => {
                                    setIndependentVariables(value)
                                }
                            }
                            name="independent"
                        />
                    </td>

                    {/* <td><input type="text" value={dependentVariables}  onChange={(evnt)=>(handleChange(index, evnt))} name="dependent" className="form-control" /> </td> */}
                    <td>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            closeMenuOnSelect={true}
                            components={animatedComponents}
                            defaultValue={dependent}
                            placeholder="Select variable"
                            // isMulti
                            options={options}
                            noOptionsMessage={() => "No options"}
                            onChange={
                                (value) => {
                                    setDependentVariables(value)
                                }
                            }
                            name="dependent"
                        />
                    </td>

                    <td>
                        <input value={days} onChange={(evnt) => (handleChange(index, evnt))} style={{ "width": "60px" }} className='form-control' placeholder="days" name='days' />
                    </td>


                    <td><button className="btn btn-outline-danger" onClick={() => (deleteTableRows(index))}>x</button></td>
                </tr>

            )
        })

    )

}

export default TableRows;