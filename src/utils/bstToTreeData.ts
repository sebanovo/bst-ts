import { RawNodeDatum } from "react-d3-tree";
import { BinaryTreeNode } from "utilities-library";

export const bstToTreeData = <T>(
  node: BinaryTreeNode<T> | null,
): RawNodeDatum | undefined => {
  if (!node?.getData() || node.getData().key === null) return;
  return {
    name: node.getData().key.toString(),
    children: [
      bstToTreeData(node.getLeft()),
      bstToTreeData(node.getRight()),
    ].filter(Boolean),
  } as RawNodeDatum;
};
