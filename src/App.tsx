import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroScreen from './components/IntroScreen';
import IntroScreenTwo from './components/IntroScreenTwo';
import IntroScreenThree from './components/IntroScreenThree'
import InstructionScreen from './components/InstructionScreen'
import ActivityScreen from './components/ActivityScreen';
import FinalScreen from './components/FinalScreen';

export default function App() {
  return (
    <Router  basename='/MatchingGame'>
      <Routes>
        <Route path='/' element={<IntroScreen />} />
        <Route path='/one' element={<IntroScreenTwo />} />
        <Route path='/two' element={<IntroScreenThree />} />
        <Route path='/instructionScreen' element={<InstructionScreen />} />
        <Route path='/activityScreen' element={<ActivityScreen />} />
        <Route path='/finalScreen' element={<FinalScreen/>} />


      </Routes>
    </Router>
  );
}
