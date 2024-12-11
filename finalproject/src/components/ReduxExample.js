import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store';

const ReduxExample = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default ReduxExample;
