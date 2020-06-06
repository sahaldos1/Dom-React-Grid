import React from "react";

function TableCell(props) {
  //the most basic part of the table is our table cell. this takes in properties from its parent and generates a data cell for our table (<td></td>). On clicking the cell it calls the changeToColor function which changes the background color of the cell. Each cell has a O in it to identify it.
  return <td onClick={props.changeToColor}>O</td>
}

export default TableCell;