import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CurrentTimeWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 50px;
width: 35%;
height: fit-content;
`;

const TimeP = styled.p`
font-size: 20px;
background-color: white;
`;

export const DateTime = () => {
    var [date, setDate] = useState (new Date());

    useEffect (() => {
        let timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer);
        }
    })

    return(
        <CurrentTimeWrapper>
            <TimeP> Time : {date.toLocaleTimeString().substring(0, 7)} </TimeP>
            <TimeP> Date : {date.toLocaleDateString()}</TimeP>
        </CurrentTimeWrapper>
    );

}

export default DateTime;