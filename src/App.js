import styled from 'styled-components';

import H1 from "./components/title";
import PomodoroTimer from './components/pomodoroTimer';
import WeatherDisplay from './components/weatherAPI';
import DateTime from './components/currentTime';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F0F0F0;
  min-height: 100vh;
  /* padding: 25px; */
  align-items: center;
`;

function App() {
  return (
    <Container>
      <H1>Hi Andrew</H1>
      <h3>Welcome To Your Pomodoro Timer</h3>
      <DateTime></DateTime>
      <PomodoroTimer />
      <WeatherDisplay />
    </Container>
  );
}

export default App;
