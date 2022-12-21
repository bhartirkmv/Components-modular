
import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';



function Link ( { to, children, className, activeClassName } ) {

  const { currentPath,navigate } = useNavigation();

  // The && property takes the second truthy value.
  const classes = classNames('text-blue-500', className, currentPath ===to && activeClassName);

  // The entire goal of a Link component is that the click event on 
  // a Link element does not trigger the entire page to refresh.

  const handleClick = (event) => {
    // We want to prevent the default behavior only when the command or control key
    // is not held down.
    // Instead we want to allow the browser to handle the click event as usual  and
    // attempt to open a new tab. 
    // not like the one mentioned below.

    if(event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };
  // The href property is to , because that is where the anchor tag is leading us to. 
  return (
    <a className={classes} href= {to} onClick={handleClick}> {children} </a>
  );
}

export default Link;