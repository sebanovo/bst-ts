import "./index.css";
import { useState } from "react";
import {
  altura,
  cardinalidad,
  contarHijosDerechos,
  contarHijosIzquierdos,
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
} from "./methods";

const menuItems = [
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
        text: "insertar",
        fn: insertar,
      },
      {
        text: "mostrar",
        fn: mostrar,
      },
    ],
  },
];

export function NavBar(): JSX.Element {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMenuEnter = (menuTitle: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveMenu(menuTitle);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 200); // 200ms de delay antes de cerrar
    setCloseTimeout(timeout);
  };

  const handleSubMenuEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  return (
    <nav className="flex h-14 w-full items-center bg-gradient-to-r from-blue-600 to-blue-700 px-6 shadow-md">
      <ul className="flex gap-6 text-white">
        {menuItems.map((menu) => (
          <li
            key={menu.title}
            className="relative cursor-pointer"
            onMouseEnter={() => handleMenuEnter(menu.title)}
            onMouseLeave={handleMenuLeave}
          >
            {/* Título del menú */}
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 font-medium transition-all hover:bg-white/10">
              <span>{menu.title}</span>
              <span className="text-xs opacity-80">▼</span>
            </button>

            {/* Submenú */}
            <ul
              className={`absolute left-0 top-full mt-1 min-w-48 flex-col rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-lg transition-all duration-200 ${
                activeMenu === menu.title
                  ? "flex opacity-100"
                  : "hidden opacity-0"
              }`}
              onMouseEnter={handleSubMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              {menu.items.map((sub, index) => (
                <li
                  key={index}
                  onClick={sub.fn}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-blue-50 hover:text-blue-600"
                >
                  {sub.text}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
