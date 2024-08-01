'use client'

import { useEffect } from 'react';

const DisableRightClick = () => {
  useEffect(() => {
    const disableRightClickHandler = (e) => {
      if (e.button === 2) { // 2 is the right mouse button
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('contextmenu', disableRightClickHandler);

    return () => {
      document.removeEventListener('contextmenu', disableRightClickHandler);
    };
  }, []);

  return null; 
};

export default DisableRightClick;
