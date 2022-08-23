import React from 'react'

// COMPONENTS 
import WinnerPlayer1 from './WinnerPlayer1';
import WinnerPlayer2 from './WinnerPlayer2';
import NoWinner from './NoWinner';

function FinalResult(
    {
        box1, box2, box3, box4, box5, box6, box7, box8, box9,
    }
) {

    // FINAL RESULT FUNCTION
    const finalResult = () => {

        // const deneme = document.getElementsByTagName("button")
        // const deneme = document.querySelector('.btn');
        const deneme = document.querySelector('.btn');
        // deneme.classList.add("btn-dark", "btn")

        if (
            (box1 === "X" && box2 === "X" && box3 === "X") ||
            (box4 === "X" && box5 === "X" && box6 === "X") ||
            (box7 === "X" && box8 === "X" && box9 === "X") ||
            (box1 === "X" && box4 === "X" && box7 === "X") ||
            (box2 === "X" && box5 === "X" && box8 === "X") ||
            (box3 === "X" && box6 === "X" && box9 === "X") ||
            (box1 === "X" && box5 === "X" && box9 === "X") ||
            (box3 === "X" && box5 === "X" && box7 === "X")
        ) {
            return <WinnerPlayer1 /> 
        }

        else if (
            (box1 === "O" && box2 === "O" && box3 === "O") ||
            (box4 === "O" && box5 === "O" && box6 === "O") ||
            (box7 === "O" && box8 === "O" && box9 === "O") ||
            (box1 === "O" && box4 === "O" && box7 === "O") ||
            (box2 === "O" && box5 === "O" && box8 === "O") ||
            (box3 === "O" && box6 === "O" && box9 === "O") ||
            (box1 === "O" && box5 === "O" && box9 === "O") ||
            (box3 === "O" && box5 === "O" && box7 === "O")
        ) {
            return <WinnerPlayer2 />;

        }

        else if
            (box1 !== "" && box2 !== "" && box3 !== "" &&
            box4 !== "" && box5 !== "" && box6 !== "" &&
            box7 !== "" && box8 !== "" && box9 !== "") {
            return <NoWinner />;

        }





    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 mt-3 text-center '>
                        {
                            finalResult()
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalResult