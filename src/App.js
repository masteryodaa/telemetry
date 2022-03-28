import { useState } from 'react';
import Body from './Body';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from './Result';
import Loading from './Loading';

function App() {

  

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

        <Routes>
          <Route path="/" element={<Body loaded={loaded} setLoaded={setLoaded}

            g1={g1} setG1={setG1}
            g2={g2} setG2={setG2}
            g3={g3} setG3={setG3}
            g4={g4} setG4={setG4}
            g5={g5} setG5={setG5}
            g6={g6} setG6={setG6}
            g7={g7} setG7={setG7}
            g8={g8} setG8={setG8}
            g9={g9} setG9={setG9}
            g10={g10} setG10={setG10}
            g11={g11} setG11={setG11}

          />}></Route>
          {
            loaded ?
              <Route path="/result" element={<Result

                g1={g1}
                g2={g2}
                g3={g3}
                g4={g4}
                g5={g5}
                g6={g6}
                g7={g7}
                g8={g8}
                g9={g9}
                g10={g10}
                g11={g11}

                setG1={setG1}
                setG2={setG2}
                setG3={setG3}
                setG4={setG4}
                setG5={setG5}
                setG6={setG6}
                setG7={setG7}
                setG8={setG8}
                setG9={setG9}
                setG10={setG10}
                setG11={setG11}

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
