'use client';

import React from 'react';
import styles from '../../ui/dashboard-component/dashboard.module.css';
import Cart from '../../ui/dashboard-component/cart';

const dashboardItems = [
  {
    title: 'First Task',
    name: 'Lorem',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Second Task',
    name: 'Lorem',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Thirth Task',
    name: 'Lorem',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Forth Task',
    name: 'Lorem',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
];

const Task = () => {

  const handleFileUpload = (file) => {
    console.log('Uploaded file:', file);
    alert(`Uploaded: ${file.name}`);
  };

  return (
    <>
      <div className={styles.head}>
        <h2>Volunteer Dashboard</h2>
      </div>
      <div className={styles.box}>
      <div className={styles.box}>
        {dashboardItems.map((item) => (
          <Cart
            key={item.title}
            title={item.title}
            name={item.name}
            description={item.description}
            buttonLabel="Upload File"
            onButtonClick={handleFileUpload}
            isFileUpload={true}
          />
        ))}
      </div>
      
      </div>
    </>
  );
};

export default Task;
