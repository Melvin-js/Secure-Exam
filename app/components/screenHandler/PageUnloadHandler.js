
'use client'; 
import { useEffect } from 'react';

const PageUnloadHandler = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
    
      localStorage.setItem('logoutFlag', 'true');

    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      localStorage.removeItem('logoutFlag'); 
    };
  }, []);

  return null; 
};

export default PageUnloadHandler;
