import {useState} from 'react';
import "./counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decriment = () => {
    setCounter(counter-1)
  };

  const increment = () => {
    setCounter(counter+1)
  };

  return (
    <>
      {counter}
      <div>
        <div
          className='btn'
          onClick={increment}>+</div>
        <div
          className='btn'
          onClick={decriment}>-</div>
      </div>
    </>
  )
};

export default Counter