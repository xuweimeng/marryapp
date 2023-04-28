import React, { useState } from "react";
import { Card, Grid, List } from "antd-mobile";
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
} from "antd-mobile-icons";
import idPic from "@/assets/idenity.png";
import styles from "./index.module.less";

const PersonalCenter = () => {
  const [isLogin, setIsLogin] = useState(false);

  const projects = [
    {
      label: "实名认证",
      isAuth: "",
      noAuth: "",
      key: "idCard",
    },
    {
      label: "学历认证",
      isAuth: "",
      noAuth: "",
      key: "education",
    },
    {
      label: "车认证",
      isAuth: "",
      noAuth: "",
      key: "car",
    },
    {
      label: "房产认证",
      isAuth: "",
      noAuth: "",
      key: "house",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.pInfo}>
        <div
          className={styles.thumb}
          style={{
            backgroundImage: !isLogin
              ? "url(//wx-img.jhrx.cn/xiangqin/2022/img/ic_my_avatar_1.png)"
              : "",
          }}
        ></div>
        <div className={styles.itemInfo}>
          <p className={styles.loginTitle}>注册/登录 <div className={styles.editInfoBtn}>编辑资料</div></p>
          <p className={styles.loginDesc}>登录后即可体验更多服务</p>
        </div>
      </div>

      <Card title="信息认证" className={styles.auth}>
        <Grid columns={4} gap={8}>
          {projects.map((item) => (
            <Grid.Item key={item.key} className={styles.authProject}>
              <div className={styles.authProjectLogo}>A</div>
              <div className={styles.authProjectName}>{item.label}</div>
            </Grid.Item>
          ))}
        </Grid>
      </Card>

      <Card className={styles.auth}>
       
        <List style={{
          '--border-bottom': 'none',
          '--border-top': 'none',
        }}>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
            我的相册
          </List.Item>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
            隐私设置
          </List.Item>
          <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
            用户协议
          </List.Item>
           <List.Item prefix={<SetOutline />} onClick={() => {}}>
            防骗提醒
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default PersonalCenter;
