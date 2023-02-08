import React from 'react';
import { SearchBar } from 'antd-mobile'
import HomeBanner from '@/pages/Home/Banner';
import HomeList from '@/pages/Home/List';
import styles from './index.module.less';

const Home = () => {

  return (
    <div className={styles.home}>
      <SearchBar placeholder='请输入姓名或者id'  style={{
            '--background': '#ffffff',
            '--height': '46px',
            '--padding-left': '12px',
          }} />
      <HomeBanner />
      <HomeList />
    </div>
  )
}

export default Home;
