import { memo } from 'react';
import Card from './components/card.jsx';
import DataMap from './components/DataMap.jsx';
const App = () => {
  return (
    <div className='container'>
      <DataMap />
    </div>
  );
};

export default memo(App);