import Selector from './Selector';
import svg from './Spreadsheets-amico.svg';
import Loading from './Loading';
import {useState} from 'react';

function Body(props) {

    const [load, setLoad] = useState(false);
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="body mt-3 ">
            <div className="body-left ">
                <img src={svg} className='img-fluid' alt="logo" width='500px'
                />
                {/* <a href="https://storyset.com/finance">Finance illustrations by Storyset</a> */}
            </div>

            <div className="body-right">
                {/* {load ? <Loading /> : <Selector setLoad={(x)=>setLoad(x)} setLoaded={(x)=>setLoaded(x)} />} */}
                <Selector setData={props.setData} />
            </div>
        </div>
    )
}

export default Body