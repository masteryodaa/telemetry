// import icon from './logo.png';
import tree from './tree.png';
import { Link } from 'react-router-dom';
// import {FcSettings} from 'react-icons/fc';
import config from './config.png';

function Navbar() {
    return (

        <header className='px-2 py-1 sticky-top'>
            <div className="logo-right">
                <Link to='/' >
                    {/* <img id='navLogo' src={icon} alt="logo" width='200px'
                     onClick={() => { 
                         
                      }}
                    /> */}

                    <div className="tree ">
                        <img src={tree} alt="tree" width='50px' height='50px' />
                    </div>
                </Link>
            </div>


            <div className="title">
                {/* <p id='title'>Telemetry.AI</p> */}
                <h4 className="aiTitle" disabled>Telemetry Alert System</h4>

            </div>

            <div className="logo-left">
                {/* <div className="tree ">
                    <img src={tree} alt="tree" width='50px' height='50px' />
                </div> */}

                <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <img src={config} alt="config" width='30px' height='30px' style={{'cursor':'pointer'}} />
                </div>
            </div>




        </header>

    )
}

export default Navbar