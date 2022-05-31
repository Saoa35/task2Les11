import React from 'react';
import List1 from '../List1/List1';
import List2 from '../List2/List2';
import './App.css';

class App extends React.Component {

  state = {
    items: [],
    flag: true
  }

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">

        <button>Change List Type</button>

        <button>Add to end</button>

        <button>Add to start</button>

       {this.state.flag ? <List1 items={this.state.items}/> : <List2 items={this.state.items}/>}

      </div>
    );
  }
}

export default App;
