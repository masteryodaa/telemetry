import {useState} from 'react';
import Body from './Body';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from './Result';

function App() {

  const [data, setData] = useState([
    [{}],
  ]);

  return (
    <div className="App">

      <Router>

        <Navbar />
        <p className="telemetry h1 mt-4 text-center">
          Telemetry.AI
        </p>

        <Routes>
          <Route path="/" element={<Body setData={(x)=>setData(x)} />}></Route>
          <Route path="/result" element={<Result data={data} />}></Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
