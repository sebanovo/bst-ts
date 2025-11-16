import Tree, { CustomNodeElementProps } from "react-d3-tree";
import { useTreeStore } from "../store/treeStore";

function NodeView({
  nodeDatum,
  toggleNode,
  onNodeClick,
}: CustomNodeElementProps) {
  if (!nodeDatum.name) return null!; // no renderiza nodos vacíos
  return (
    <g
      onClick={(e) => {
        toggleNode();
        onNodeClick(e);
      }}
    >
      <circle r={30} fill="white" stroke="black" strokeWidth={2} />
      <text
        className="font-serif text-xs"
        textAnchor="middle"
        strokeWidth={1}
        alignmentBaseline="central"
      >
        {nodeDatum.name}
      </text>
    </g>
  );
}

export default function TreeView() {
  const treeData = useTreeStore((state) => state.treeData);
  if (!treeData)
    return (
      <div className="flex h-full w-full items-center justify-center">
        No hay árbol
      </div>
    );
  return (
    <Tree
      data={treeData}
      orientation="vertical"
      renderCustomNodeElement={NodeView}
      translate={{
        x: window.innerWidth / 2,
        y: window.innerHeight / 3,
      }}
      collapsible={false}
      pathFunc={"straight"} // ("diagonal" | "elbow" | "straight" | "step")
    />
  );
}
