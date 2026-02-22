import { memo } from 'react';
import Hero from './Hero';
import Navbar from './Nav';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-25">
      <main>
        <Navbar />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </main>
    </div>
  );
};

export default memo(App);