import React from "react";
import TableCell from "./TableCell";

function TableRow(props) {
  let tableCells = [];
  
  for (let i = 0; i < props.numColumns; i++) {
    tableCells.push(<TableCell selectedColor={props.selectedColor} changeToColor={props.changeToColor} />)
  }
  
  return <tr>{tableCells}</tr>
}

export default TableRow;