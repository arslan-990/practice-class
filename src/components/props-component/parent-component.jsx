import { useState } from "react";
import ChildComponent from "./child-component";

const ParentComponent = () => {
  const [name, setName] = useState("parent");
  return (
    <div>
      ParentComponent
      <ChildComponent changeName={(argu) => setName(argu)} parentName={name} />
    </div>
  );
};

export default ParentComponent;
