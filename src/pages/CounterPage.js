import produce from 'immer';

import { useReducer } from 'react';

import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';


// The action value will be anything that i provided to the dispatch function.
// In our case right now, action is undefined.
const reducer = (state, action) => {

  // default means we get an action ,which our program is not expecting.
  // Two lines of thought on default.
  // 1. If you enter defsault that means there is some error in your code-- Throw error

  // 2. Other people say that if we go to default, just return the previous state.

  switch(action.type) {
    case INCREMENT_COUNT:
        state.count = state.count +1;
        return;
            
    case SET_VALUE_TO_ADD:
      state.valueToAdd= action.payload;
      return;
           
    case DECREMENT_COUNT: 
        state.count = state.count -1;
        return;
              
           
    case ADD_VALUE_TO_COUNT:
        state.count = state.count + state.valueToAdd;
        state.valueToAdd = 0;
        return;
      
    // In the default case , we do not need to return anything
    // So, we will return a value of state.
    default: 
      return;
  }
};

function CounterPage ( {initialCount} ) {
  // With useReducer we are always going to call the setter function as dispatch.
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = ()=> {
    dispatch({
      type: INCREMENT_COUNT,
    
    });
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  }

  // Whenever an event handler is called, It is called with an event value.
  const handleChange = (event) => {
    
    // ParseInt is used to convert a string into a number.
    // If we wanted a decimal point , we would do parseFloat.
    const value = parseInt(event.target.value) || 0;
    
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    });

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
      
    });
    
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit = {handleSubmit}>
        <label>Add a lot!</label>
        <input value= {state.valueToAdd || ''} onChange= {handleChange} type='number' className='p-1 m-3 bg-gray-50 border border-gray-300' />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;