import "./App.css";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <div className="h-[20rem] flex justify-center items-center">
        <Toggle />
      </div>
      <div className="h-[20rem] flex justify-center items-center">
        <Tab />
      </div>
      <div className="h-[20rem] flex justify-center items-center">
        <Input />
      </div>
    </div>
  )
}

export default App;