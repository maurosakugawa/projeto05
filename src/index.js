
import React from 'react';
import { render } from 'react-dom';
import Form from './Form';
import Tabela from './Tabela';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      pessoas: [],
      lista: []
    };
  }

  add = (pessoas) => {
    console.log('App', pessoas)
    this.setState({
      pessoas: pessoas
    })
  }

  render() {
    return (
      <div>
        <Form add={this.add} />
        <Tabela lista={this.state.pessoas} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
