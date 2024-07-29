
'use client'; 

import { logout } from '@/app/action';
import { useEffect } from 'react';
 

const LogoutOnLoad = () => {
  useEffect(() => {
    const performLogout = async () => {
      if (localStorage.getItem('logoutFlag') === 'true') {

        await logout();
       
        localStorage.removeItem('logoutFlag');
      }
    };

    performLogout();
  }, []);

  return null; 
};

export default LogoutOnLoad;
