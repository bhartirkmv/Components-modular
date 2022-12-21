import { Fragment } from 'react';

// This fragment component is like an echo component. It returns a jsx element of 
// What ever component that has been placed inside of the children. 
// Whenever we come across a situation where we need to assign a key prop
// We are going to use this Fragment.

function Table ( { data, config, keyFn } ) {


  // The jsx elements whenever they are part of a list must have a key prop.
  const renderedHeaders = config.map((column) => {

    // Every time the Table component runs we need to return a jsx element with a key 
    // prop assigned to it.
    // We do not want other engineers to assign this key prop seperately.
    if(column.header) {
      // We want to put a jsx element over here, Just so that we can assign a key 
      // prop to it. But we do not want to display an HTML element to the DOM.
      return <Fragment  key = {column.label}>{column.header()}</Fragment>;
    }
    return <th key= {column.label}>{column.label}</th>
  });

  // The biggest issue for reusability that i can see here 
  // is regarding the size of the table. That we need to know is we 
  // are going to use this approach.

  // We should not have variables named fruit, because that kind of implies that 
  // This component works only with fruit elements.


  const renderedRows = data.map((rowData) => {

    const renderedCells = config.map((column) => {
      return(
        <td className="p-2" key = {column.label}> {column.render(rowData)} </td>
      );
    });

    return (
      <tr className="border-b" key = {keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  );
}

export default Table;