import * as React from 'react';

import './index.less'


import styles from './p2.module.less';
const Home = () => {
  
  return (
    <div style={{color: '#f00'}}>
      home
      <p className='p2'>323</p>
      <p className='p1'>323</p>
      <p className={styles.p5}>323</p>
      <p>111</p>
      </div>
  )
}

export default Home;
