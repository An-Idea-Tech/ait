import React, { useRef, useEffect } from 'react';
import { progressBarAnim } from '../utils/animations';

const ProgressBar = ({ progress = 0 }) => {
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      progressBarAnim(barRef.current, progress);
    }
  }, [progress]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-white/5"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Diagnosis progress"
    >
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-[#A35A3A] to-[#D4845A] rounded-r-full"
        style={{ width: '0%' }}
      />
    </div>
  );
};

export default ProgressBar;
