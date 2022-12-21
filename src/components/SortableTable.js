import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from "./Table";
import useSort from '../hooks/use-sort';


// We are passing down all the props to the Table component
function SortableTable (props) {
  const { config , data } = props;

  const { sortBy , sortOrder, setSortColumn, sortedData} = useSort(data, config);
  const updatedConfig = config.map((column) => {

    if(!column.sortValue) {
      return column;
    }
    // If we have a sortValue property then we need to customize the column 
    // to add in the header function, which decides how the header will be 
    // displayed.
    return {
      ...column,
      header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => setSortColumn(column.label)}>
        <div className='flex items-center'>
          { getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
        
      </th>
    }
  });

  

  // Because we are listing out the config property later on in this element
  // the config property inside of the props will be updated.
  return <Table {...props } data= {sortedData}  config = {updatedConfig}/>;
}

function getIcons(label, sortBy, sortOrder){
  if(label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if(sortOrder === null ) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  else if( sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  }
  else if(sortOrder === 'desc'){
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }


}

export default SortableTable;