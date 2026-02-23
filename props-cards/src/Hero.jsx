import { memo } from 'react';
import './index.css';
import Card from './components/card.jsx';

const Hero = () => {
  return (
    <div>
      <DataMap />
    </div>
  );
};

export default memo(Hero);