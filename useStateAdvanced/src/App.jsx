import { memo } from 'react';
import Hero from './Hero';
const App = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default memo(App);