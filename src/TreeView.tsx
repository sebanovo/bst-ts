import Tree, { CustomNodeElementProps, RawNodeDatum } from "react-d3-tree";

import { BinarySearchTree } from "utilities-library";
import { BinaryTreeNode } from "utilities-library";

const t1 = new BinarySearchTree<number>();
t1.insert({ key: 4, value: 1 })
  .insert({ key: 2, value: 2 })
  .insert({ key: 6, value: 3 })
  .insert({ key: 1, value: 4 })
  .insert({ key: 3, value: 5 })
  .insert({ key: 5, value: 6 })
  .insert({ key: 7, value: 7 });

const bstToD3Tree = <T,>(
  node: BinaryTreeNode<T> | null,
): RawNodeDatum | undefined => {
  if (!node?.getData() || node.getData().key === null) return;
  return {
    name: `${node.getData().key}`,
    children: [
      bstToD3Tree(node.getLeft()),
      bstToD3Tree(node.getRight()),
    ].filter(Boolean),
  } as RawNodeDatum;
};

const d3TreeData = bstToD3Tree(t1.getRoot());

function Node({ nodeDatum, toggleNode, onNodeClick }: CustomNodeElementProps) {
  return (
    <g
      onClick={(e) => {
        toggleNode();
        onNodeClick(e);
      }}
    >
      <circle r={40} fill="white" stroke="black" strokeWidth={2} />
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
      onNodeClick={() => console.warn("Node clicked")}
      renderCustomNodeElement={Node}
      translate={{
        x: window.innerWidth / 2,
        y: window.innerHeight / 3,
      }}
      collapsible={false}
      pathFunc={"straight"} // ("diagonal" | "elbow" | "straight" | "step")
    />
  );
}
