import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import CounterInput from './components/Counter/CounterInput.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);


  function handleSetClick(enteredNumber) {
    setChosenCount(enteredNumber);
    setChosenCount(prevState => prevState + 1)
  }

  return (
    <>
      <Header />
      <main>
        <CounterInput handleSetClick={handleSetClick}/>
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
