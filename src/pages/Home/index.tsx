import React from 'react';
import { SearchBar } from 'antd-mobile'
import HomeBanner from '@/pages/Home/Banner';
import HomeList from '@/pages/Home/List';
import styles from './index.module.less';

const Home = () => {

  const searchBarStyle = {
    '--background': '#ffffff',
    '--height': '46px',
    '--padding-left': '12px',
  }

  return (
    <div className={styles.home}>
      <SearchBar placeholder='请输入姓名或者id'  style={searchBarStyle} />
      <HomeBanner height={120} />
      <HomeList />
    </div>
  )
}

export default Home;
