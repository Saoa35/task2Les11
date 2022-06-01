import React from 'react';
import List1 from '../List1/List1';
import List2 from '../List2/List2';
import './App.css';
import faker from 'faker';
import { v4 } from 'uuid';


class App extends React.Component {

  state = {
    items: [],
    flag: true
  }

  constructor(props) {
    super(props);

    for(let i = 0; i < 10; i++) {
      this.state.items.push({
        item: faker.internet.userName(),
        id: v4()
      })
    }
  }

  changeListType() {
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    return (
      <div className="App">

        <button onClick={this.changeListType.bind(this)}>Change List Type</button>
          <br/>
        <button>Add to end</button>
          <br/>
        <button>Add to start</button>
          <br/>
       {this.state.flag ? <List1 items={this.state.items}/> : <List2 items={this.state.items}/>}

      </div>
    );
  }
}

export default App;
