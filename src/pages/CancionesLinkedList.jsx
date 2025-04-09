import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.current = null
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.current = newNode
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++
    }

    peek(value, current = this.head) {
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    size() {
        return this.length;
    }

    remove(value, current = this.head) {
        if (!this.head) return null;

        if (this.head.value === value) {
            this.head = this.head.next;

            if(!this.head) {
                this.tail = null;
            }
            this.length--;
            return;
        }
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            if (!current.next) this.tail = current;
            this.length--;
        }
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }

    next() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
        }
        return this.current;
    }

    getCurrent() {
        return this.current;
    }
}

const CancionesLinkedList = () => {
    const [listaCanciones] = useState(() => {
        const canciones = new LinkedList();
        canciones.append("https://music.apple.com/co/album/my-exs-best-friend/1526411768?i=1526412272");
        canciones.append("https://music.apple.com/co/album/do-re-mi/1576021199?i=1576021521");
        canciones.append("https://music.apple.com/co/album/me-ur-ghost/1576021253?i=1576021256");
        canciones.append("https://music.apple.com/co/album/i-miss-the-old-u/1576021199?i=1576021520");
        return canciones;
    });

    const [cancionActual, setCancionActual] = useState(listaCanciones.getCurrent());

    const siguienteCancion = () => {
        setCancionActual(listaCanciones.next())
    }

    return(
        <>
            <div>
                <h4>Volver a Inicio:</h4>
                <Link to="/">Inicio</Link>
                <h4>Ir a Double Linked List:</h4>
                <Link to="/doubleLinkedList">Double Linked List</Link>


                <h1>Reproductor de canciones</h1>
                <p>Canción actual:{" "}
                {cancionActual ? (
                    <a href={cancionActual.value}>
                        {cancionActual.value}
                    </a>
                    ) : ( "No hay canción" )
                }
                </p>

                <button onClick={siguienteCancion}>Siguiente</button>
            </div>
        </>
    )
}

export default CancionesLinkedList;