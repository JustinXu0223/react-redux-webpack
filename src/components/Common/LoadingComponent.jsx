/**
 * @component LoadingComponent.jsx
 * @description 加载组件
 * @time 2018/4/20
 * @author JOKER XU
 */
import React from 'react'
import { Icon } from 'antd'
import CSSModules from 'react-css-modules'
import styles from './LoadingComponent.css'

const LoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div styleName="loadBg"><Icon type="loading" size="lg" /></div>
  }
  // Handle the error state
  if (error) {
    return <div styleName="error">Sorry, there was a problem loading the page.</div>
  }

  return null
}

export default CSSModules(LoadingComponent, styles)
