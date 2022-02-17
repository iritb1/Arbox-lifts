import React from 'react';
import Buttons from './components/Button';
import { InputLabel } from '@mui/material';
import Container from './components/Container';
import liftData from './data';
import Lift from './components/Lift';
import './App.scss';
import Queue from './Queue';

const App = () => {

  const QueueCalls = new Queue();
  const floors = ['Ground Floor', '1st', '2end', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];
  return (
    <div className="flex">
      <div className="main-space">
        <div className="btn-holder">
          {
            liftData.map((lift, idx) => (
              <Buttons key={idx} name={lift.name} value={lift.name} QueueCalls={QueueCalls}/>
            ))
          }
        </div>

        <div className="elevetors">
        <div className="ctn-holder">
          {
            liftData.map((container, idx) => (
              <Container key={idx} />
            ))
          }
          <Lift QueueCalls={QueueCalls}/>
        </div>

        <div className="ctn-holder">
          {
            liftData.map((container, idx) => (
              <Container key={idx} />
            ))
          }
          <Lift QueueCalls={QueueCalls}/>
        </div>
        <div className="ctn-holder">
          {
            liftData.map((container, idx) => (
              <Container key={idx} />
            ))
          }
          <Lift QueueCalls={QueueCalls}/>
        </div>

        <div className="ctn-holder">
          {
            liftData.map((container, idx) => (
              <Container key={idx} />
            ))
          }
          <Lift QueueCalls={QueueCalls}/>
        </div>
        <div className="ctn-holder">
          {
            liftData.map((container, idx) => (
              <Container key={idx} />
            ))
          }
          <Lift QueueCalls={QueueCalls}/>
        </div>
        </div>
        

        <div className="floor-holder">
          {
            floors.map((floor) => (
              <InputLabel className="floor-name"><b>{floor}</b></InputLabel >
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default App;
