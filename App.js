import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Notes</h2>
        </div>
        <form>
        <label>
          Title:
          <input type="text" />
          {"\n"}
          {"\n"}
          Author:
          <input type="text" />
          {"\n"}
          {"\n"}
          Message:
          <input type="text" />
          {"\n"}
          {"\n"}
        </label>
        {"\n"}
        <input className="button" type="submit" value="Submit" />
        {"\n"}
        <input className="delete" type="delete" value="Delete note" />
      </form>
 
      </div>
    );
  }
}

export default App;
