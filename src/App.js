import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import ClassComponent from './components/class-component';
import FunctionComponent from './components/function-component';
import ParentComponent from './components/props-component/parent-component';
import Router from './routes';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      {/* <FunctionComponent /> */}
      {/* <ClassComponent /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
