import React from 'react';
import List1 from '../List1/List1';
import List2 from '../List2/List2';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <List1/>
       <List2/>
      </div>
    );
  }
}

export default App;
