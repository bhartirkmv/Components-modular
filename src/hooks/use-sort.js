
import { useState } from 'react';

function useSort (data, config) {
  // Whenever our state changes, we need to resort the table data and 
  // pass it into the table component.

  // We need to figure out what state we should have and design it.
  // null value indicates that the table by default is unsorted.
  const [sortOrder, setSortOrder] = useState(null);

  // sortBy is going to keep track of what column we are currently sorting by.
  const [sortBy, setSortBy] = useState(null);

  // In the handle click, whatever the label is , we have a set pattern which is 
  // It goes from ascending --> Descending --> unsorted. But that should not be the
  // behaviour when we have some sorting in descending order and then 
  // We happen to click on another label and all the sorting goes to null.
  // Ideally we should sort on that column in ascending order.
  const setSortColumn = (label) => {

    // If sortBy is defined, that is also one of the conditions.
    if(  sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      // After this logic, we return early.
      return;
    }
    if(sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    }
    else if ( sortOrder === 'asc'){
      setSortOrder('desc');
      setSortBy(label);
    }
    else if (sortOrder === 'desc'){
      setSortOrder(null);
      // In this case, It does not really matter which column the user clicked on
      // Because we are going to revert back to the initial state.
      setSortBy(null);
    }
  };

  // Only sort data if sortOrder && sortBy are not null.
  // Make a copt of the data prop. Create a new array. 
  // We need to figure out what our sortValue function is and use it for sorting.
  let sortedData = data;

  if( sortBy && sortOrder) {
    // We need to find the correct sortValue function 

    const { sortValue } = config.find(column => column.label === sortBy);

    // We can now modify this data property and we are not modifying a prop
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if(typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
      else {
        return (valueA-valueB) * reverseOrder;
      }


    });
  }
  return {
    sortBy,
    sortOrder,
    setSortColumn,
    sortedData
  }
}

export default useSort;