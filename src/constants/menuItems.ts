import {
  altura,
  cardinalidad,
  construirPostOrdenInOrden,
  construirPreOrdenInOrden,
  contarCantidadNodos,
  contarHijosDerechos,
  contarHijosIzquierdos,
  eliminar,
  estaVacio,
  inOrder,
  insertar,
  levelOrder,
  maximo,
  minimo,
  mostrar,
  postOrder,
  preOrder,
  tamanio,
  tieneClave,
  todosLosNodosTienen2Hijos,
} from "../utils/methods";

export const menuItems = [
  {
    title: "Menu 1",
    items: [
      {
        text: "estaVacio",
        fn: estaVacio,
      },
      {
        text: "cardinalidad",
        fn: cardinalidad,
      },
      {
        text: "tamaño",
        fn: tamanio,
      },
      {
        text: "altura",
        fn: altura,
      },
      {
        text: "minimo",
        fn: minimo,
      },
      {
        text: "maximo",
        fn: maximo,
      },
      {
        text: "tieneClave",
        fn: tieneClave,
      },
      {
        text: "levelOrder",
        fn: levelOrder,
      },

      {
        text: "preOrder",
        fn: preOrder,
      },
      {
        text: "inOrder",
        fn: inOrder,
      },
      {
        text: "postOrder",
        fn: postOrder,
      },

      {
        text: "contarHijosIzquierdos",
        fn: contarHijosIzquierdos,
      },
      {
        text: "contarHijosDerechos",
        fn: contarHijosDerechos,
      },
      {
        text: "todosLosNodosTienen2Hijos",
        fn: todosLosNodosTienen2Hijos,
      },
      {
        text: "contarCantidadNodos",
        fn: contarCantidadNodos,
      },
    ],
  },
  {
    title: "Menu 2",
    items: [
      {
        text: "insertar",
        fn: insertar,
      },
      {
        text: "eliminar",
        fn: eliminar,
      },
      {
        text: "construirPreOrdenInOrden",
        fn: construirPreOrdenInOrden,
      },
      {
        text: "construirPostOrdenInOrden",
        fn: construirPostOrdenInOrden,
      },
      {
        text: "mostrar",
        fn: mostrar,
      },
    ],
  },
];
