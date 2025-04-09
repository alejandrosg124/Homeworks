import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    goForward() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
        }
        return this.current;
    }

    goBack() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
        }
        return this.current;
    }

    getCurrent() {
        return this.current;
    }
}

const DoubleLinkedList = () => {
    const [historial] = useState(() => {
        const paginas = new DoublyLinkedList();
        paginas.append("https://pagina.com/pag1");
        paginas.append("https://pagina.com/pag2");
        paginas.append("https://pagina.com/pag3");
        paginas.append("https://pagina.com/pag4");
        return paginas;
    });

    const [paginaActual, setPaginaActual] = useState(historial.getCurrent());

    const irAtras = () => {
        setPaginaActual(historial.goBack());
    };

    const irAdelante = () => {
        setPaginaActual(historial.goForward());
    };

    return (
        <div>
            <h4>Volver a Inicio:</h4>
            <Link to="/">Inicio</Link>
            
            <h4>Ir a Linked List:</h4>
            <Link to="/cancionesLinkedList">Linked List</Link>
            
            <h1>Historial del navegador</h1>
            <p>Página actual:{" "}
                {paginaActual ? (
                    <a href={paginaActual.value} target="_blank" rel="noreferrer">
                        {paginaActual.value}
                    </a>
                ) : ("No hay página")}
            </p>
            <button onClick={irAtras}>Atrás</button>
            <button onClick={irAdelante}>Adelante</button>
        </div>
    );
};

export default DoubleLinkedList;
