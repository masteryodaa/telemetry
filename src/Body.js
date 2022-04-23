import Selector from './Selector';
// import svg from './Spreadsheets-amico.svg';
import gif from './animation.gif';

function Body(props) {


    return (
        <div className="body mt-3 ">
            <div className="body-left ">

                {/* <iframe className='img-fluid' alt="logo" width='500px' src="https://embed.lottiefiles.com/animation/92091" title='gif' ></iframe> */}

                <img src={gif} className='img-fluid ms-2' alt="logo" width='700px'
                /> 

                {/* <a href="https://storyset.com/finance">Finance illustrations by Storyset</a> */}
            </div>

            <div className="body-right">

                <Selector setLoaded={props.setLoaded}

                    setFailed={props.setFailed}
                    failed={props.failed}

                    g1={props.g1} setG1={props.setG1}
                    g2={props.g2} setG2={props.setG2}
                    g3={props.g3} setG3={props.setG3}
                    g4={props.g4} setG4={props.setG4}
                    g5={props.g5} setG5={props.setG5}
                    g6={props.g6} setG6={props.setG6}
                    g7={props.g7} setG7={props.setG7}
                    g8={props.g8} setG8={props.setG8}
                    g9={props.g9} setG9={props.setG9}
                    g10={props.g10} setG10={props.setG10}
                    g11={props.g11} setG11={props.setG11}
                    g12={props.g12} setG12={props.setG12}

                />
            </div>
        </div>
    )
}

export default Body