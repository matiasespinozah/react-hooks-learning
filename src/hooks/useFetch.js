import { useState, useEffect, useRef } from "react"


const useFetch = (endpoint) => {
  
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    return () => (isMounted.current = false);
  }, [])


  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(endpoint)
      .then(resp => resp.json())
      .then(data => {
      
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data
          });
        }
      });
  }, [endpoint]);

  return state;
}

export default useFetch
