
//import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage () {

  const data = [
    { name : 'Orange', color: 'bg-orange-500' , score: 5},
    { name : 'Apple', color: 'bg-red-500' , score: 3},
    { name : 'Banana', color: 'bg-yellow-500' , score: 1},
    { name : 'Lime', color: 'bg-green-500' , score: 4}
    
  ];

  // If we want to add more columns inside the table, all we need to do is 
  // to add additional objects to the config array.

  // We can very well return a div as well from the render function.
  
  const config = [
    { 
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name
  
    },
    { 
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
    },
    { 
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score
    
    }
  ];

  // We are going to put the burden of creating unique keys for the 
  // rendered items on the developer.
  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div><SortableTable data = {data} config = {config} keyFn = { keyFn}/></div>
  );
}

export default TablePage;