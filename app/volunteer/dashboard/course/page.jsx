'use client';

import React from 'react';
import styles from '../../ui/dashboard-component/dashboard.module.css';
import Cart from '../../ui/dashboard-component/cart';

const dashboardItems = [
  {
    title: 'First Course',
    name: 'Digital Marketing',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Second Course',
    name: 'Graphic Design',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Thirth Course',
    name: 'Web Development',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Forth Course',
    name: 'App Development',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
];

const Course = () => {

  const handleAddCourse = () => {
    alert('Course added successfully!');
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
            buttonLabel="Add Course"
            onButtonClick={handleAddCourse}
            isFileUpload={false}
          />
        ))}
      </div>
      
      </div>
    </>
  );
};

export default Course;
