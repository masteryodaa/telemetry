import { useState } from "react"
import TableRows from "./TableRows"

function AddDeleteTableRows(
    { options, alert, setAlert, alertOptions }
){


    const [independentVariables, setIndependentVariables] = useState([]);
    const [dependentVariables, setDependentVariables] = useState([]);

    const [frequency,setFrequency] = useState('');

    const [rowsData, setRowsData] = useState([{
        alertName:'Alert 1',
        dependent:options[0],
        independent:options[1],
        days:'50'  
    }]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            alertName:'',
            dependent:[],
            independent:[],
            days:''  
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
                          <th>Alert Name</th>
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

        </div>
    )

}
export default AddDeleteTableRows