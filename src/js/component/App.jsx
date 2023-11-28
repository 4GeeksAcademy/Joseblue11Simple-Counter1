//useState, useEffect,setInterval,props.
  
import { useEffect, useState } from "react";
import SimpleCouter from "./SimpleCounter";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

function Calculateseconds(aCounter, placeValue){
  return Math.floor(aCounter/placeValue) % 10
}


return (

  <SimpleCouter
    ThousandsDigit ={Calculateseconds (count,1000)} 
    HundredsDigit={Calculateseconds (count,100)}
    TensDigit={Calculateseconds (count,100)}
    OnesDigit={Calculateseconds(count,1)}
    >
  </SimpleCouter>
  )
}
