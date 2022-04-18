import React from 'react'

function TableModal() {
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
						<td><input type="text" placeholder='type here'/></td>
						<td><input type="text" placeholder='...' /></td>
						<td><input type="text" placeholder='...' /></td>
						<td><input type="text" placeholder='...' /></td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td><input type="text" placeholder='type here' /></td>
						<td><input type="text" placeholder='...' /></td>
						<td><input type="text" placeholder='...' /></td>
						<td><input type="text" placeholder='...' /></td>
					</tr>
				</tbody>
			</table>


			<div className="button text-white text-center m-0 ">configure</div>


		</div>
	)
}

export default TableModal