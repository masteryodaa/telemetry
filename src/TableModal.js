// import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


function TableModal({
	options, independentVariables1, dependentVariables1, independentVariables2, dependentVariables2, independentVariables3, dependentVariables3,
	setIndependentVariables1, setDependentVariables1, setIndependentVariables2, setDependentVariables2, setIndependentVariables3, setDependentVariables3,
	frequency1, setFrequency1, frequency2, setFrequency2, frequency3, setFrequency3,
	alertName1, setAlertName1, alertName2, setAlertName2, alertName3, setAlertName3,
}) {


	return (
		<div style={{
			'display': 'flex',
			'flexDirection': 'column',
			'justifyContent': 'center',
			'alignItems': 'center',
		}}>


			<table class="table table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col-2">Vessel Name</th>
						<th scope="col-4">Independent Variable</th>
						<th scope="col-4">Dependent Variable</th>
						<th scope="col">Frequency</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td><input type="text" placeholder='type here' value={alertName1} onChange={(e)=>setAlertName1(e.target.value)}  /></td>
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
								onChange={setIndependentVariables1}
							/>
						</td>

						<td>
							<Select
								closeMenuOnSelect={false}
								components={animatedComponents}
								// defaultValue={[options[1]]}
								placeholder="Select variable"
								isMulti
								options={options}
								noOptionsMessage={() => "No options"}
								onChange={setDependentVariables1}
							/>
						</td>


						<td><input value={frequency1} onChange={(e) => { setFrequency1(e.target.value) }} type="text" placeholder='...' /></td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td><input type="text" placeholder='type here' value={alertName2} onChange={(e)=>setAlertName2(e.target.value)} /></td>
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
								onChange={setIndependentVariables2}
							/>
						</td>

						<td>
							<Select
								closeMenuOnSelect={false}
								components={animatedComponents}
								// defaultValue={[options[1]]}
								placeholder="Select variable"
								isMulti
								options={options}
								noOptionsMessage={() => "No options"}
								onChange={setDependentVariables2}
							/>
						</td>


						<td><input value={frequency2} onChange={(e) => { setFrequency2(e.target.value) }} type="text" placeholder='...' /></td>
					</tr>

					<tr>
						<th scope="row">1</th>
						<td><input type="text" placeholder='type here' value={alertName3} onChange={(e)=>setAlertName3(e.target.value)}  /></td>
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
								onChange={setIndependentVariables3}
							/>
						</td>

						<td>
							<Select
								closeMenuOnSelect={false}
								components={animatedComponents}
								// defaultValue={[options[1]]}
								placeholder="Select variable"
								isMulti
								options={options}
								noOptionsMessage={() => "No options"}
								onChange={setDependentVariables3}
							/>
						</td>


						<td><input value={frequency3} onChange={(e) => { setFrequency3(e.target.value) }} type="text" placeholder='...' /></td>
					</tr>

				</tbody>


			</table>

		</div>
	)
}

export default TableModal