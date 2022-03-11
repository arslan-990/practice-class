import { Routes, Route, Link } from "react-router-dom";
import FunctionComponent from "../components/function-component";
import LoginComponent from "../components/login-component";
import ParentComponent from "../components/props-component/parent-component";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ParentComponent />} />
            <Route path="/func" element={<FunctionComponent />} />
            <Route path="/login" element={<LoginComponent />} />
        </Routes>
    )
}

export default Router