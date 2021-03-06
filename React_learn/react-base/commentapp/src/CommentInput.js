import React from 'react';

class CommentInput extends React.Component {
   
    handleSubmit = () =>{
        const {userName,comment} = this.state;
        const {onSubmit} = this.props;
        console.log(userName,comment)
        onSubmit({
            userName,
            comment
        })
    }
    state = {
        userName:'',
        comment:''
    }
    handleUserNameChange = (e)=>{
        this.setState({
            userName:e.target.value
        })
    }
    handleCommentChange = (e)=>{
        this.setState({
            comment:e.target.value
        })
    }
render(){
    const {userName,comment} =this.state
    return(
        <div>
            <div>
                用户名：
                <input type="text" value={userName} onChange={this.handleUserNameChange} placeholder="请输入用户名"/>
            </div>
            <div>评论：
                <textarea name="" id="" cols="30" rows="10" onChange={this.handleCommentChange}></textarea>
            </div>
            <div>
                <button onClick = {this.handleSubmit}>评论</button>
            </div>
        </div>
    )
}
}

export default CommentInput;
