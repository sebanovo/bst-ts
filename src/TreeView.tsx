import Tree, { CustomNodeElementProps, RawNodeDatum } from "react-d3-tree";
import { BinaryTreeNode } from "utilities-library";

import { tree } from "./tree/bst";

const bstToD3Tree = <T,>(
  node: BinaryTreeNode<T> | null,
): RawNodeDatum | undefined => {
  if (!node?.getData() || node.getData().key === null) return;
  return {
    name: node.getData().key.toString(),
    children: [
      bstToD3Tree(node.getLeft()),
      bstToD3Tree(node.getRight()),
    ].filter(Boolean),
  } as RawNodeDatum;
};

const d3TreeData = bstToD3Tree(tree.getRoot());
// const d3TreeData: RawNodeDatum | RawNodeDatum[] | undefined = {
//   name: "",
//   children: [],
// };

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
        className="fill-black font-serif text-xs"
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
  return (
    <Tree
      data={d3TreeData}
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
