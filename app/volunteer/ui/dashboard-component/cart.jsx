'use client';

import React from 'react';
import styles from './dashboard.module.css';

const Cart = ({ title, name, description, buttonLabel, onButtonClick, isFileUpload }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.mainheading}>
        {/* <span className={styles.iconWrapper}>
          <img src={icon.src} className={styles.iconWhite} alt={title} width="40" height="40" />
        </span> */}
        <span className={styles.title}>{title}</span>
      </div>

      <h3 className={styles.secheading}>{name}</h3>
      <p className={styles.text}>{description}</p>

      {isFileUpload ? (
         <label className={styles.uploadButton}>
         Upload File
         <input
           type="file"
           onChange={onButtonClick}
           style={{ display: 'none' }}
         />
       </label>
      ) : (
        <button className={styles.addButton} onClick={onButtonClick}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default Cart;
