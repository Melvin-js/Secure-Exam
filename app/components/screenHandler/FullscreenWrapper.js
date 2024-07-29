
'use client'; // 

import React from 'react';
import useFullscreenWarning from './useFullscreenWarning'; 
import FullscreenDialog from './FullscreenDialog'; 

const FullscreenWrapper = ({ session }) => {
  const { isDialogVisible, handleConfirm, handleCancel, countdownSeconds } = useFullscreenWarning(5); 

  if (!session.isLoggedin) {
    return null; 
  }

  return (
    <>
      <FullscreenDialog
        isVisible={isDialogVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        countdownSeconds={countdownSeconds}
      />
    </>
  );
};

export default FullscreenWrapper;
