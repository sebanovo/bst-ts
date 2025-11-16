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

// "construirPreOrdenAInOrden",
// "construirPostOrdenAInOrden",

export const contarHijosIzquierdos = () => {
  messageSwal(tree.countLeftChildren().toString());
};

export const contarHijosDerechos = () => {
  messageSwal(tree.countRightChildren().toString());
};

export const todosLosNodosTienen2Hijos = async () => {
  const nivel = await promptSwal("nivel");
  messageSwal(nivel.value.toString());
  tree.allNodesHaveTwoChildrenInLevel(parseInt(nivel.value));
};

export const contarCantidadNodos = async () => {
  const nivel = await promptSwal("nivel");
  messageSwal(nivel.value.toString());
  tree.countNodesInLevel(parseInt(nivel.value));
};

export const insertar = async () => {
  const numero = await promptSwal("numero");
  messageSwal(numero.value.toString());
  tree.insert({ key: parseInt(numero.value), value: 0 });
};

export const eliminar = async () => {
  const numero = await promptSwal("numero");
  messageSwal(numero.value.toString());
  tree.delete(parseInt(numero.value));
};

export const mostrar = () => {
  messageSwal(tree.toString());
};
