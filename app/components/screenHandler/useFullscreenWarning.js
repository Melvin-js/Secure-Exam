
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; //
import { logout } from '@/app/action';

const useFullscreenWarning = (countdownSeconds = 10) => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const router = useRouter(); 

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      handleExitFullscreen();
    }
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      // Page is hidden
      handleExitFullscreen();
    }
  };

  const handleExitFullscreen = () => {
    setDialogVisible(true);
   
  };

  const handleConfirm = () => {
    logout();
    setDialogVisible(false);
    
    router.push('/pages/end'); 
  };

  const handleCancel = () => {
    setDialogVisible(false);
    document.documentElement.requestFullscreen(); 
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return {
    isDialogVisible,
    handleConfirm,
    handleCancel,
    countdownSeconds,
  };
};

export default useFullscreenWarning;
