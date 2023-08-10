import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const TimeWrapper = styled.div`
background-color: #DEDEDE;
`;

const Time = styled.h1`
justify-content: center;
align-items: center;
text-align: center;
font-size: 150px;
color: white;
`;

const TopButton = styled.button``;

const BottomButton = styled.button``;


//arrow function labeled PomodoroTimer
const PomodoroTimer = () => {

    //use states constants
    const [timer, setTimer] = useState(25 * 60); //25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    //click sound 
    //const clickSound = new Audio();

    //useEffect for switching between Break and Work 
    useEffect(() => {
        if (isBreak){
            setTimer(5 * 60); // sets timer for 5 minutes
        }else {
            setTimer(25 * 60);
        }
    }, [isBreak]);

    //useEffect function 
    /**
     * Explanation : 
     *  ...
     *  ...
     */
    useEffect(() => {
        let interval;

        if(isActive && timer > 0){
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000); //1000 ms = 1 second
        } else if (timer === 0){
            setIsBreak(prevIsBreak => !prevIsBreak); // toggle between work and break
            setTimer(isBreak ? 25 * 60 : 5 * 60); //reset timer based on mode
            setIsActive(false); //stops the timer when it hits 0 
            //play click sound
            //clickSound.play();
        }

        return () => clearInterval(interval);
    }, [isActive, timer, isBreak]); //clickSound

    const toggleTimer = () => {
        //clickSound.play();
        setIsActive(prevIsActive => !prevIsActive);
    };

    const formatTime = seconds => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <TimeWrapper>
            <h1>{isBreak ? 'Break Time' : 'Time To Work!'}</h1>
            
            {/* Buttons to switch modes  */}
            <button onClick={() => setIsBreak(true)}>
                {/* {isBreak ? 'Start Work' : 'Take a Break'} */}
                BREAK
            </button>
            <button onClick={() => setIsBreak(false)}>
                WORK
            </button>
            
            {/* <h2>{formatTime(timer)}</h2> */}
            <Time>{formatTime(timer)}</Time>
            
            
            <button onClick={toggleTimer}> {isActive ? 'Pause' : 'Start'} </button>
            <button onClick={() => {setTimer(isBreak ? 5 * 60 : 25 * 60); setIsActive(false)}}> Reset </button>
            
            <button onClick={() => setTimer(1)}> DEV BUTTON </button>
        </TimeWrapper>
    );
}

export default PomodoroTimer;