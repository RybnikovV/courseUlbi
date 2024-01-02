import {useState} from 'react';
import style from './counter.module.scss'

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
          className={style.btn}
          onClick={increment}>+</div>
        <div
          className={style.btn}
          onClick={decriment}>-</div>
      </div>
    </>
  )
};

export default Counter