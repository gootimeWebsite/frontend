import * as React from 'react';
import { useState } from 'react';
import * as cookie from 'react-cookies';
import useReactRouter from 'use-react-router';
import { Layout } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image'
  ];

  return (
    <div>
      <AdminHeader username="admin" />
      <Layout>
        <Sider theme={'light'} className={styles.sider}>
          <AdminList />
        </Sider>
        <Content>
          <ReactQuill
            className={styles.quill}
            theme={'snow'}
            modules={modules}
            formats={formats}
          />
        </Content>
      </Layout>
    </div>
  );
};

export default ArticlePage;
