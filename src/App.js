import {useState} from 'react';
import Body from './Body';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from './Result';
import Loading from './Loading';

function App() {

  // const [data, setData] = useState([
    
  // ]);

  const [g1, setG1] = useState([]);
  const [g2, setG2] = useState([]);
  const [g3, setG3] = useState([]);
  const [g4, setG4] = useState([]);
  const [g5, setG5] = useState([]);
  const [g6, setG6] = useState([]);
  const [g7, setG7] = useState([]);
  const [g8, setG8] = useState([]);
  const [g9, setG9] = useState([]);
  const [g10, setG10] = useState([]);
  const [g11, setG11] = useState([]);

  

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="App">

      <Router>

        <Navbar />
        {/* <p className="telemetry h1 mt-4 text-center">
          Telemetry.AI
        </p> */}

        <Routes>
          <Route path="/" element={<Body loaded={loaded} setLoaded={setLoaded}

            // g1={g1} setG1={(x)=>setG1(x)}
            // g2={g2} setG2={(x)=>setG2(x)}
            // g3={g3} setG3={(x)=>setG3(x)}
            // g4={g4} setG4={(x)=>setG4(x)}
            // g5={g5} setG5={(x)=>setG5(x)}
            // g6={g6} setG6={(x)=>setG6(x)}
            // g7={g7} setG7={(x)=>setG7(x)}
            // g8={g8} setG8={(x)=>setG8(x)}
            // g9={g9} setG9={(x)=>setG9(x)}
            // g10={g10} setG10={(x)=>setG10(x)}
            // g11={g11} setG11={(x)=>setG11(x)}

          />}></Route>
          {
            loaded ?
            <Route path="/result" element={<Result 
              
              // g1={g1}
              // g2={g2}
              // g3={g3}
              // g4={g4}
              // g5={g5}
              // g6={g6}
              // g7={g7}
              // g8={g8}
              // g9={g9}
              // g10={g10}
              // g11={g11}

              />}></Route>
            :
            <Route path="/result" element={<Loading />}></Route>
          }
        </Routes>

      </Router>

    </div>
  );
}

export default App;
