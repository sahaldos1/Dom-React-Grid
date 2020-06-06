import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      numRows: 1,
      numColumns: 1,
      selectedColor: "blue"
    }
  }

  addRow = () => {
    this.setState({numRows: this.state.numRows + 1})
  }

  removeRow = () => {
    this.setState({numRows: this.state.numRows - 1});
  }

  addColumn = () => {
    this.setState({numColumns: this.state.numColumns + 1})
  }

  removeColumn = () => {
    this.setState({numColumns: this.state.numColumns - 1});
  }

  chooseColor = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  changeToColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
  }

  render() {
    let tableRows = [];

    for (let i = 0; i < this.state.numRows; i++) {
      tableRows.push(<TableRow numColumns={this.state.numColumns} selectedColor={this.state.selectedColor} changeToColor={this.changeToColor} />);
    }

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>{" "}
        <button onClick={this.removeRow}>Remove Row</button>{" "}
        <button onClick={this.addColumn}>Add Column</button>{" "}
        <button onClick={this.removeColumn}>Remove Column</button>{" "}
        <select onChange={this.chooseColor}>
          <option value="blue">blue</option>
          <option value="white">white</option>
          <option value="red">red</option>
          <option value="black">black</option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
        </select>
        <table>
          {tableRows}
        </table>
      </div>
    )
  }
}

export default Table;