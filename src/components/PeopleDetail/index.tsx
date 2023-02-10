import React from "react";
import styles from "./index.module.less";
import { useParams } from "react-router-dom";
import HomeBanner from "@/pages/Home/Banner";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Grid } from "antd-mobile";

const PeopleDetail = () => {
  const { id } = useParams();
  useDocumentTitle("嘉宾推荐");

  return (
    <div className={styles.member}>
      <div className={styles.memberAlbum}>
        <HomeBanner height={240} />
      </div>
      <div className={styles.memberBasicInfo}>
        <div className={styles.memberBasicInfoHeader}>
          <div className={styles.memberTitle}>
            <div className={styles.memberName}>
              <span className={styles.memberNickName}>刘亦菲</span>
              <span className={styles.membercert}></span>
            </div>
            <div className={styles.memberId}>相亲ID: 232919320</div>
          </div>
          <div className={styles.memberCare}>关注</div>
        </div>
        <div className={styles.memberBasicInfoRow}>
          <div className={styles.memberBasicInfoRow}>
            <Grid columns={2} gap={2}>
              <Grid.Item>
                <div className={styles.memberBasicInfoRowCell}>
                  <div className={styles.memberBasicInfoRowCellIcon}>
                    <span className="iconfont icon-shimingrenzheng icon-primary"></span>
                  </div>
                  <div className={styles.memberBasicInfoRowCellInfo}>
                    27岁 金牛座
                  </div>
                </div>
              </Grid.Item>
              <Grid.Item>
              <div className={styles.memberBasicInfoRowCell}>
                  <div className={styles.memberBasicInfoRowCellIcon}>
                    <span className="iconfont icon-shimingrenzheng icon-primary"></span>
                  </div>
                  <div className={styles.memberBasicInfoRowCellInfo}>
                    160cm | 48Kg
                  </div>
                </div>
              </Grid.Item>
              <Grid.Item>
              <div className={styles.memberBasicInfoRowCell}>
                  <div className={styles.memberBasicInfoRowCellIcon}>
                    <span className="iconfont icon-shimingrenzheng icon-primary"></span>
                  </div>
                  <div className={styles.memberBasicInfoRowCellInfo}>
                   大专
                  </div>
                </div>
              </Grid.Item>
              <Grid.Item>
              <div className={styles.memberBasicInfoRowCell}>
                  <div className={styles.memberBasicInfoRowCellIcon}>
                    <span className="iconfont icon-shimingrenzheng icon-primary"></span>
                  </div>
                  <div className={styles.memberBasicInfoRowCellInfo}>
                   文员
                  </div>
                </div>
              </Grid.Item>
              <Grid.Item span={2}>
              <div className={styles.memberBasicInfoRowCell}>
                  <div className={styles.memberBasicInfoRowCellIcon}>
                    <span className="iconfont icon-shimingrenzheng icon-primary"></span>
                  </div>
                  <div className={styles.memberBasicInfoRowCellInfo}>
                   现居：浙江省杭州市 
                   户籍：河南省信阳息县
                  </div>
                </div>
              </Grid.Item>
            </Grid>
          </div>
        </div>
      </div>
      <div className={styles.memberBasicInfo}>22</div>
          <div className={styles.memberBasicInfo}>22
          
          
          
          
            </div>
    </div>
  );
};

export default PeopleDetail;
