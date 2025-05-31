import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import menuRoot from "./menuTree";
import "./index.css";

const findNodeByLink = (root, link) => {
  if (!root) return null;
  if (root.valor.link === link) return root;
  for (const hijo of root.hijos) {
    const found = findNodeByLink(hijo, link);
    if (found) return found;
  }
  return null;
};

const App = () => {
    const [selectedNode, setSelectedNode] = useState(findNodeByLink(menuRoot, "/profile"));

    const handleSelect = (nodo) => {
        setSelectedNode(nodo);
    };

    const SelectedComponent = selectedNode ? selectedNode.valor.component : null;

    return (
        <div className="app-container">
            <Sidebar root={menuRoot} onSelect={handleSelect} />
            <main className="main-content">
                {SelectedComponent ? <SelectedComponent /> : <div>Seleccionar item del menu</div>}
            </main>
        </div>
    );
};

export default App;
