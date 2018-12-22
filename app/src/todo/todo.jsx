import React, { Component } from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class todo extends Component {
  constructor() {
    super();

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm handleAdd={this.handleAdd} />
        <TodoList />
      </div>
    );
  }
}
