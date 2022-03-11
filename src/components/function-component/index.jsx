import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//hooks , types of hooks
// useState
// useEffect

const FunctionComponent = () => {
  const [state, setState] = useState("empty");
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

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
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default FunctionComponent;
