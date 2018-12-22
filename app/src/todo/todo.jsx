import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos';

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
    const { description } = this.state;

    axios.post(URL, { description }).then(res => console.log('Funcionou'));
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
