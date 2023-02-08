import React from 'react'
import SinglePeople from '@/components/SinglePeople';
import styles from './index.module.less';

const HomeList  = () => {
  return (
    <div className={styles.homeList}>
      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13].map((item, index) => <SinglePeople key={index} id={index} />)
      }
      
    </div>
  )
}

export default HomeList