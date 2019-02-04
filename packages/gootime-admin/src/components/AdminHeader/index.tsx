import * as React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import { Avatar } from 'antd';

const AdminHeader: React.FC<{ username: string }> = props => {
  return (
    <div className={styles.adminHeader}>
      <img src={logo} className={styles.logo} />
      <div className={styles.avatar}>
        <Avatar icon="user" />
        <span style={{ margin: '0 10px' }}>{props.username}</span>
      </div>
    </div>
  );
};

export default AdminHeader;
