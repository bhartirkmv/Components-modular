import classNames from "classnames";

function Panel ({ children, className, ...rest}) {
  const finalClassNames = classNames('border rounded p-3 shadow bg-white w-full', className);

  // For CSS element we use className and for other props like onClick we are using ...rest
  return (
    <div {...rest} className={finalClassNames}> {children} </div>
  );
}

export default Panel;