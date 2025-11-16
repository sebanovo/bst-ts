import { useState } from "react";

import { useTreeStore } from "../store/treeStore";
import { promptSwal } from "../utils/swalAlert";
import { menuItems } from "../constants/menuItems";

export function NavBar(): JSX.Element {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const insert = useTreeStore((state) => state.insert);
  const remove = useTreeStore((state) => state.remove);
  const rebuildPreOrderInOrder = useTreeStore(
    (state) => state.rebuildPreInOrder,
  );
  const rebuildPostInOrder = useTreeStore((state) => state.rebuildPostInOrder);
  const items = menuItems[1].items;
  const insertarIndex = items.findIndex((value) => value.text === "insertar");
  const eliminarIndex = items.findIndex((value) => value.text === "eliminar");
  const construirPreOrdenInOrdenIndex = items.findIndex(
    (value) => value.text === "construirPreOrdenInOrden",
  );
  const construirPostOrdenInOrdenIndex = items.findIndex(
    (value) => value.text === "construirPostOrdenInOrden",
  );
  items[insertarIndex].fn = async () => {
    const result = await promptSwal("numero");
    if (!result.isConfirmed) return;
    insert(Number(result.value));
  };
  items[eliminarIndex].fn = async () => {
    const result = await promptSwal("numero");
    if (!result.isConfirmed) return;
    remove(Number(result.value));
  };
  const parseList = (str: string) => {
    return str
      .replace(/[\\[\]]/g, "")
      .split(",")
      .map((number) => {
        return { key: Number(number), value: 0 };
      });
  };
  items[construirPreOrdenInOrdenIndex].fn = async () => {
    // example:
    // Input: inorder[] = [3, 1, 4, 0, 5, 2]
    // preorder[] = [0, 1, 3, 4, 2, 5]
    const response1 = await promptSwal("preOrderList");
    if (!response1.isConfirmed) return;
    const response2 = await promptSwal("inOrderList");
    if (!response2.isConfirmed) return;
    const preOrderList = parseList(response1.value);
    const inOrderList = parseList(response2.value);
    rebuildPreOrderInOrder(preOrderList, inOrderList);
  };
  items[construirPostOrdenInOrdenIndex].fn = async () => {
    // example:
    // Input: inorder[] = [4, 2, 5, 1, 3]
    // postorder[] = [4, 5, 2, 3, 1]
    const response1 = await promptSwal("postOrderList");
    if (!response1.isConfirmed) return;
    const response2 = await promptSwal("inOrderList");
    if (!response2.isConfirmed) return;
    const postOrderList = parseList(response1.value);
    const inOrderList = parseList(response2.value);
    rebuildPostInOrder(postOrderList, inOrderList);
  };

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
    }, 200);
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
        {menuItems.map((menu, index) => (
          <li
            key={index}
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
                  key={index + Math.random()}
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
