import { tree } from "../store/treeStore";
import { messageSwal, promptSwal } from "./swalAlert";

export const estaVacio = () => {
  messageSwal(`${tree.isEmpty()}`);
};

export const cardinalidad = () => {
  messageSwal(`Cardinalidad ${tree.cardinality(tree.getRoot())}`);
};

export const tamanio = () => {
  messageSwal(`Tamaño ${tree.size(tree.getRoot())}`);
};

export const altura = () => {
  messageSwal(`Altura ${tree.heightR(tree.getRoot())}`);
};

export const minimo = () => {
  messageSwal(`Minimo ${tree.min(tree.getRoot())?.getData().key}`);
};

export const maximo = () => {
  messageSwal(`Minimo ${tree.max(tree.getRoot())?.getData().key}`);
};

export const tieneClave = () => {
  messageSwal(`Clave ${tree.hasKey(3)}`);
};

export const levelOrder = () => {
  messageSwal(
    `[${tree
      .levelOrder()
      .map((data) => {
        return data.key;
      })
      .toString()}]`,
  );
};

export const preOrder = () => {
  messageSwal(
    `[${tree
      .preOrder()
      .map((data) => {
        return data.key;
      })
      .toString()}]`,
  );
};

export const inOrder = () => {
  messageSwal(
    `[${tree
      .inOrder()
      .map((data) => {
        return data.key;
      })
      .toString()}]`,
  );
};

export const postOrder = () => {
  messageSwal(
    `[${tree
      .postOrder()
      .map((data) => {
        return data.key;
      })
      .toString()}]`,
  );
};

const parseList = (str: string) => {
  return str
    .replace(/[\\[\]]/g, "")
    .split(",")
    .map((number) => {
      return { key: Number(number), value: 0 };
    });
};

export const construirPreOrdenInOrden = async () => {
  const response1 = await promptSwal("preOrderList");
  if (!response1.isConfirmed) return;
  const response2 = await promptSwal("inOrderList");
  if (!response2.isConfirmed) return;
  const preOrderList = parseList(response1.value);
  const inOrderList = parseList(response2.value);
  tree.setRoot(null);
  tree.rebuildPreOrderInOrder(preOrderList, inOrderList);
};
export const construirPostOrdenInOrden = async () => {
  const response1 = await promptSwal("postOrderList");
  if (!response1.isConfirmed) return;
  const response2 = await promptSwal("inOrderList");
  if (!response2.isConfirmed) return;
  const postOrderList = parseList(response1.value);
  const inOrderList = parseList(response2.value);
  tree.setRoot(null);
  tree.rebuildPostOrderInOrder(postOrderList, inOrderList);
};

export const contarHijosIzquierdos = () => {
  messageSwal(tree.countLeftChildren().toString());
};

export const contarHijosDerechos = () => {
  messageSwal(tree.countRightChildren().toString());
};

export const todosLosNodosTienen2Hijos = async () => {
  const nivel = await promptSwal("nivel");
  if (!nivel.isConfirmed) return;
  messageSwal(nivel.value.toString());
  tree.allNodesHaveTwoChildrenInLevel(Number(nivel.value));
};

export const contarCantidadNodos = async () => {
  const nivel = await promptSwal("nivel");
  if (!nivel.isConfirmed) return;
  messageSwal(nivel.value.toString());
  tree.countNodesInLevel(Number(nivel.value));
};

export const insertar = async () => {
  const numero = await promptSwal("numero");
  if (!numero.isConfirmed) return;
  messageSwal(numero.value.toString());
  tree.insert({ key: Number(numero.value), value: 0 });
};

export const eliminar = async () => {
  const numero = await promptSwal("numero");
  if (!numero.isConfirmed) return;
  messageSwal(numero.value.toString());
  tree.delete(Number(numero.value));
};

export const mostrar = () => {
  messageSwal(tree.toString());
};
