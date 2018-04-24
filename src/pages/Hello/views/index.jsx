/**
 * @component index
 * @description Hello 容器
 * @time 2018/3/14
 * @author JOKER XU
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import HelloItem from './HelloItem'
import Counter from './Counter'
import { incrementAction, decreaseAction } from '../actions'
import styles from './index.less'

class Hello extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { list, counter, incrementAction, decreaseAction } = this.props
    const listProps = { list, incrementAction, decreaseAction }
    return (
      <div className={styles.hello}>
        <HelloItem {...listProps} />
        <Counter counter={counter} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { hello: list } = state
  let counter = 0
  list.forEach(value => {
    counter += Number(value.number)
  })
  return {
    list,
    counter,
  }
}

const mapDispatchToProps = ({
  incrementAction: incrementAction,
  decreaseAction: decreaseAction
})

export default connect(mapStateToProps, mapDispatchToProps)(Hello)

