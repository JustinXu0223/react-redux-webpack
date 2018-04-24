/**
 * @component index.jsx
 * @description 登陆 容器
 * @time 2018/4/19
 * @author JOKER XU
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Input } from 'antd'
import CSSModules from 'react-css-modules'

import logoImg from '../images/logo.svg'
import styles from './index.css'

const FormItem = Form.Item

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  // 点击确定
  handleOk = () => {
    const { form: { validateFieldsAndScroll } } = this.props
    validateFieldsAndScroll((err, { username, password }) => {
      if (err) return false
      this.setState({ loading: true })
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
    const { loading } = this.state
    return (
      <div styleName="container">
        <div styleName="view">
          <div styleName="head">
            <img styleName="logo" src={logoImg} />
            <span styleName="title">Back Login</span>
          </div>
          <div styleName="section">
            <form style={{ width: '80%' }}>
              <FormItem hasFeedback>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<Input size="large" onPressEnter={this.handleOk} placeholder="请输入用户名" />)}
              </FormItem>
              <FormItem hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      hasFeedback: true,
                    },
                  ],
                })(<Input size="large" type="password" onPressEnter={this.handleOk} placeholder="请输入密码"/>)}
              </FormItem>

              <Button
                styleName="submit"
                type="primary"
                size="large"
                onClick={this.handleOk}
                loading={loading}
              >
                登录
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

SignIn.propTypes = {
  form: PropTypes.object.isRequired,
}

export default Form.create()(CSSModules(SignIn, styles))
