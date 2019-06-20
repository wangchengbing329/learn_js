import React from 'react'
class Child1 extends React.Component{
    state={
        a:1
    }
    /**
     * 更新state
     * 根据返回值{}
     * null 不更新
     * 必须return
     *  */
    /**
     * 以前 willMount props setState
     * @param {*} props 
     * @param {*} state 
     */
    static  getDerivedStateFromProps(props,state){
        console.log('getDev')
        return {
            ...props,
            ...state
        };

    }
    componentDidMount(){
        console.log('componentDid')
    }
    // 更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdat')
        return  true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
        return 888;
    }
    componentDidUpdate(preProps,preState,a){
        // a === undefined 15.x 版本
        // a === getSnapshotBeforeUpdate() 16.x
        console.log('a',a)
    }
    stateChange = ()=>{
        this.state({
            a:10
        })
    }
    render(){
        console.log('渲染的时候',this.state)
        return(
            <div>child1 component
            <button onClick={this.stateChange}>changeState</button>
                count:{this.props.count}
            </div>
        )
    }
}
export default Child1