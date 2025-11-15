import TreeView from "./TreeView";
import { NavBar } from "./NavBar";
import "./index.css";

function App() {
  console.log(TreeView);
  return (
    <div className="h-screen w-full">
      <NavBar></NavBar>
      <TreeView />
    </div>
  );
}

export default App;
