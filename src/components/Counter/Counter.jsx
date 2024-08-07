import { useState, memo, useCallback, useMemo, useEffect } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import CounterHistory from './CounterHistory.jsx'
import { log } from '../../log.js';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

export default memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);
  // useEffect(()=> {
  //   setCounterChanges([
  //     {
  //       value: initialCount,
  //       id: Math.random() * 1000
  //     }]);
  // }, [initialCount])
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);

  // const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState([
    {
      value: initialCount,
      id: Math.random() * 1000
    }
  ]);

  const counterOut = counterChanges.reduce((accumulator, currentValue) => accumulator + currentValue.value , 0)
  const handleDecrement = useCallback(function handleDecrement() {
    setCounterChanges((prevCounterChanges) => [
      {
        value: -1,
        id: Math.random() * 1000
      }
      , ...prevCounterChanges]);
  }, []) 

  const handleIncrement = useCallback(function handleIncrement() {
    setCounterChanges((prevCounterChanges) => [
      {
        value: +1,
        id: Math.random() * 1000
      }
      , ...prevCounterChanges]);
  }, [])

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counterOut} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges}/>
    </section>
  );
})
