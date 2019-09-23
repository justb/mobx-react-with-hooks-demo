import { createContext } from "react";
import Axios from "axios";
import { decorate, observable, computed, flow, action } from "mobx";

// 对window对象进行处理，区分服务器端和客户端，然后在做相应的数据处理

export class Todos {
  todos = [
    { id: 1, name: "Buy eggs", completed: true },
    { id: 2, name: "Write a post", completed: false }
  ];
  constructor() {
    // this.todos = window.todos
    this.getTodos(1);
  }
  get remainingTodos() {
    return this.todos.filter(t => !t.completed).length;
  }

  changeItem(index) {
    console.log(index);
    this.todos[index].completed = !this.todos[index].completed;
  }
  async getTodos() {
    try {
      let a = await Axios.get(
        "https://www.fastmock.site/mock/871b3e736e653b99374b7713e4011f9f/boss/user/list"
      );
      console.log(a.data.data.userList);
      this.todos = this.todos.concat(a.data.data.userList);
      window.todos = this.todos;
    } catch (error) {
      this.todos = [];
    }
  }
}

decorate(Todos, {
  todos: observable
  // getTodos: action
});

export default Todos;
