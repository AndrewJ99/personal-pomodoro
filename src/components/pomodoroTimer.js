import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

//import sounds 
import clickMP3 from '../audio/click.mp3';
import alarmMP3 from '../audio/alarm.mp3';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: #DEDEDE;
text-align: center;
height: 100%;
width: 35%;
padding: 40px;
padding-bottom: 100px;
border-radius: 5px;
box-shadow: -4px 4px 10px 2px rgb(0, 0, 0, 0.5);

@media (max-width: 790px){
    width: 50%;
}
`;

const Title = styled.h1`
font-size: 50px;
text-shadow: -3px 2px 3px rgba(0, 0, 0, 0.5);
`;

const Time = styled.h1`
font-size: 150px;
color: white;
text-shadow: rgba(0, 0, 0, 0.40) -2px 10px 10px;

@media (max-width: 790px){
    font-size: 80px;
}
`;

const TopButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`;


const TopButton = styled.button`
background-color: #DEDEDE;
border: none;
font-size: 25px;
display: inline-block;
text-decoration: none;
text-align: center;
color: black;
border-radius: 5px;

&:hover {
    color: white; // <Thing> when hovered
    background-color: gray;
  }
`;

const BottomButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;


`;

const BottomButton = styled.button`
background-color: #000000;
opacity: 70%;
color: white;
border-radius: 5px;
border: none;
box-shadow: -1px 1px 3px 2px rgb(0, 0, 0, 0.5);
font-size: 40px;
padding: 5px 10px 5px 10px;

&:hover {
    opacity: 75%;
    box-shadow: 0px 0px 5px 2px rgb(0, 0, 0, 0.5);

}
`;


//arrow function labeled PomodoroTimer
const PomodoroTimer = () => {

    //use states constants
    const [timer, setTimer] = useState(25 * 60); //25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    //click sound 
    //const clickSound = new Audio(url pathway);
    const clickSound = new Audio(clickMP3);
    const alarmSound = new Audio(alarmMP3);

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
            alarmSound.play();
            setIsBreak(prevIsBreak => !prevIsBreak); // toggle between work and break
            setTimer(isBreak ? 25 * 60 : 5 * 60); //reset timer based on mode
            setIsActive(false); //stops the timer when it hits 0 
            //play click sound
            //clickSound.play();
        }

        return () => clearInterval(interval);
    }, [isActive, timer, isBreak, alarmSound]); //clickSound

    const toggleTimer = () => {
        setIsActive(prevIsActive => !prevIsActive);
    };

    const formatTime = seconds => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    //function for playing the click noise 
    //add this to all buttons
    const playClick = () => {
        clickSound.play();
    }

    return (
        <Wrapper>
            <Title>{isBreak ? 'Break Time' : 'Time To Work!'}</Title>
            <TopButtonWrapper>
                {/* Buttons to switch modes  */}
                <TopButton onClick={() => {setIsBreak(false); playClick()}}>
                    Work
                </TopButton>
                <TopButton onClick={() => {setIsBreak(true); playClick()}}>
                    {/* {isBreak ? 'Start Work' : 'Take a Break'} */}
                    Break
                </TopButton>
            </TopButtonWrapper>
            {/* <h2>{formatTime(timer)}</h2> */}
            <Time>{formatTime(timer)}</Time>
            
            <BottomButtonWrapper>
                <BottomButton onClick={() => {toggleTimer(); playClick()}}> {isActive ? 'Pause' : 'Start'} </BottomButton>
                <BottomButton onClick={() => {setTimer(isBreak ? 5 * 60 : 25 * 60); setIsActive(false); playClick()}}> Reset </BottomButton>
                
                <BottomButton onClick={() => setTimer(20)}> DEV BUTTON </BottomButton>
            </BottomButtonWrapper>
        </Wrapper>
    );
}

export default PomodoroTimer;