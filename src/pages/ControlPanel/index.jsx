/**
 * @component ControlPanel
 * @description 控制器
 * @time 2018/1/15
 * @author jokerXu
 **/

import React, { Component } from 'react';
import Counter from './Counter';

class ControlPanel extends Component {

    constructor (props) {
        super(props);
        this.initValues = [
            {
                title: 'First',
                number: 0,
            },{
                title: 'Second',
                number: 10,
            },{
                title: 'Third',
                number: 20,
            }
        ];
        const initSumArr= this.initValues.map(value => value.number);
        this.state= {
            sum: initSumArr.reduce((a,b)=> (a+b))
        }
    }

    // 子组件更新state回调。
    onCounterUpdate= (newValue, previousValue)=>{
        const { sum }= this.state;
        const valueChange = newValue - previousValue;
        this.setState({ sum: sum+ valueChange});
    };

    // 遍历子组件
    mapCounter=() =>{
        return this.initValues.map((value,index)=>{
            return <Counter key={index} onUpdate={this.onCounterUpdate} initValue={value.number} caption={value.title} />;
        })
    };

    render() {
        return (
            <div>
                {this.mapCounter()}
                <hr/>
                <div>Total Count: {this.state.sum}</div>
            </div>
        )
    }
}

export default ControlPanel;