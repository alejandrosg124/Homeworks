export function dfs(nodo) {
  if (!nodo) return;
  console.log(nodo.valor.title);
  for (let hijo of nodo.hijos) {
    dfs(hijo);
  }
}

export function bfs(raiz) {
  if (!raiz) return;
  const cola = [raiz];
  while (cola.length > 0) {
    const actual = cola.shift();
    console.log(actual.valor.title);
    for (let hijo of actual.hijos) {
      cola.push(hijo);
    }
  }
} 