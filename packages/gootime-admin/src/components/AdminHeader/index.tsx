import * as React from 'react';
import * as cookie from 'react-cookies';
import useReactRouter from 'use-react-router';
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import { Avatar, Dropdown, Menu, Button } from 'antd';

const AdminHeader: React.FC<{ username: string }> = props => {
  const { history } = useReactRouter();
  const logout = () => {
    cookie.remove('token');
    history.replace('/login');
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={logout} type="primary">
          登出
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.adminHeader}>
      <img src={logo} className={styles.logo} />
      <Dropdown overlay={menu}>
        <div className={styles.avatar}>
          <Avatar icon="user" />
          <span style={{ margin: '0 10px' }}>{props.username}</span>
        </div>
      </Dropdown>
    </div>
  );
};

export default AdminHeader;
