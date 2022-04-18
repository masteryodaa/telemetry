import { useState } from "react"
import TableRows from "./TableRows"
function AddDeleteTableRows(){


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

    const [frequency,setFrequency] = useState(0);

    const [rowsData, setRowsData] = useState([{
        vesselName:'',
        dependent:'',
        independent:'',
        frequency:''  
    }]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            vesselName:'',
            dependent:'',
            independent:'',
            frequency:''  
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  
 
 
}
    return(
        <div className="container d-flex flex-column align-items-center">
            <div className="row">
                <div className="">

                <table className="table">
                    <thead>
                      <tr>
                          <th>Vessel Name</th>
                          <th>Independent variable</th>
                          <th>Dependent variable</th>
                          <th>Frequency</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} options={options} 
                   dependentVariables={dependentVariables} setDependentVariables={setDependentVariables} independentVariables={independentVariables} setIndependentVariables={setIndependentVariables} frequency={frequency} setFrequency={setFrequency}
                   />

                   </tbody> 
                </table>

                </div>
                <div className="col-sm-4">

                </div>
            </div>

            <div className="button text-white text-center">process</div>
        </div>
    )

}
export default AddDeleteTableRows