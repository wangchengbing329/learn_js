import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
// 应用的状态
// 任何可以从应用状态中推导出来的东西，都应该自动地推导出来
// {text:'', complete:false, id: }
let id = 0;
class Store {
  @observable todos = [];
  @action
  addTodo(text) {
    this.todos.push({
      text,
      completed: false,
      id: id ++
    })
  }
}
const store = new Store();

@observer
class TodoList extends Component {
  state = {  }
  handleSubmit = () => {
    const value = this.inputNode.value.trim();
    if (value) {
      store.addTodo(value);
    }
  }
  render() { 
    return (
      <div>
        <div>
          <input type="text" ref={node => this.inputNode = node}/>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
            store.todos.map((todo, index) => {
              return <li>
                {todo.text}
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}
 
export default TodoList;
