import React from "react";
import styles from "./index.module.less";
import IdenityPng from "@/assets/idenity.png";
const SinglePeople = () => {
  return (
    <div className={styles.singlePeople}>
      <div className={styles.singlePeopleAvatar}></div>
      <div className={styles.singlePeopleInfo}>
        <div className={styles.singlePeopleInfoBase}>
          <div className={styles.singlePeopleInfoBaseName}>刘亦菲</div>
          <div className={styles.singlePeopleInfoBaseAuth}>
            &nbsp;
            <span className="iconfont icon-shimingrenzheng icon-primary"></span>
            &nbsp;已认证
          </div>
        </div>
        <div className={styles.singlePeopleInfoDetail}>
          29岁|165cm|北京朝阳|演员|未婚
        </div>
        <div className={styles.singlePeopleInfoDemand}>
          {/* <span 
          className="ellipsis"
          > */}
            个人要求：年轻孝顺，北京有房，善良有责任心
          {/* </span> */}
        </div>
      </div>
    </div>
  );
};

export default SinglePeople;
