import React from 'react'
class Child extends React.Component{
    state={
        childCount:0
    }
    handleChildCountChange = () =>{
        let {childCount} = this.state;
        childCount++;
        this.setState({
            childCount
        })
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
       this.interval= setInterval(()=>{
            console.log('child set')
        },1000)
    }
    // props更新 
    shouleComponentUpdate(nextProps,nextState){
      if(nextProps.count !== this.props.count){
          return true;
      }
        return  true;
    }
    componentWillUnmount(){
        console.log(1)
    }
    componentWillUpdate(){
        clearInterval(this.interval)
        console.log(2)
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    render(){
        const {count} = this.props;
        const {childCount} = this.state;
        return(
            <div>child Component
                count:{count}
                childCount:{childCount}
                <button onClick={this.handleChildCountChange}>13132</button>
            </div>
        )
    }
}
export default Child