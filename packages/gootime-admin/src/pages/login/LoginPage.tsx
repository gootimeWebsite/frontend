import * as React from 'react';
import { useState } from 'react';
import Login from 'ant-design-pro/lib/Login';
import { Alert } from 'antd';
import * as cookie from 'react-cookies';
import useReactRouter from 'use-react-router';
import styles from './styles.module.scss';

const { Tab, UserName, Password, Submit } = Login as any; //FIXME: miss a default in .d.ts

const LoginPage: React.FC = () => {
  const [notice, setNotice] = useState('');
  const { history } = useReactRouter();

  const onSubmit = (err: any, values: any) => {
    console.log('value collected ->', { ...values });
    setNotice(() => {
      if (
        !err &&
        (values.username !== 'admin' ||
          values.password !== process.env.REACT_APP_ADMIN_PASSWORD)
      ) {
        setTimeout(() => {
          setNotice('The combination of username and password is incorrect!');
        }, 500);
      } else {
        cookie.save('token', '123123', {
          // maxAge: 1000
          // secure: true,
          // httpOnly: true
        });
        history.replace('/article');
      }
      return '';
    });
  };

  return (
    <div className={styles.loginPage}>
      <Login defaultActiveKey={'tab1'} onSubmit={onSubmit}>
        <Tab key="tab1" tab="密码登录">
          {notice && (
            <Alert
              style={{ marginBottom: 24 }}
              message={notice}
              type="error"
              showIcon
              closable
            />
          )}
          <UserName name="username" placeholder="请输入用户名" />
          <Password name="password" placeholder="请输入密码" />
        </Tab>
        <Submit>Login</Submit>
      </Login>
    </div>
  );
};

export default LoginPage;
