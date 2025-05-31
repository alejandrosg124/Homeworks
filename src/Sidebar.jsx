import React from "react";
import "./Sidebar.css";

const Sidebar = ({ root, onSelect }) => {
    if (!root) return null;

    const renderNodo = (nodo) => {
        return (
            <li key={nodo.valor.link}>
                <button className="sidebar-button" onClick={() => onSelect(nodo)}>
                    {nodo.valor.title}
                </button>
                {nodo.hijos.length > 0 && (
                    <ul className="sidebar-list">
                        {nodo.hijos.map((hijo) => renderNodo(hijo))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <nav className="sidebar-container">
            <ul className="sidebar-list">
                {root.hijos.map((hijo) => renderNodo(hijo))}
            </ul>
        </nav>
    );
};

export default Sidebar; 