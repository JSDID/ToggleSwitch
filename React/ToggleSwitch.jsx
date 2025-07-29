import React, { useState } from 'react';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    console.log('Toggle is', !isChecked ? 'ON' : 'OFF');
  };

  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        id="toggle-switch"
        className={styles.toggle__input}
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="toggle-switch" className={styles.toggle__label}>
        <span className={styles.toggle__circle}></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
