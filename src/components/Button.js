
// The below import makes the confusion clear between the library name 
// and the actual value. 

import className from 'classnames';

// Whatever we type inside the Component tags is hardcoded and
// the name is special which is children.
// ...rest is a special bit of syntax that means that take all the remaining properties 
//out of the props object besides the ones mentioned over here.
function Button ({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest

}) {

  // All the elements inside the string as well as 
  //the object will be concatinated.

  // When there are two properties trying to change the same className
  // The later classname is going to take effect
  const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
    // We want to put in a particular value inside the key 
    // If it is true.
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
    

  } );

  return (
    <button {...rest} className={classes}>{ children }</button>
  );
}

Button.propTypes = {
  // We are giving it a custom validator. We can name it anything we want
  // In case of other props we need to name them as props itself.
  checkVariationValue: ({ primary, secondary, success, warning , danger}) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!warning)
      + Number(!!success)
      + Number(!!danger);
    if(count > 1) {
      return new Error('Only one of primary, secondary, success, warning, danger can be true');
    }

  }
}

export default Button;
