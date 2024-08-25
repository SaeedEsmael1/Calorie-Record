import { useEffect, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";

const REDIRECT_COUNT = 10;
const HOME_LINK = "/";

const ErrorPage = () => {
    
    const [counter, setCounter] = useState(REDIRECT_COUNT);
    const intervalHandler = useRef();

    const navigateToHomepage = useNavigate();

    useEffect(()=> {
        if(counter === 0) {
            clearInterval(intervalHandler.current);
            navigateToHomepage(HOME_LINK);
        }
    }, [counter])

    useEffect(()=> {
        intervalHandler.current = setInterval(()=> {
            setCounter(prev => prev-1);
        }, 1000);
        return ()=> {
            clearInterval(intervalHandler.current);
        }
    },[])

  return (
    <>
        <h1>Something Went Wrong</h1>
        <p>Redirecting to homepage in {counter}</p>
        <button > 
            <NavLink  to={HOME_LINK}>Back to homepage</NavLink>
        </button>
    </>
  )
}

export default ErrorPage