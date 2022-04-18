import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


function TableModal() {


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

	const insertNewRow = () => {

		document.getElementById('table-body').insertRow(-1);
	}


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
						<th scope="col">Vessel Name</th>
						<th scope="col">Independent Variable</th>
						<th scope="col">Dependent Variable</th>
						<th scope="col">Frequency</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td><input type="text" placeholder='type here' /></td>
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


						<td><input type="text" placeholder='...' /></td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td><input type="text" placeholder='type here' /></td>
						<td><input type="text" placeholder='...' /></td>
						<td><input type="text" placeholder='...' /></td>
						<td><input type="text" placeholder='...' /></td>
					</tr>
				<button onClick={insertNewRow} type="button" class="btn btn-outline-secondary mt-2">Add</button>
				</tbody>

				
			</table>


			<div className="button text-white text-center m-0 ">configure</div>


		</div>
	)
}

export default TableModal