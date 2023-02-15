import { useState } from "react";

export function useCounter(initialValue=1) {
    const [counter, setCounter] = useState(initialValue)
   const increment = () =>{setCounter(counter + 1)}
   const reset = () =>{setCounter(initialValue)}
   const decrement = () =>{setCounter(counter - 1)}
      return ( {
        counter, 
        increment, 
        reset,
         decrement
    } );
}

