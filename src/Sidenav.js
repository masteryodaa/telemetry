import React, { useEffect } from 'react'
import { VscGraphLine } from 'react-icons/vsc';


function Sidenav({ g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
    g1Flag, g2Flag, g3Flag, g4Flag, g5Flag, g6Flag, g7Flag, g8Flag, g9Flag, g10Flag
}) {

    useEffect(() => {

        g1Flag? document.getElementById('a1').style.color = '#ff0000' : document.getElementById('a1').style.color = '#000';

        g2Flag? document.getElementById('a2').style.color = '#ff0000' : document.getElementById('a2').style.color = '#000';

        g3Flag? document.getElementById('a3').style.color = '#ff0000' : document.getElementById('a3').style.color = '#000';

        g4Flag? document.getElementById('a4').style.color = '#ff0000' : document.getElementById('a4').style.color = '#000';

        g5Flag? document.getElementById('a5').style.color = '#ff0000' : document.getElementById('a5').style.color = '#000';

        g6Flag? document.getElementById('a6').style.color = '#ff0000' : document.getElementById('a6').style.color = '#000';

        g7Flag? document.getElementById('a7').style.color = '#ff0000' : document.getElementById('a7').style.color = '#000';

        g8Flag? document.getElementById('a8').style.color = '#ff0000' : document.getElementById('a8').style.color = '#000';

        g9Flag? document.getElementById('a9').style.color = '#ff0000' : document.getElementById('a9').style.color = '#000';

        g10Flag? document.getElementById('a10').style.color = '#ff0000' : document.getElementById('a10').style.color = '#000';

    }, [g1Flag, g2Flag, g3Flag, g4Flag, g5Flag, g6Flag, g7Flag, g8Flag, g9Flag, g10Flag])

    return (
        <div className='sideContainer'>

            <a href="#graph1" id='a1'
                onClick={() => {
                    document.getElementById('graph2').style.display = 'none';
                    document.getElementById('graph3').style.display = 'none';
                    document.getElementById('graph4').style.display = 'none';
                    document.getElementById('graph5').style.display = 'none';
                    document.getElementById('graph6').style.display = 'none';
                    document.getElementById('graph7').style.display = 'none';
                    document.getElementById('graph8').style.display = 'none';
                    document.getElementById('graph9').style.display = 'none';
                    document.getElementById('graph10').style.display = 'none';
                    let x = document.getElementById('graph1');
                    x.style.display = 'flex';
                    x.style.flexDirection = 'column';
                    x.style.alignItems = 'center';
                    x.style.justifyContent = 'center';
                    x.scrollIntoView({ behavior: 'smooth' });



                }}
            >
                <div className="innerSidenav">
                    <VscGraphLine className='sidenavIcon me-2' size={22} />
                    <p className='sidenavText'>{g1}</p>
                </div>
            </a>


            <a href="#graph2" id='a2'
                onClick={() => {
                    document.getElementById('graph1').style.display = 'none';
                    document.getElementById('graph3').style.display = 'none';
                    document.getElementById('graph4').style.display = 'none';
                    document.getElementById('graph5').style.display = 'none';
                    document.getElementById('graph6').style.display = 'none';
                    document.getElementById('graph7').style.display = 'none';
                    document.getElementById('graph8').style.display = 'none';
                    document.getElementById('graph9').style.display = 'none';
                    document.getElementById('graph10').style.display = 'none';
                    let x = document.getElementById('graph2');
                    x.style.display = 'flex';
                    x.style.flexDirection = 'column';
                    x.style.alignItems = 'center';
                    x.style.justifyContent = 'center';
                    x.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="innerSidenav">
                    <VscGraphLine className='sidenavIcon me-1' size={22} />
                    <p className='sidenavText'>{g2}</p>
                </div>
            </a>


            <a href="#graph3" id='a3'
                onClick={() => {
                    document.getElementById('graph1').style.display = 'none';
                    document.getElementById('graph2').style.display = 'none';
                    document.getElementById('graph4').style.display = 'none';
                    document.getElementById('graph5').style.display = 'none';
                    document.getElementById('graph6').style.display = 'none';
                    document.getElementById('graph7').style.display = 'none';
                    document.getElementById('graph8').style.display = 'none';
                    document.getElementById('graph9').style.display = 'none';
                    document.getElementById('graph10').style.display = 'none';
                    let x = document.getElementById('graph3');
                    x.style.display = 'flex';
                    x.style.flexDirection = 'column';

                    x.style.alignItems = 'center';
                    x.style.justifyContent = 'center';
                    x.scrollIntoView({ behavior: 'smooth' });
                }}

            >
                <div className="innerSidenav">
                    <VscGraphLine className='sidenavIcon me-1' size={22} />
                    <p className='sidenavText'>{g3}</p>
                </div>
            </a>


            <a href="#graph4" id='a4'
                onClick={() => {
                    document.getElementById('graph1').style.display = 'none';
                    document.getElementById('graph2').style.display = 'none';
                    document.getElementById('graph3').style.display = 'none';
                    document.getElementById('graph5').style.display = 'none';
                    document.getElementById('graph6').style.display = 'none';
                    document.getElementById('graph7').style.display = 'none';
                    document.getElementById('graph8').style.display = 'none';
                    document.getElementById('graph9').style.display = 'none';
                    document.getElementById('graph10').style.display = 'none';
                    let x = document.getElementById('graph4');
                    x.style.display = 'flex';
                    x.style.flexDirection = 'column';

                    x.style.alignItems = 'center';
                    x.style.justifyContent = 'center';
                    x.scrollIntoView({ behavior: 'smooth' });
                }
                }
            >
                <div className="innerSidenav">
                    <VscGraphLine className='sidenavIcon me-1' size={22} />
                    <p className='sidenavText'>{g4}</p>
                </div>
            </a>


            <a href="#graph5" id='a5'
                onClick={() => {
                    document.getElementById('graph1').style.display = 'none';
                    document.getElementById('graph2').style.display = 'none';
                    document.getElementById('graph3').style.display = 'none';
                    document.getElementById('graph4').style.display = 'none';
                    document.getElementById('graph6').style.display = 'none';
                    document.getElementById('graph7').style.display = 'none';
                    document.getElementById('graph8').style.display = 'none';
                    document.getElementById('graph9').style.display = 'none';
                    document.getElementById('graph10').style.display = 'none';
                    let x = document.getElementById('graph5');
                    x.style.display = 'flex';
                    x.style.flexDirection = 'column';
                    x.style.alignItems = 'center';
                    x.style.justifyContent = 'center';
                    x.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="innerSidenav">
                    <VscGraphLine className='sidenavIcon me-1' size={22} />
                    <p className='sidenavText'>{g5}</p>
                </div>
            </a>


            <a href="#graph6" id='a6'
                onClick={() => {
                    document.getElementById('graph1').style.display = 'none';
                    document.getElementById('graph2').style.display = 'none';
                    document.getElementById('graph3').style.display = 'none';
                    document.getElementById('graph4').style.display = 'none';
                    document.getElementById('graph5').style.display = 'none';
                    document.getElementById('graph7').style.display = 'none';
                    document.getElementById('graph8').style.display = 'none';
                    document.getElementById('graph9').style.display = 'none';
                    document.getElementById('graph10').style.display = 'none';
                    let x = document.getElementById('graph6');
                    x.style.display = 'flex';
                    x.style.flexDirection = 'column';
                    x.style.alignItems = 'center';
                    x.style.justifyContent = 'center';
                    x.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="innerSidenav">
                    <VscGraphLine className='sidenavIcon me-1' size={22} />
                    <p className='sidenavText'>{g6}</p>
                </div>
            </a>


            <a href="#graph7" id='a7'
                onClick={() => {
                    document.getElementById('graph1').style.display = 'none';
                    document.getElementById('graph2').style.display = 'none';
                    document.getElementById('graph3').style.display = 'none';
                    document.getElementById('graph4').style.display = 'none';
                    document.getElementById('graph5').style.display = 'none';
                    document.getElementById('graph6').style.display = 'none';
                    document.getElementById('graph8').style.display = 'none';
                    document.getElementById('graph9').style.display = 'none';
                    document.getElementById('graph10').style.display = 'none';
                    let x = document.getElementById('graph7');
                    x.style.display = 'flex';
                    x.style.flexDirection = 'column';
                    x.style.alignItems = 'center';
                    x.style.justifyContent = 'center';
                    x.scrollIntoView({ behavior: 'smooth' });

                }}
            >
                <div className="innerSidenav">
                    <VscGraphLine className='sidenavIcon me-1' size={22} />
                    <p className='sidenavText'>{g7}</p>
                </div>
            </a>


            <a href="#graph8" id='a8'
                onClick={() => {
                    document.getElementById('graph1').style.display = 'none';
                    document.getElementById('graph2').style.display = 'none';
                    document.getElementById('graph3').style.display = 'none';
                    document.getElementById('graph4').style.display = 'none';
                    document.getElementById('graph5').style.display = 'none';
                    document.getElementById('graph6').style.display = 'none';
                    document.getElementById('graph7').style.display = 'none';
                    document.getElementById('graph9').style.display = 'none';
                    document.getElementById('graph10').style.display = 'none';
                    let x = document.getElementById('graph8');
                    x.style.display = 'flex';
                    x.style.flexDirection = 'column';
                    x.style.alignItems = 'center';
                    x.style.justifyContent = 'center';
                    x.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="innerSidenav">
                    <VscGraphLine className='sidenavIcon  me-1' size={22} />
                    <p className='sidenavText'>{g8}</p>
                </div>
            </a>


            <a href="#graph9" id='a9'
                onClick={() => {
                    document.getElementById('graph1').style.display = 'none';
                    document.getElementById('graph2').style.display = 'none';
                    document.getElementById('graph3').style.display = 'none';
                    document.getElementById('graph4').style.display = 'none';
                    document.getElementById('graph5').style.display = 'none';
                    document.getElementById('graph6').style.display = 'none';
                    document.getElementById('graph7').style.display = 'none';
                    document.getElementById('graph8').style.display = 'none';
                    document.getElementById('graph10').style.display = 'none';
                    let x = document.getElementById('graph9');
                    x.style.display = 'flex';
                    x.style.flexDirection = 'column';
                    x.style.alignItems = 'center';
                    x.style.justifyContent = 'center';
                    x.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="innerSidenav">
                    <VscGraphLine className='sidenavIcon me-1' size={22} />
                    <p className='sidenavText'>{g9}</p>
                </div>
            </a>


            <a href="#graph10" id='a10'
                onClick={() => {
                    document.getElementById('graph1').style.display = 'none';
                    document.getElementById('graph2').style.display = 'none';
                    document.getElementById('graph3').style.display = 'none';
                    document.getElementById('graph4').style.display = 'none';
                    document.getElementById('graph5').style.display = 'none';
                    document.getElementById('graph6').style.display = 'none';
                    document.getElementById('graph7').style.display = 'none';
                    document.getElementById('graph8').style.display = 'none';
                    document.getElementById('graph9').style.display = 'none';
                    let x = document.getElementById('graph10');
                    x.style.display = 'flex';
                    x.style.flexDirection = 'column';
                    x.style.alignItems = 'center';
                    x.style.justifyContent = 'center';
                    x.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="innerSidenav">
                    <VscGraphLine className='sidenavIcon me-1' size={22} />
                    <p className='sidenavText'>{g10}</p>
                </div>
            </a>


        </div>
    )
}

export default Sidenav