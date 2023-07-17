import { useEffect, useRef } from "react"

const usePrevious =(value) =>{
    
    const ref = useRef()

    //store current value in 
    //ref
    useEffect(() => {
        ref.current = value;
    },[value]); 
    //only re-run if value changes

    return ref.current;
}

export default usePrevious;