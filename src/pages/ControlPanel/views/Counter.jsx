/**
 * @component Counter
 * @description 子组件
 * @time 2018/1/15
 * @author jokerXu
 **/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*** 暂时去掉stateless组件写法
 const Counter= ({ caption, initValue= 0 })=> {
    return (
        <div>
            {caption}, {initValue}
        </div>
    )
}

 export default Counter*/

class Counter extends Component {
  constructor (props) {
    super(props)

    // this.clickIncrementHandler= this.clickIncrementHandler.bind(this)
    // this.clickDecrementHandler= this.clickDecrementHandler.bind(this)

    this.state = {
      count: props.initValue,
    }
    // console.log(`enter constructor, ${this.props.caption}`)
  }

  // clickDecrementHandler(){}

  /*componentWillMount() {
      console.log(`enter componentWillMount,${this.props.caption}`)
  }*/

  /*componentDidMount() {
      console.log(`enter componentDidMount,${this.props.caption}`)
  }*/
  componentWillReceiveProps (nextProps) {
    console.log(`enter componentWillReceiveProps,${nextProps.caption}`)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
  }

  // clickIncrementHandler(){}
  clickIncrementHandler = () => {
    this.updateCount(true)
  }
  clickDecrementHandler = () => {
    this.updateCount(false)
  }
  updateCount = (bool) => {
    const previousValue = this.state.count
    const newValue = bool ? previousValue + 1 : previousValue - 1
    this.setState({ count: newValue })
    this.props.onUpdate(newValue, previousValue)
  }

  render () {
    console.log(`ControlPanel render, ${this.props.caption}`)
    const buttonStyle = {
      marginRight: '15px',
    }
    const { caption } = this.props
    const { count } = this.state
    return (
      <div>
        <button style={buttonStyle} onClick={this.clickIncrementHandler}>+</button>
        <button style={buttonStyle} onClick={this.clickDecrementHandler}>-</button>
        <span>{caption} count: {count}</span>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number.isRequired,
  onUpdate: PropTypes.func,
}

Counter.defaultProps = {
  // initValue: 0,
  onUpdate: f => f //默认是一个什么都不做的函数
}

export default Counter

