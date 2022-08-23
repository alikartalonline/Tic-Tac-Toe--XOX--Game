import React from 'react'

function WinnerPlayer2() {
  return (
    <div className='container'>
    <div className='row'>

        <h1 className="col-10 text-center mt-5 winner1">CONGRATULATIONS [ <span className='text-success'>PLAYER 2</span> ]</h1>

        <div className='col-12 text-center'>
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