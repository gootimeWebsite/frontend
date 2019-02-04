import * as React from 'react';
import { useState } from 'react';
import * as cookie from 'react-cookies';
import useReactRouter from 'use-react-router';
import { Layout } from 'antd';
import * as ReactQuill from 'react-quill';
import AdminHeader from '../../components/AdminHeader';
import AdminList from '../../components/AdminList';
import styles from './styles.module.scss';

const { Sider, Header, Footer, Content } = Layout;

const ArticlePage: React.FC = () => {
  const { history } = useReactRouter();
  const logout = () => {
    cookie.remove('token');
    history.replace('/login');
  };
  return (
    <div>
      <AdminHeader username="admin" />
      <Layout>
        <Sider theme="light" className={styles.sider}>
          <AdminList />
        </Sider>
        <Content>Content</Content>
      </Layout>
    </div>
  );
};

export default ArticlePage;
