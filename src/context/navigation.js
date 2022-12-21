
import { createContext , useState , useEffect} from "react";

const NavigationContext = createContext();

function NavigationProvider ({children}){

  // We need to have the currenpath state to have a default value.
  // Which is declared when our application first starts up.
  // This gives the current pathname.
  // Using this we immediately know what path the user is visiting.

  // The only reason we are updating our state is to cause our component to re render.
  // We only have this state so that when ever the state changes , the App can rerender.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // I only want to call the arrow function only one time.
  // Whenever we set an event listener on our document, we do it in useEffect()
  // Because there is a guarantee that the useEffect() function will run at least once.

  // Everything inside this useEffect is about handling the user clicking foreward and 
  // back. Its not going to handle the case when the user does hard refresh.
  useEffect(() => {

    // Handler function once defined under the useEffect and passed onto the 
    // window listener , It will be active always because that event listener has
    // already been defined.

    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);

    // Whenever out NavigationProvider component is about to be removed from the 
    // Screen, we need to clean up the listener.
    return () => {
      window.removeEventListener('popstate', handler);
    };

  }, []);


  const navigate = ( to )=> {
    window.history.pushState({}, '', to);

    setCurrentPath(to);
  }

  // Whatever we provide under the value prop is going to be shared 
  // with the rest of our application.
  return (
    <NavigationContext.Provider value = {{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  );

}

export { NavigationProvider };

export default NavigationContext;