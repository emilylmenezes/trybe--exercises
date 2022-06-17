import React from 'react';
import './App.css';

    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }

    const tasks = ['Ler um livro', 'Colocar café', 'Estudar', 'Dormir'];

    class App extends React.Component {
      render() {
        return (
          <ol>{ tasks.map(elements => Task(elements)) }</ol>
        );
      }
    }

    export default App;