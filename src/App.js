// Import 'react' and 'nanoid' libraries
import React from 'react';
import nanoid from 'nanoid';
// Import 'TodoList', 'AddTodoForm' and 'FilterSelect' components
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { FilterSelect } from './FilterSelect';
// Function to create the OBJECT of TODO model
const createTodo = (text, done) => ({
  id: nanoid(),
  text,
  done
});
// ???
const FILTERS = {
  all: { label: 'All', filterFunction: () => true },
  done: {
    label: 'Done only',
    filterFunction: todoModel => todoModel.done === true
  },
  notDone: {
    label: 'Not Done only',
    filterFunction: todoModel => todoModel.done === false
  }
};
// ???
class TodoApp extends React.Component {
  // ???
  state = {
    todos: [],
    filteredTodos: [],
    activeFilter: 'all'
  };
  // ???
  constructor(p) {
    super(p);
    console.log(this.state);
  };
  // ???
  addTodo(text) {
    const newTodo = createTodo(text, false);
    const newTodosForState = [...this.state.todos, newTodo];
    this.setState({ todos: newTodosForState });
  };
  // ???
  setFilter(filter) {
    this.setState({ activeFilter: filter });
  };
  // ???
  get filteredTodos() {
    return this.state.todos.filter(
      FILTERS[this.state.activeFilter].filterFunction
    );
  };
  // ???
  deleteTodo(model) {
    const newTodos = [...this.state.todos];
    newTodos.splice(newTodos.indexOf(model), 1);
    this.setState({ todos: newTodos });
  };
  // ???
  changeTodoDone(model, newDone) {
    const newTodos = [...this.state.todos];
    newTodos[newTodos.indexOf(model)].done = newDone;
    this.setState({ todos: newTodos });
  };
  // ???
  componentDidMount() {
    const storedState = localStorage.getItem('TODO_APP_STATE');
    if (storedState) {
      this.setState(JSON.parse(storedState));
    }
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('TODO_APP_STATE', JSON.stringify(this.state));
    });
  };
  // ???
  render = () => (
    <div>
      <h1>To be done:</h1>
      <FilterSelect
        filters={FILTERS}
        value={this.state.activeFilter}
        onChange={filter => this.setFilter(filter)}
      />
      <hr />
      <TodoList
        todos={this.filteredTodos}
        onDelete={model => this.deleteTodo(model)}
        onDoneChanged={(model, done) => this.changeTodoDone(model, done)}
      />
      <AddTodoForm onSubmit={text => this.addTodo(text)} />
    </div>
  );
};
// ???
export default TodoApp;