import * as React from 'react';
import useReactRouter from 'use-react-router';
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import headerImg from '../../assets/header.png';
import { Avatar, Dropdown, Menu, Button } from 'antd';

console.log(headerImg);

const MyHeader: React.FC<{ username: string }> = props => {
  const { history } = useReactRouter();
  const logout = () => {
    console.log('logout');
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
    <div
      className={styles.header}
      style={{ backgroundImage: 'url(' + headerImg + ')' }}
    >
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

export default MyHeader;
