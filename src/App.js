import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import SearchResults from './SearchResults';
import AddTodoForm from './AddTodoForm';
import SearchForm from './SearchForm';

//button to add todo (Button component)
//search input (filtering) (another Search component?)
//trash/delete btn created next to each todo (List and Item components)

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      todos: [],
      value: '',
      todoErrorMsg: '',
      searchText: '',
      searchResults: []
    };

  }

  handleSubmit = (e)=> {
    e.preventDefault();
    //disable submission of duplicates, if todos already contains this value
    if(this.state.todos.includes(this.state.value)) {
      this.setState({todoErrorMsg: 'You already added that todo'});
    } else {
      this.setState({
        todos: [...this.state.todos, this.state.value],
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
      return e.target.value && todo.toLowerCase().includes(e.target.value.toLowerCase());
    });
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
    console.log('removeIndex: ', removeIndex);
    const {todos} = this.state;
    const newTodos = todos.filter((todo,idx)=>todos[idx] !== todos[removeIndex]);
    this.setState(state=>({
      todos: newTodos
    }));
    // e.preventDefault();
    // console.log('hit delete event: ', e);
    // console.log('currentTarget: ', e.currentTarget);
    // console.log('currentTarget children: ', e.currentTarget.children[0]);
    // console.log('currentTarget child text: ', e.currentTarget.children[0].innerHTML);
    // console.log('e target: ', e.target);
    // console.log('parent of target: ', e.target.value);
    // console.log('parent of currentTarget: ', e.currentTarget.value);
    //remove deleted todo
    // const newTodos = this.state.todos.filter(todo=> todo !== e.currentTarget.children[0].innerHTML);
    // this.setState({
    //   todos: newTodos
    // });
  }

  // handleSearch = e=> {
  //   e.preventDefault();
  //   const name = e.target.name;
  //   this.setState({
  //     [name]: [...this.state[name], this.state.searchText],
  //     searchText: ''
  //   });
  // }
  
  render() {

    const {searchResults, searchText, value, todoErrorMsg} = this.state;

    return (
      <div>
        
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
          msg={todoErrorMsg}
        />

        <SearchResults searchResults={searchResults}/>

      </div>
    );
  }
}

export default App;
