import React from "react";
import TableCell from "./TableCell";

function TableRow(props) {

  //table row accepts properties of its parent table and uses them to generate table cells. table rows are full of table cells and each row has as many cells as there are columns. So we iterate and create an entire row of cells with the color functions passed to them. then return a row for use in our table.
  let tableCells = [];
  
  for (let i = 0; i < props.numColumns; i++) {
    tableCells.push(<TableCell selectedColor={props.selectedColor} changeToColor={props.changeToColor} />)
  }
  
  return <tr>{tableCells}</tr>
}

export default TableRow;