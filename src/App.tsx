import TreeView from "./components/TreeView";
import { NavBar } from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <div className="h-screen w-full">
      <NavBar />
      <TreeView />
    </div>
  );
}

export default App;
