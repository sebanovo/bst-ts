import { create } from "zustand";
import { BinarySearchTree } from "utilities-library";
import { bstToTreeData } from "../utils/bstToTreeData";
import { RawNodeDatum } from "react-d3-tree";

export const tree = new BinarySearchTree<number>();

interface TreeState {
  version: number;
  treeData: RawNodeDatum | undefined;
  insert: (key: number) => void;
  remove: (key: number) => void;
  refresh: () => void;
}

export const useTreeStore = create<TreeState>((set) => ({
  version: 0,
  treeData: bstToTreeData(tree.getRoot()),

  insert: (key: number) =>
    set((state) => {
      tree.insert({ key, value: 0 });
      return {
        version: state.version + 1,
        treeData: bstToTreeData(tree.getRoot()),
      };
    }),

  remove: (key: number) =>
    set((state) => {
      tree.delete(key);
      return {
        version: state.version + 1,
        treeData: bstToTreeData(tree.getRoot()),
      };
    }),

  refresh: () =>
    set((state) => ({
      version: state.version + 1,
      treeData: bstToTreeData(tree.getRoot()),
    })),
}));
