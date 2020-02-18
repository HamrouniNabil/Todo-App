import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [{
      id:1,
      title: "fc bayern",
      completed : false
    },
    {
      id:2,
      title: "fc Chelsea",
      completed : false

    }
  ]
  };

  

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = (id) => {
    
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    
  };

  // Add Todo
  addTodo = (title) => {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false
        
      }
     
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

  render() {
    return (
    
        <div className="App">
          <div className="container">
            
          
              
                  <AddTodo addTodo={this.addTodo} />
                  <h1 className="mainText">Let's get some work done!</h1>
                  <hr/>
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                
              
            
                
          </div>
          
        </div>
    );
  }
}

export default App;
