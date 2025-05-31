import React, { useState } from 'react'
import './App.css'
import { arbol as initialArbol } from './data'
import { ArbolBinario } from './ArbolBinario'
import { Tree } from 'react-d3-tree'

export const App = () => {
  const [arbol, setArbol] = useState(initialArbol);
  const [insertValue, setInsertValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleInsert = () => {
    const valueToInsert = parseInt(insertValue, 10);
    if (!isNaN(valueToInsert)) {
      const treeInstance = new ArbolBinario(arbol);
      treeInstance.insertar(valueToInsert);
      setArbol({ ...treeInstance.raiz });
      setInsertValue('');
    } else {
      console.log('Ingrese un numero valido');
    }
  };

  const handleTraversal = (type) => {
    const treeInstance = new ArbolBinario(arbol);
    console.log(` ${type} `);
    switch (type) {
      case 'Inorder':
        treeInstance.inorden(treeInstance.raiz);
        break;
      case 'Postorder':
        treeInstance.postorden(treeInstance.raiz);
        break;
      case 'Preorder':
        treeInstance.preorden(treeInstance.raiz);
        break;
      default:
        console.log('Invalido');
    }
  };

  const handleSearch = () => {
    const valueToSearch = parseInt(searchValue, 10);
    if (!isNaN(valueToSearch)) {
      const treeInstance = new ArbolBinario(arbol);
      const found = treeInstance.buscar(valueToSearch);
      setSearchResult(found ? `Valor ${valueToSearch} encontrado` : `Valor ${valueToSearch} no encontrado`);
    } else {
      setSearchResult('Debe ingresar un numero valido');
    }
  };

  const transformTreeData = (node) => {
    if (!node) return null;
    return {
      name: node.valor.toString(),
      children: [
        transformTreeData(node.izquierda),
        transformTreeData(node.derecha)
      ].filter(child => child !== null)
    };
  };

  const d3TreeData = transformTreeData(arbol);

  return (
    <div className="app">
      <h1>Challenge #14 Arbol Binario</h1>

      <div>
        <input
          type="number"
          value={insertValue}
          onChange={(e) => setInsertValue(e.target.value)}
          placeholder="Valor a insertar"
        />
        <button onClick={handleInsert}>Insertar valor al Arbol</button>
      </div>

      <div>
        <button onClick={() => handleTraversal('Inorder')}>Inorder</button>
        <button onClick={() => handleTraversal('Postorder')}>Postorder</button>
        <button onClick={() => handleTraversal('Preorder')}>Preorder</button>
      </div>

      <div>
        <input
          type="number"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Ingresar valor a buscar"
        />
        <button onClick={handleSearch}>Buscar en el Arbol</button>
      </div>
      {searchResult && <p>{searchResult}</p>}

      <div style={{ width: '100%', height: '500px' }}>
        {d3TreeData && (
          <Tree
            data={d3TreeData}
            orientation="vertical"
            translate={{ x: 300, y: 50 }}
          />
        )}
      </div>
    </div>
  );
};

