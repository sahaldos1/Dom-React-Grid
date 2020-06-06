import React, { Component } from "react";
import TableRow from "./TableRow";


class Table extends Component {
  // Overall the table is composed of a bunch of rows which are composed of a bunch of cells. The number of cells in a row is equal to its amount of columns and the number of rows is equal to its amount of rows. 

  //table has three properties, the number of rows, the number of columns and the color that you want to shade a cell as
  constructor() {
    super();
    this.state = {
      numRows: 1,
      numColumns: 1,
      selectedColor: "blue"
    }
  }


  //these functions add/remove columns. This is done by setting the state of these props as one less or one more than what it is
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



  //choose and changeTo color functions deal with shading in the selected boxes with whatever color you select. Chooe color is from a drop down form, as soon as you click the color you want from that form, it calls this function and sets the selected color to the value of what color you clicked

  chooseColor = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  //this function reacts to a click on a specifc table cell. As soon as you click, it turns the background of that cell into the selected color from earlier
  changeToColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
  }

  render() {

    //render the object we want to create which is a table. This generates a table from tablerows. Table rows contain as many cells as there are columns. to generate a table we need to put as many table rows as there are rows so this function iterates and creates a table. each row gets the number of columns and color functions passed to it.
    let tableRows = [];

    for (let i = 0; i < this.state.numRows; i++) {
      tableRows.push(<TableRow numColumns={this.state.numColumns} selectedColor={this.state.selectedColor} changeToColor={this.changeToColor} />);
    }

    return (

      //returns buttons and selector and table full of table rows
      <div>
        <button onClick={this.addRow}>Add Row</button>{" "}
        <button onClick={this.removeRow}>Remove Row</button>{" "}
        <button onClick={this.addColumn}>Add Column</button>{" "}
        <button onClick={this.removeColumn}>Remove Column</button>{" "}
        <select onChange={this.chooseColor}>
          <option value="blue">blue</option>
          <option value="lightcoral">uncolor</option>
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