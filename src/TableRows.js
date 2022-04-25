// import { useState } from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


function TableRows({ rowsData, deleteTableRows, handleChange, options,
    dependentVariables, setDependentVariables, independentVariables, setIndependentVariables,
    addRow, independentArray, dependentArray }) {


    return (


        rowsData.map((data, index) => {
            const { alertName,
                // dependent, independent,
                 days } = data;
            return (

                <tr key={index}>
                    <td><button className="btn btn-outline-danger" onClick={() => (deleteTableRows(index))}>x</button></td>

                    <td>
                        <input type="text" value={alertName} onChange={(evnt) => (handleChange(index, evnt))} name="alertName" className="form-control" style={{ 'width': '150px' }} />
                    </td>

                    {/* <td><input type="text" value={independentVariables}  onChange={(evnt)=>(handleChange(index, evnt))} name="independent" className="form-control"/> </td> */}
                    <td>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            // defaultValue={independent}
                            placeholder="Select variables"
                            isMulti
                            options={options}
                            noOptionsMessage={() => "No options"}
                            // value={independent}
                            onChange={
                                setIndependentVariables
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
                            // defaultValue={dependent}
                            placeholder="Select variable"
                            // isMulti
                            options={options}
                            noOptionsMessage={() => "No options"}
                            // value={dependent}
                            onChange={
                                setDependentVariables
                            }
                            name="dependent"
                        />
                    </td>

                    <td>
                        <input value={days} onChange={(evnt) => (handleChange(index, evnt))} style={{ "width": "60px" }} className='form-control' placeholder="min." name='days' />
                    </td>

                    <td><button className="btn btn-outline-danger" onClick={() =>{ addRow(); }}>Save</button></td>


                </tr>

            )
        })

    )

}

export default TableRows;