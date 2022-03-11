import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChildComponent = ({ changeName, parentName }) => {
  const [state, setState] = useState({
    name: "child",
    age: 14,
  });
  const navigate = useNavigate();
  const handleClick = () => {
    changeName("change");
  };
  return (
    <div>
      <p>ChildName: {state.name}</p>
      <p>ChildAge: {state.age}</p>
      <p>ParentName: {parentName}</p>
      <button onClick={handleClick}>Change Parent name</button>
      <button onClick={() => navigate("/func")}>Go to function</button>
    </div>
  );
};

export default ChildComponent;
