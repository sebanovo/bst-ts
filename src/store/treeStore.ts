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
  rebuildPreInOrder: (
    pre: { key: number; value: number }[],
    ino: { key: number; value: number }[],
  ) => void;
  rebuildPostInOrder: (
    pre: { key: number; value: number }[],
    ino: { key: number; value: number }[],
  ) => void;
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

  rebuildPreInOrder: (
    pre: { key: number; value: number }[],
    ino: { key: number; value: number }[],
  ) =>
    set((state) => {
      tree.setRoot(null);
      tree.rebuildPreOrderInOrder(pre, ino);

      return {
        version: state.version + 1,
        treeData: bstToTreeData(tree.getRoot()),
      };
    }),
  rebuildPostInOrder: (
    pre: { key: number; value: number }[],
    ino: { key: number; value: number }[],
  ) =>
    set((state) => {
      tree.setRoot(null);
      tree.rebuildPostOrderInOrder(pre, ino);

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
