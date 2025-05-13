import React from 'react';
import styles from '../ui/dashboard-component/dashboard.module.css';
import Link from 'next/link';
import { assests } from '../assest/assest';

const dashboardItems = [
  {
    title: 'Lecture',
    icon:assests.lecturelogo,
    path: '../volunteer/dashboard/lecture',
    description: 'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Course',
    icon:assests.courselogo,
    path: '../volunteer/dashboard/course',
    description: 'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Task',
    icon:assests.tasklogo,
    path: '../volunteer/dashboard/task',
    description: 'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
];

const VolunteerDashboard = () => {
  return (
    <>
      <div className={styles.head}>
        <h2>Volunteer Dashboard</h2>
      </div>
      <div className={styles.box}>
        {dashboardItems.map((item) => (
          <Link href={item.path} key={item.title}>
            <div className={styles.cart}>
            <div className={styles.mainheading}>
  <span className={styles.iconWrapper}>
    <img src={item.icon.src} className={styles.iconWhite} alt={item.title} width="40" height="40"  />
  </span>
  <span className={styles.title}>{item.title}</span>
</div>

              <h3 className={styles.secheading}>{item.title}</h3>
              <p className={styles.text}>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default VolunteerDashboard;
