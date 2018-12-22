import React, { Component } from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      list: []
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    console.log(this.state.description)
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleChange={this.handleChange}
        />
        <TodoList />
      </div>
    );
  }
}
