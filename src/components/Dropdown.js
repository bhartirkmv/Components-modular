import { useState, useEffect , useRef} from 'react';

import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';


function Dropdown ( {options, value, onChange} ) {
  // We want to show the options , only when the user clicks on the screen.
  const [isOpen , setIsOpen] = useState(false);

  // Name of divEl is the short form of div element.
  const divEl = useRef();

  // useEffect function will be called whenever our component is first 
  // rendered.
  useEffect(() => {

   // This event object describes the click that occured.
    const handler = (event) => {

      if(!divEl.current){
        return;
      }
      // This checks if the click is on the div element present in the reference.
      if(!divEl.current.contains(event.target)){
        setIsOpen(false);
      }
      
    };
    // We want to run the handler during the capture phase. The want to listen 
    // to the click event inside the whole of DOM.
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen ) => !currentIsOpen);
  };

  
  const handleOptionClick = (option) => {
    // CLOSE DROP DOWN 
    setIsOpen(false);

    // WHAT OPTION THE USER CLICKED ON ??
    onChange(option);

  };

  const renderedOptions = options.map((option) => {
    return (
      <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick = {() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  

  // || operator returns the first truthy value.
  return (
  <div ref={divEl} className='w-48 relative'>
      <Panel className='flex justify-between items-center cursor-pointer' onClick= {handleClick}>
        {value?.label || 'Select...'} 
        <GoChevronDown  className='text-lg'/>
      </Panel>
    { isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
  </div>)
}

export default Dropdown;