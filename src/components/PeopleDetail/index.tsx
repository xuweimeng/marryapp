import React from "react";
import styles from "./index.module.less";
import { useParams } from "react-router-dom";
import HomeBanner from '@/pages/Home/Banner';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const PeopleDetail = () => {
  const {id } = useParams();
  useDocumentTitle('嘉宾推荐')

  return <div className={styles.member}>
    <div className={styles.memberAlbum}>
      <HomeBanner height={240} />
    </div>
    <div className={styles.memberBasicInfo}>
    22
    </div>
    <div className={styles.memberDetailInfo}>
    22
    </div>
    <div className={styles.memberRequire}>
    22
    </div>
  </div>;
};

export default PeopleDetail;
