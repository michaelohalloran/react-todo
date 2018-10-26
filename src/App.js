import React, { Component } from 'react';
import './App.css';
import List from './List';
import Button from './Button';
import Input from './Input';
import SearchResults from './SearchResults';

//input or Search component
//button to add todo (Button component)
//search input (filtering) (another Search component?)
//trash/delete btn created next to each todo (List and Item components)

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      todos: [],
      value: '',
      searchText: '',
      searchResults: []
    };

  }

  handleSubmit = (e)=> {
    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: '',
    });
    e.preventDefault();

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

  handleDelete = (e)=> {
    e.preventDefault();
    console.log('hit delete event: ', e);
    console.log('currentTarget: ', e.currentTarget);
    console.log('currentTarget children: ', e.currentTarget.children[0]);
    console.log('currentTarget child text: ', e.currentTarget.children[0].innerHTML);
    console.log('e target: ', e.target);
    console.log('parent of target: ', e.target.value);
    console.log('parent of currentTarget: ', e.currentTarget.value);
    const newResults = this.state.todos.filter(todo=> todo !== e.currentTarget.children[0].innerHTML);
    this.setState({
      todos: newResults
    });


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

    const {searchResults} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <Input 
              name="todos"
              value={this.state.value}
              onChange={this.handleChange}
            />
          <Button value="Submit"/>
            <br />
            <br />
        </form>

        {/* <form name="searchResults" onSubmit={this.handleSearch}> */}
        <Input 
              // name="searchResults"
              name="searchText"
              value={this.state.searchText}
              onChange={this.filterItems}
            />
          {/* <Button value="Search"/> */}
        {/* </form> */}
        
        <List 
          todos={this.state.todos} 
          onDeleteClick={this.handleDelete}
        />

        <SearchResults input={searchResults}/>

      </div>
    );
  }
}

export default App;
