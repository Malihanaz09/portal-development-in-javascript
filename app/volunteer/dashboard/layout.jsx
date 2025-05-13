import React from 'react'
import Navbar from '../ui/navbar/navbar'
import styles from '../ui/dashboard-component/dashboard.module.css'
import Sidebar from '../ui/sidebar/sidebar'
const layout = ({children}) => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar/>  
        </div>
        <div className={styles.content}>
          <Navbar/>
        {children}
       </div>
   
    </div>
    </>

  )
}

export default layout
