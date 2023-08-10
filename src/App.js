import styled from 'styled-components';

import H1 from "./components/title";
import PomodoroTimer from './components/pomodoroTimer';
import WeatherDisplay from './components/weatherAPI';
import DateTime from './components/currentTime';

const Container = styled.div`
  background-color: #F0F0F0;
  /* border-style: solid; */
  /* border-color: black; */
  min-height: 100vh;
  min-width: 100vh;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

// const Frame = styled.div`
//   width: 95%;
//   height: 90%;
//   background-color: #F0F0F0;
//   border-color: black;
//   border-radius: 1px;
//   border-style: solid;
// `;



function App() {
  return (
    <Container>
      {/* <Frame> */}
      {/* <DateTime></DateTime> */}
      <H1>Hi Andrew</H1>
      <h3>Welcome To Your Pomodoro Timer</h3>
      <PomodoroTimer />
      {/* <WeatherDisplay /> */}
      {/* </Frame> */}
    </Container>
  );
}

export default App;
