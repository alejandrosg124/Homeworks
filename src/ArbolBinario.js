class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }

    isLeaf() {
        return this.izquierda === null && this.derecha === null;
    }
}

class ArbolBinario {
    constructor(initialTree = null) {
        this.raiz = initialTree;
    }

    insertar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.raiz) {
            this.raiz = nuevoNodo;
            return;
        }

        let actual = this.raiz;
        while (true) {
            if (valor < actual.valor) {
                if (!actual.izquierda) {
                    actual.izquierda = nuevoNodo;
                    return;
                }
                actual = actual.izquierda;
            } else if (valor > actual.valor) {
                if (!actual.derecha) {
                    actual.derecha = nuevoNodo;
                    return;
                }
                actual = actual.derecha;
            } else {
                return;
            }
        }
    }

    // Inorder traversal: Left-Node-Right
    inorden(nodo) {
        if (!nodo) return;
        this.inorden(nodo.izquierda);
        console.log(nodo.valor);
        this.inorden(nodo.derecha);
    }

    // Preorder traversal: Node-Left-Right
    preorden(nodo) {
        if (!nodo) return;
        console.log(nodo.valor);
        this.preorden(nodo.izquierda);
        this.preorden(nodo.derecha);
    }

    // Postorder traversal: Left-Right-Node
    postorden(nodo) {
        if (!nodo) return;
        this.postorden(nodo.izquierda);
        this.postorden(nodo.derecha);
        console.log(nodo.valor);
    }

    // Function to check if a value is in the tree (Instruction 2)
    buscar(valor) {
        let actual = this.raiz;
        while (actual) {
            if (valor === actual.valor) {
                return true; // Value found
            } else if (valor < actual.valor) {
                actual = actual.izquierda;
            } else {
                actual = actual.derecha;
            }
        }
        return false; // Value not found
    }
}

export { Nodo, ArbolBinario }; 