import { useState, useEffect } from "react";
//hooks , types of hooks
// useState
// useEffect

const FunctionComponent = () => {
  const [state, setState] = useState("empty");
  const [count, setCount] = useState(0);

  useEffect(() => {
    //componentDidMount
    setState("updated");
    setCount(1);
  }, []);

  return (
    <div>
      <h1>{state}</h1>
      <h1>name: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
    </div>
  );
};

export default FunctionComponent;
