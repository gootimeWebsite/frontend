import * as React from 'react';
import { useState } from 'react';
import { Layout, Row, Col, Input, Button, Select } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AdminHeader from '../../components/AdminHeader';
import AdminList from '../../components/AdminList';
import styles from './styles.module.scss';

const { Sider, Content } = Layout;
const { Option } = Select;

const groups = [
  ['entertainment', '娱乐'],
  ['video', '影视'],
  ['fasion', '时尚'],
  ['makeup', '美妆'],
  ['activity', '活动'],
  ['bibi', '哔哔']
];

export type ArticleType = {
  title: string;
  group: 'entertainment' | 'video' | 'fasion' | 'makeup' | 'activity' | 'bibi';
  author: string;
  content: string;
};

const defaultForm: ArticleType = {
  title: '',
  group: 'entertainment',
  author: '',
  content: ''
};

const ArticlePage: React.FC = () => {
  const [form, setForm] = useState<ArticleType>(defaultForm);

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

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newForm = { ...form, title: e.target.value };
    setForm(newForm);
  };

  const handleAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newForm = { ...form, author: e.target.value };
    setForm(newForm);
  };

  const handleGroup = (value: string[]) => {
    const newForm = { ...form, group: value[0] };
    setForm(newForm as ArticleType);
  };

  const saveArticle = () => {
    console.log('save form', form);
  };

  return (
    <div>
      <AdminHeader username="admin" />
      <Layout>
        <Sider theme={'light'} className={styles.sider}>
          <AdminList />
        </Sider>
        <Content className={styles.content}>
          <Row>
            <Col span={1}>
              <span>标题:</span>
            </Col>
            <Col span={10}>
              <Input onChange={handleTitle} placeholder={'请输入标题'} />
            </Col>
            <Col span={9}>
              <Button type={'primary'} onClick={saveArticle}>
                保存
              </Button>
            </Col>
            <Col span={2}>
              <Button type={'primary'} onClick={saveArticle}>
                保存草稿
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={1}>
              <span>分组:</span>
            </Col>
            <Col span={10}>
              <Select defaultValue={groups[0]} onSelect={handleGroup}>
                {groups.map(group => (
                  <Option key={group[0]} value={group[0]}>
                    {group[1]}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col span={1}>
              <span>作者:</span>
            </Col>
            <Col span={10}>
              <Input onChange={handleAuthor} placeholder={'请输入作者'} />
            </Col>
          </Row>
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
