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
          <div>
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
                  <div className={styles.memberBasicInfoRowCellInfo}>大专</div>
                </div>
              </Grid.Item>
              <Grid.Item>
                <div className={styles.memberBasicInfoRowCell}>
                  <div className={styles.memberBasicInfoRowCellIcon}>
                    <span className="iconfont icon-shimingrenzheng icon-primary"></span>
                  </div>
                  <div className={styles.memberBasicInfoRowCellInfo}>文员</div>
                </div>
              </Grid.Item>
              <Grid.Item span={2}>
                <div className={styles.memberBasicInfoRowCell}>
                  <div className={styles.memberBasicInfoRowCellIcon}>
                    <span className="iconfont icon-shimingrenzheng icon-primary"></span>
                  </div>
                  <div className={styles.memberBasicInfoRowCellInfo}>
                    现居：浙江省杭州市 户籍：河南省信阳息县
                  </div>
                </div>
              </Grid.Item>
            </Grid>
          </div>
        </div>
      </div>
      <div className={styles.memberBasicInfo}>
        <div className={styles.memberComonTitle}>详细资料</div>
        <Grid columns={2} gap={2}>
          <Grid.Item span={2}>
            <div className={styles.memberBasicInfoRowCell}>
              <div className={styles.memberBasicInfoRowCellIcon}>
                <span className="iconfont icon-shimingrenzheng icon-primary"></span>
              </div>
              <div className={styles.memberBasicTag}>月收入3000-5000</div>
              <div className={styles.memberBasicTag}>非独生</div>
            </div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className={styles.memberBasicInfoRowCell}>
              <div className={styles.memberBasicInfoRowCellIcon}>
                <span className="iconfont icon-shimingrenzheng icon-primary"></span>
              </div>
              <div className={styles.memberBasicTag}>已购房</div>
              <div className={styles.memberBasicTag}>为买车</div>
            </div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className={styles.memberBasicInfoRowCell}>
              <div className={styles.memberBasicInfoRowCellIcon}>
                <span className="iconfont icon-shimingrenzheng icon-primary"></span>
              </div>
              <div className={styles.memberBasicTag}>未婚</div>
              <div className={styles.memberBasicTag}>一年内结婚</div>
            </div>
          </Grid.Item>
        </Grid>
        <br />
        <div className={styles.memberComonTitle}>自我介绍</div>
        <div className={styles.memberComonDesc}>
          时间最会骗人，但也能让你明白，这个世界没有什么不能失去的，离去的都是风景，留下的才是人生，走到最后的，就是对的人。
        </div>
      </div>
      <div className={styles.memberBasicInfo}>
        <div className={styles.memberComonTitle}>TA希望你</div>
        <Grid columns={2} gap={2}>
          <Grid.Item span={2}>
            <div className={styles.memberBasicInfoRowCell}>
              <div className={styles.memberBasicInfoRowCellIcon}>
                <span className="iconfont icon-shimingrenzheng icon-primary"></span>
              </div>
              <div className={styles.memberBasicTag}>年龄不限</div>
              <div className={styles.memberBasicTag}>175以上</div>
            </div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className={styles.memberBasicInfoRowCell}>
              <div className={styles.memberBasicInfoRowCellIcon}>
                <span className="iconfont icon-shimingrenzheng icon-primary"></span>
              </div>
              <div className={styles.memberBasicTag}>本科</div>
              <div className={styles.memberBasicTag}>月薪3000以上</div>
            </div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className={styles.memberBasicInfoRowCell}>
              <div className={styles.memberBasicInfoRowCellIcon}>
                <span className="iconfont icon-shimingrenzheng icon-primary"></span>
              </div>
              <div className={styles.memberBasicTag}>离异带娃</div>
              <div className={styles.memberBasicTag}>住房不限</div>
            </div>
          </Grid.Item>
        </Grid>
      </div>
      <div className={styles.memberAlbumFooter}>
        <div className={styles.memberAlbumFooterItemLeft}>
        分享
        </div>
        <div className={styles.memberAlbumFooterItemRight}>
        红娘牵线
        <span>22</span>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetail;
