import { memo } from 'react';
import Data from './components/Data';

const App = () => {
  return (
    <div className="min-h-screen ">
      <Data />
    </div>
  );
};

export default memo(App);