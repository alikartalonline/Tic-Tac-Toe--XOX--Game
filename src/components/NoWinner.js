import React from 'react'

function NoWinner() {
  return (
    <div className='container'>
    <div className='row'>

        <h1 className="col-sm-6 col-md-6 col-lg-4 col-xl-6 col-xxl-5 ms-lg-auto text-center mt-5 winner1"> <span className='fs-1'>No</span>  Winners! <span  className='fs-1'> , please</span> Play Again...</h1>

        <div className='col-sm-6 col-md-6 col-lg-7 col-xl-6 col-xxl-6 text-center'>
            <img
                className="col-3"
                src="assets/beraber.gif"
                alt="draw"
                height="200"
            />
        </div>

    </div>
</div>
  )
}

export default NoWinner