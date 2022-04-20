import React from 'react'
import { TextField } from '@material-ui/core';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

function NewModal({
    options, independentVariables1, dependentVariables1, independentVariables2, dependentVariables2, independentVariables3, dependentVariables3,
	setIndependentVariables1, setDependentVariables1, setIndependentVariables2, setDependentVariables2, setIndependentVariables3, setDependentVariables3,
}) {
    return (
        <div>


            <div className="tableHead">
                <p>Alert Name</p>
                <p>Independent Variable</p>
                <p>Dependent Variable</p>
                <p>Frequency</p>
            </div>

            <div className="tableRow">
                <TextField id="standard-basic" size="small"
                    label="Alert Name" variant="standard" />


                <Select
                    // className="basic-single"
                    // classNamePrefix="select"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    // defaultValue={[options[0]]} 
                    placeholder="Select variables"
                    isMulti
                    options={options}
                    noOptionsMessage={() => "No options"}
                    onChange={setIndependentVariables3}
                /> 


                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    // defaultValue={[options[1]]}
                    placeholder="Select variable"
                    isMulti
                    options={options}
                    noOptionsMessage={() => "No options"}
                    onChange={setDependentVariables3}
                />




                <TextField className='frequencyInput' id="standard-basic" size="small"
                    label="Frequency" variant="standard" />
            </div>


        </div>
    )
}

export default NewModal