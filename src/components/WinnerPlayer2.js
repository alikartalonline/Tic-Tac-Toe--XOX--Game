import React from 'react'

function WinnerPlayer2() {
  return (
    <div className='container'>
    <div className='row'>

        <h1 className="col-sm-11 col-md-6 col-lg-5 col-xl-6 col-xxl-9  text-center mt-5 winner1">CONGRATULATIONS [ <span className='text-success'>PLAYER 2</span> ]</h1>

        <div className='col-sm-12 col-md-6 col-lg-7 col-xl-6 col-xxl-12  text-center'>
            <img
                className="col-3"
                src="assets/player2.gif"
                alt="tebrikler"
                height="200"
            />
        </div>

    </div>
</div>
  )
}

export default WinnerPlayer2