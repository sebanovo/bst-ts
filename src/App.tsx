import TreeView from "./TreeView";
import { NavBar } from "./NavBar";
import "./index.css";
import "./tree/bst";

function App() {
  return (
    <div className="h-screen w-full">
      <NavBar></NavBar>
      <TreeView />
    </div>
  );
}

export default App;
