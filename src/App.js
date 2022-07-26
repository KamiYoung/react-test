// 组件 状态修改counter案例
import React from "react";

/**
 * 注意：
 * 你必须谨慎对待JSX回调函数中的this，在JavaScript中， class的方法默认不会绑定this。
 * 如果你忘记绑定this.handleClick并把它传入了onClick，当你调用这个函数的时候this的值为undefined。
 * 这并不是React特有的行为；这其实与JavaScript函数工作原理有关。通常情况下，如果你没有在方法后面添加（），例如onClick={this.handleClick}, 你应该为这个方法绑定this
 * */

class Counter extends React.Component {

    state = {
        count : 0
    }

    // 事件回调函数
    changeCount = () => {
        //修改count
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <button onClick={this.changeCount}>click:{this.state.count}</button>
        )
    }
}

function App () {
    return (
        <div>
            <Counter />
        </div>
    )
}

export default App