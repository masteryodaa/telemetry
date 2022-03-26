import icon from './logo.png';
import tree from './tree.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <header className='px-2 py-1 sticky-top'>
            <div className="logo-right">
                <Link to='/' >
                    <img id='navLogo' src={icon} alt="logo" width='200px'
                     onClick={() => { 
                         
                      }}
                    />
                </Link>
            </div>


            <div className="title">
                {/* <p id='title'>Telemetry.AI</p> */}
                <button type="button" className="btn btn-outline-primary aiTitle" disabled>Telemetry.AI</button>

            </div>

            <div className="logo-left">
                <div className="tree ">
                    <img src={tree} alt="tree" width='50px' height='50px' />
                </div>
            </div>



           
        </header>

    )
}

export default Navbar