import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "antd-mobile";
import styles from "./index.module.less";
// import IdenityPng from "@/assets/idenity.png";
import AvatarPng from "@/assets/avatar.png";

const SinglePeople = ({ id }: { id: number }) => {
  const navigate = useNavigate();

  // 导航到用户个人详情页面
  const navigateTomember = () => {
    navigate(`/member/${id}`);
  };

  return (
    <div className={styles.singlePeople} onClick={navigateTomember}>
      <div className={styles.singlePeopleAvatar}>
        <Avatar src={AvatarPng} style={{ "--size": "100%" }} />
      </div>
      <div className={styles.singlePeopleInfo}>
        <div className={styles.singlePeopleInfoBase}>
          <div className={styles.singlePeopleInfoBaseName}>刘亦菲</div>
          <div className={styles.singlePeopleInfoBaseAuth}>
            <span className="iconfont icon-shimingrenzheng icon-primary"></span>
            &nbsp;上海市-黄浦区
          </div>
        </div>
        <div className={styles.singlePeopleInfoDetail}>
          29岁 | 女 | 165cm | 未婚 | 演员
        </div>
        <div className={styles.singlePeopleInfoDemand}>
          年轻孝顺，北京有房，善良有责任心2233演员
        </div>
      </div>
    </div>
  );
};

export default SinglePeople;
