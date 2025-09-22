import React, { useState } from 'react';
import GraphVisualization from './components/GraphVisualization';
import ControlsPanel from './components/ControlsPanel';
import ResultsPanel from './components/ResultsPanel';
import { dijkstra } from './algorithms/dijkstra';
import { graph, nodePositions, nodeDescriptions } from './data/graphData';
import './App.css';

function App() {
  const [startNode, setStartNode] = useState('Avenida Paulista');
  const [results, setResults] = useState(null);

  const handleCalculatePath = () => {
    const dijkstraResults = dijkstra(graph, startNode, 'Morumbi');
    setResults(dijkstraResults);
  };

  const handleNodeClick = (node) => {
    setStartNode(node);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚗 Encontre o Caminho Mais Curto para o Morumbi 🏟️</h1>
        <p>Algoritmo de Dijkstra - Estádio do São Paulo FC</p>
      </header>
      
      <div className="app-content">
        <div className="left-panel">
          <ControlsPanel
            startNode={startNode}
            onStartNodeChange={setStartNode}
            onCalculatePath={handleCalculatePath}
            nodeDescriptions={nodeDescriptions}
          />
          <ResultsPanel results={results} startNode={startNode} />
        </div>
        
        <div className="right-panel">
          <div className="graph-container">
            <GraphVisualization
              graph={graph}
              positions={nodePositions}
              startNode={startNode}
              results={results}
              onNodeClick={handleNodeClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;