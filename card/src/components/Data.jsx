import { memo } from 'react';
import Hero from './Hero';
const Data = () => {
  return (
    <div>
      <Hero id="2400032662" name="Praveen" department="Software Engineering" ProjectName="React Card Component" />
      <Hero id="2400032663" name="Rahul" department="Data Science" ProjectName="Data Analysis Tool" />
      <Hero id="2400032664" name="Anita" department="UI/UX Design" ProjectName="Design System Library" />
    </div>
  );
};

export default memo(Data);