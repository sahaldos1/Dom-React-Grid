import React from 'react';
import './App.css';
import Table  from "./Components/Table.js";

function App() {

  //returns a heading and the table object
  return (
    <div className="App">
      <div className="containAll">
      <h1>Create your Table</h1>
      <header className="Table">
        <center><Table /></center>
      </header>
      </div>
    </div>
  );
}

export default App;