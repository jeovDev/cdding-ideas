import React from 'react';
import { useState, useEffect } from 'react';

Number.prototype.format = function (n) {
  var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
  return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
};

export function useAnimatedCount(initialValue, duration) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let requestId;

    const animateCount = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsedTime = timestamp - startTime;
      const progress = Math.min(1, elapsedTime / duration);
      const currentValue = Math.floor(initialValue * progress);

      setCount(currentValue);

      if (progress < 1) {
        requestId = requestAnimationFrame(animateCount);
      }
    };

    requestId = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [initialValue, duration]);

  return count.format();
}
