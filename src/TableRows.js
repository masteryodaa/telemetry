import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


function TableRows({ rowsData, deleteTableRows, handleChange, options, dependentVariables, setDependentVariables, independentVariables, setIndependentVariables, frequency, setFrequency }) {


    return (


        rowsData.map((data, index) => {
            const { alertName,
                //  dependent, independent
                 } = data;
            return (

                <tr key={index}>
                    <td>
                        <input type="text" value={alertName} onChange={(evnt) => (handleChange(index, evnt))} name="alertName" className="form-control" />
                    </td>

                    {/* <td><input type="text" value={independentVariables}  onChange={(evnt)=>(handleChange(index, evnt))} name="independent" className="form-control"/> </td> */}
                    <td>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            // defaultValue={[options[0]]} 
                            placeholder="Select variables"
                            isMulti
                            options={options}
                            noOptionsMessage={() => "No options"}
                            onChange={setIndependentVariables}
                        />
                    </td>

                    {/* <td><input type="text" value={dependentVariables}  onChange={(evnt)=>(handleChange(index, evnt))} name="dependent" className="form-control" /> </td> */}
                    <td>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            // defaultValue={[options[1]]}
                            placeholder="Select variable"
                            isMulti
                            options={options}
                            noOptionsMessage={() => "No options"}
                            onChange={setDependentVariables}
                        />
                    </td>

                    <td>
                        <input style={{"width":"60px"}} className='form-control' placeholder="days" />
                    </td>


                    <td><button className="btn btn-outline-danger" onClick={() => (deleteTableRows(index))}>x</button></td>
                </tr>

            )
        })

    )

}

export default TableRows;