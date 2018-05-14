import React, { Component } from 'react';

let todosList = [
  {
    id: "id1",
    title: "Todo 1st",
    done: true,
  },
  {
    id: "id2",
    title: "Todo 2nd",
    done: false,
  },
  {
    id: "id3",
    title: "Todo 3ed",
    done: false,
  }
];

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosList
    }
  }

  addTodo = (a) => {
    a.preventDefault();
    if(a.target[0].value !== "") {
      let pushedTodo = todosList.unshift({
        id: "id"+a.target[0].value,
        title: a.target[0].value,
        done: false,
      });
      console.log(todosList);
      this.setState({todos: todosList}, () => { console.log(this.state.todos)});
    } else {
      alert("Nedá sa pridať prázdny Todo");
    }
  }

  checkTodo = (a, e) => {
    let updatedTodos = todosList.filter((todo) => {
      if (todo.id === a) {
        todo.done = e.target.checked;
      }
      return true;
    });
    todosList = updatedTodos;
    this.setState({todos: todosList});
   }

  deleteTodo = (a) => {
    let updatedTodos = todosList.filter((todo) => {
      return todo.id !== a;
    });
    todosList = updatedTodos;
    this.setState({todos: todosList});
  }

  updateTodo = (a, b) => {
    let updatedTodos = this.state.todos.filter((todo) => {
      if (todo.id === a) {
        todo.title = b.target.value;
        todo.edit = false;
      }
      return true;
    });
    this.setState({todos: updatedTodos}, () => { console.log(this.state.todos) });
  }

  renderTodos = data => data.map((todo, i) => {
    return (
      <li className={"todo"+(todo.done ? " done" : "" )} key={ todo.id }>
        <label class="checkbox">
          <input type="checkbox" name={"taks"+i} defaultChecked={ todo.done } onClick={ this.checkTodo.bind(this, todo.id) } />
          <span>✓</span>
        </label>
        <input onBlur={ this.updateTodo.bind(this, todo.id) } defaultValue={ todo.title } focused={"true"}/>
        <button className={"delete"} type={"button"} onClick={ this.deleteTodo.bind(this, todo.id) }>X</button>
      </li>
    )
  })

  render() {

    let Todos = this.renderTodos(this.state.todos);

    return (
      <div>
        <h2>MyTodos:</h2>
        <form onSubmit={ this.addTodo }>
          <input placeholder={"Todo"}/><button type={"submit"}>Pridať</button>
        </form>
        <ul className={"todos"}>
          { Todos }
        </ul>
      </div>
    );
  }
}
