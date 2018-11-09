import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import SearchResults from './SearchResults';
import AddTodoForm from './AddTodoForm';
import SearchForm from './SearchForm';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      todos: [],
      value: '',
      updatingTodoText: '',
      updatingTodoIdx: null,
      todoErrorMsg: '',
      searchText: '',
      searchResults: []
    };
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    const {todos, value} = this.state;
    //disable submission of duplicates, if todos already contains this value
    //make array only of todo objects' text, check that for repeats
    const todoTextArr = todos.map(todo=>todo.text);
    if(todoTextArr.includes(value)) {
      this.setState({todoErrorMsg: 'You already added that todo'});
    } else {
      const todoObj = {
        id: this.state.todos.length + 1,
        text: this.state.value,
        editing: false,
      }
      this.setState({
        // todos: [...this.state.todos, this.state.value],
        todos: [...this.state.todos, todoObj],
        value: '',
        todoErrorMsg: ''
      });
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  }

  filterItems = e => {
    //return todos that include the text of what's being searched
    const filteredResults = this.state.todos.filter(todo=> {
      return e.target.value && todo.text.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log('filtered Results inside filterItems fn: ', filteredResults);
    //searchText is continuously updated to mirror what user is typing
    //searchResults array is set to be whatever user searches
    this.setState({
      // searchText: e.target.value
      [e.target.name]: e.target.value,
      searchResults: filteredResults
    });
  }

  // handleDelete = (e)=> {
  handleDelete = (removeIndex)=> {
    // console.log('removeIndex: ', removeIndex);
    const {todos} = this.state;
    const newTodos = todos.filter((todo,idx)=>todos[idx] !== todos[removeIndex]);
    this.setState({
      todos: newTodos
    });
  }

  handleEdit = (editIndex)=> {
    console.log('editIndex: ', editIndex);

    //make copies of whole todos and individual item we're editing:
    let editedTodos = [...this.state.todos];
    let singleTodo = {...editedTodos[editIndex]};
    //toggle the editing property
    singleTodo.editing = !singleTodo.editing;
    editedTodos[editIndex] = singleTodo;

    this.setState({
      todos: editedTodos,
      //this will be used as the input value and placeholder (so user can start typing from what the todo already says)
      updatingTodoText: singleTodo.text
    });
  }

  updateTodo = (e)=> {
    e.preventDefault();
    const {todos, updatingTodoText, updatingTodoIdx} = this.state;
    
    let singleTodo = {...todos[updatingTodoIdx], text: updatingTodoText, editing: false};
    // singleTodo.text = updatingTodoText;
    let updatedTodos = [...todos.slice(0,updatingTodoIdx), singleTodo, ...todos.slice(updatingTodoIdx+1)];
    console.log('singleTodo is :', singleTodo);
    console.log('updatedTodos are :', updatedTodos);

    this.setState({todos: updatedTodos, updatingTodoText: ''});
  }

  handleChangeTodo = (e, idx)=> {
    console.log('handleChange e.target.value:', e.target.value);
    console.log('handleChange todo text:', this.state.todos[idx].text);

    this.setState({
      updatingTodoText: e.target.value,
      updatingTodoIdx: idx
    });
  }
  
  render() {

    const {searchResults, searchText, value, todoErrorMsg, editing, updatingTodoText} = this.state;

    return (
      <div>
        <h1 className="title">Todo List</h1>

        <AddTodoForm 
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={value}
        />

        <SearchForm 
          name="searchText"
          onSearch={this.filterItems}
          searchText={searchText}
          value={value}
        />
        
        <TodoList 
          todos={this.state.todos} 
          onDeleteClick={this.handleDelete}
          onEditClick={this.handleEdit}
          editing={editing}
          msg={todoErrorMsg}
          updateTodo={this.updateTodo}
          handleChangeTodo={this.handleChangeTodo}
          updatingTodoText={updatingTodoText}
        />

        <SearchResults searchResults={searchResults}/>

      </div>
    );
  }
}

export default App;
