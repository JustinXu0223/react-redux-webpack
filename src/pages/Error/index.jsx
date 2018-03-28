/**
 * @component index.jsx
 * @description 错误页
 * @time 2018/3/15
 * @author JOKER XU
 **/
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';
import styles from './index.less';
import Img from '../../assets/images/404.svg';

const Error = () => (
  <div className={styles.error}>
    <img src={Img} />
    <div className={styles.section}>
      <h2>404</h2>
      <p>抱歉,你访问的页面不存在</p>
      <Button type="primary">
        <Link to="/">返回首页</Link>
      </Button>
    </div>
  </div>
);

export default Error;

