import * as React from 'react';
import { Button, SearchBar, Space, Toast } from 'antd-mobile'
import HomeBanner from '@/pages/Home/Banner';
import HomeList from '@/pages/Home/List';
import styles from './index.module.less';

const Home = () => {

  return (
    <div className={styles.home}>
      <SearchBar placeholder='请输入内容' />
      <HomeBanner />
      <HomeList />
    </div>
  )
}

export default Home;
