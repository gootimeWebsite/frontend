import * as React from 'react';
import styles from './styles.module.scss';
import { List } from 'antd';

const AdminList: React.FC<{ data?: {} }> = props => {
  const { data } = props;
  return (
    <div className={styles.adminList}>
      <List renderItem={data} />
    </div>
  );
};

export default AdminList;
