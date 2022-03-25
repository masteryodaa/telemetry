import React from 'react'

function Loading() {
    return (
        <div className='loading'>
            <div className="spinner-border text-danger mb-5" style={{"width": '10rem', 'height': '10rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

            <h4 className=''>Loading...</h4>
        </div>
    )
}

export default Loading