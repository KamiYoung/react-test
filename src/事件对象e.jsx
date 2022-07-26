import React from "react"

// 函数组件的创建和渲染
//创建爱你

function Hello(){
    const clickHandler = (e) => {
        // 阻止默认行为
        e.preventDefault();
        console.log("函数组件中的事件被触发了", e);
    }
    return <div><a  onClick={clickHandler} href="http://baidu.com">百度</a></div>
}

function App() {
    return (
        <div>
            {/* 渲染Hello组件 */}
            <Hello />
            <Hello></Hello>
        </div>
    );
}

export default App;
