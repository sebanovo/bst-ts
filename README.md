# Trabajo de la Universidad: Clase Arbol Binario en TypeScript

Este proyecto representa un trabajo académico de la universidad en el que desarrollamos una clase Arbol Binario en TypeScript. 

<!-- Visita el proyecto [Clase-Arbol-Binario](https://clase-vector-vanilla-javascript.vercel.app/) -->

<!-- <div align="center">
  <img src="https://i.ibb.co/ZHf6HTz/clase-vector.png" alt="vector-class-javascript">
</div> -->

## Características

La clase Arbol Binario en TypeScript incluye las siguientes características y operaciones:

## Metodos de la Clase Arbol Binario 

- esVacio
- cardinalidad
- tamanio
- altura
- minimo
- maximo 
- tieneClave
- levelOrder
- preOrder 
- inOrder 
- postOrder 
- construirPreOrderAInOrder
- construirPostOrderAInOrder
- contarHijosIzquierdos 
- contarHijosDerechos
- todosLosNodosTienen2HijosEnNivel
- contarNodosEnNivel
- insertar
- eliminar 
- todos 
- toString

## Ejemplo: 

```TypeScript
class BinarySearchTree<T> {
  protected root: BinaryTreeNode<T> | null;

  constructor () {
    this.root = null;
  }

  getRoot () {
    return this.root;
  }

  setRoot (newRoot: BinaryTreeNode<T> | null) {
    this.root = newRoot;
  }

  isEmpty (): boolean {
    return this.root === null;
  }

  // Cuenta la cantidad de datos
  cardinality (root: BinaryTreeNode<T> | null): number {
    let c: number;
    if (root === null) {
      c = 0;
    } else {
      c = 1;
      const countLeftKeys = this.cardinality(root.getLeft());
      const countRightKeys = this.cardinality(root.getRight());
      c += countLeftKeys + countRightKeys;
    }
    return c;
  }

  // Cuenta la cantidad de nodos del arbol
  sizeR (root: BinaryTreeNode<T> | null): number {
    let c: number;
    if (root === null) {
      c = 0;
    } else {
      const countLeftNodes = this.sizeR(root.getLeft());
      const countRightNodes = this.sizeR(root.getRight());
      c = countLeftNodes + countRightNodes + 1;
    }
    return c;
  }

  size (root: BinaryTreeNode<T> | null): number {
    if (root === null) return 0;
    let x = root;
    let count = 0;
    const queue = new Queue<BinaryTreeNode<T>>();
    queue.add(x);
    while (!queue.isEmpty()) {
      x = queue.poll()!;
      count++;
      if (x.getLeft() !== null) {
        queue.add(x.getLeft()!);
      }
      if (x.getRight() !== null) {
        queue.add(x.getRight()!);
      }
    }
    return count;
  }
  // etc.. 
}
```

1. **Clonar el Repositorio**:
   
      Asegúrate de tener Node.js instalado antes de continuar con los siguientes pasos.

      Abre una terminal y ejecuta el siguiente comando para clonar el repositorio de GitHub:

      ```bash
      git clone https://github.com/sebanovo/bst-ts.git
      ```

2. **Instalar Dependencias**:

      ```bash
      npm install
      ```

3. **Iniciar el Servidor de Desarrollo**:

      Inicia el servidor de desarrollo Vite:

      ```bash
      npm run dev
      ```

      Ahora, el proyecto Vite.js debería estar en funcionamiento y accesible en tu navegador en el pueto indicado.

4. **Crear una Pull Request (Opcional)**:

      Si cuentas con las ganas de seguir aportando a este proyecto puedes realizar una pull request y mandarme tu trabajo y seguir mejorando este repositorio

      - Haz cambios en tu código y confirma tus modificaciones localmente.
      - Luego, crea una nueva rama (branch) para tu pull request.
      - Sube tu rama a tu repositorio remoto.
      - Visita el repositorio en GitHub y selecciona la opción "New Pull Request".
      - Sigue las instrucciones en pantalla para crear tu pull request.

   ¡Esperamos que este repositorio te sea de ayuda!