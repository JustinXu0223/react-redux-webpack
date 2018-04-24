/**
 * @component list
 * @description helloItem组件
 * @time 2018/3/14
 * @author JOKER XU
 */
import React from 'react'
import { Button } from 'antd'
import styles from './helloItem.less'

const HelloItem = ({ list = [], incrementAction, decreaseAction }) => {
  const mapList = () => {
    if (list.length === 0) {
      return null
    }
    return list.map(value => (
      <div key={value.id}>
        <div className={styles.title}>{value.title}:</div>
        <div className={styles.item}>
          <Button type="primary" onClick={() => decreaseAction(value.id)}>-</Button>
          {value.number}
          <Button type="primary" onClick={() => incrementAction(value.id)}>+</Button>
        </div>
      </div>
    ))
  }

  return (<div>{mapList()}</div>)
}

export default HelloItem
