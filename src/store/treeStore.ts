// store/treeStore.ts
import { create } from "zustand";
import { BinarySearchTree } from "utilities-library";
import { bstToTreeData } from "../utils/bstToTreeData";

export const tree = new BinarySearchTree<number>();

interface TreeState {
  version: number;
  treeData: any;
  insert: (key: number) => void;
  refresh: () => void;
}

export const useTreeStore = create<TreeState>((set) => ({
  version: 0,
  treeData: bstToTreeData(tree),

  insert: (key: number) =>
    set((state) => {
      tree.insert({ key, value: 0 });
      return {
        version: state.version + 1,
        treeData: bstToTreeData(tree),
      };
    }),

  refresh: () =>
    set((state) => ({
      version: state.version + 1,
      treeData: bstToTreeData(tree),
    })),
}));
