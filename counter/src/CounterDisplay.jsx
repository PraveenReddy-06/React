import { memo } from 'react';

const CounterDisplay = ({ counter }) => {
  return (
    <div>
      <h2>Counter :{counter}</h2>
    </div>
  );
};

export default memo(CounterDisplay);