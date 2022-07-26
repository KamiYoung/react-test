import React from "react"

// 函数组件的创建和渲染
//创建
// 传递自定义参数
// 1. 只需要一个额外参数 {clickHandler} => {() =>clickHandler("自定义参数")}
// 2. 既需要e也需要额外的参数 { (e) => clickHandler(e, "自定义参数)}

function Hello(){
    // 单独自定义参数
    /*const clickHandler = (msg) => {
        console.log("函数组件中的事件被触发了", msg);
    }
    return <div onClick={ () => clickHandler("this is msg")}>click</div>*/
    // e + 自定义参数
    const clickHandler = (e, msg) => {
        console.log("函数组件中的事件被触发了", msg);
        console.log(e);
    }
    return <div onClick={ (e) => clickHandler(e, "this is msg")}>click</div>
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
