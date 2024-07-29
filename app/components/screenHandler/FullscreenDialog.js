'use client'

import React, { useEffect, useState } from 'react';

const FullscreenDialog = ({ isVisible, onConfirm, onCancel, countdownSeconds }) => {
  const [remainingTime, setRemainingTime] = useState(countdownSeconds);

  useEffect(() => {
    if (isVisible) {
      setRemainingTime(countdownSeconds);
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            onConfirm();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isVisible, countdownSeconds, onConfirm]);

  if (!isVisible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.dialog}>
        <h2>Warning</h2>
        <p>If you exit fullscreen, you will exit the exam. Are you sure you want to continue?</p>
        <p>Automatically confirming in {remainingTime} seconds...</p>
        <div style={styles.buttons}>
          <button style={styles.button} onClick={onConfirm}>Continue</button>
          <button style={styles.button} onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  dialog: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    textAlign: 'center',
    zIndex: 1001,
  },
  buttons: {
    marginTop: '20px',
  },
  button: {
    margin: '0 10px',
    border: '1px' ,
    backgroundColor: 'white',
  },
};

export default FullscreenDialog;
