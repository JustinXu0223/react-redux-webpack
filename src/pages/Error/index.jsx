/**
 * @component Error
 * @description 错误页
 * @time 2018/3/9
 * @author jokerXu
 **/

import React from 'react';
import { Link } from 'react-router-dom'

const Error= () => (
    <div className="error-container" >
        <p />
        <div>
            <h2>404</h2>
            <p>抱歉,你访问的页面不存在</p>
            <Link to="/">返回首页</Link>
        </div>
    </div>
);

export default Error;

