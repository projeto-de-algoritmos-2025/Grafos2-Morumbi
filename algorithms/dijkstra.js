export function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const nodes = new Set();
  const path = [];
  let smallest;
  
  // Inicializa as distâncias
  for (let node in graph) {
    if (node === start) {
      distances[node] = 0;
    } else {
      distances[node] = Infinity;
    }
    nodes.add(node);
    previous[node] = null;
  }
  
  while (nodes.size) {
    // Encontra o nó com menor distância
    smallest = null;
    for (let node of nodes) {
      if (smallest === null || distances[node] < distances[smallest]) {
        smallest = node;
      }
    }
    
    if (smallest === end) {
      // Construir o caminho
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      path.push(start);
      break;
    }
    
    if (smallest === null || distances[smallest] === Infinity) {
      break;
    }
    
    nodes.delete(smallest);
    
    // Atualiza as distâncias dos vizinhos
    for (let neighbor in graph[smallest]) {
      let alt = distances[smallest] + graph[smallest][neighbor];
      if (alt < distances[neighbor]) {
        distances[neighbor] = alt;
        previous[neighbor] = smallest;
      }
    }
  }
  
  return {
    path: path.reverse(),
    distance: distances[end],
    allDistances: distances
  };
}