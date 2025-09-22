import React from 'react';

const GraphVisualization = ({ graph, positions, startNode, results, onNodeClick }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar arestas
    for (let node in graph) {
      for (let neighbor in graph[node]) {
        const startPos = positions[node];
        const endPos = positions[neighbor];
        
        ctx.beginPath();
        ctx.moveTo(startPos.x, startPos.y);
        ctx.lineTo(endPos.x, endPos.y);
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Desenhar peso da aresta
        const midX = (startPos.x + endPos.x) / 2;
        const midY = (startPos.y + endPos.y) / 2;
        
        ctx.fillStyle = '#777';
        ctx.font = '12px Arial';
        ctx.fillText(graph[node][neighbor], midX, midY);
      }
    }
    
    // Desenhar caminho se existir
    if (results && results.path) {
      for (let i = 0; i < results.path.length - 1; i++) {
        const startNode = results.path[i];
        const endNode = results.path[i + 1];
        const startPos = positions[startNode];
        const endPos = positions[endNode];
        
        ctx.beginPath();
        ctx.moveTo(startPos.x, startPos.y);
        ctx.lineTo(endPos.x, endPos.y);
        ctx.strokeStyle = '#FF9800';
        ctx.lineWidth = 4;
        ctx.stroke();
      }
    }
    
    // Desenhar nós
    for (let node in positions) {
      const pos = positions[node];
      const isStart = node === startNode;
      const isMorumbi = node === 'Morumbi';
      const isInPath = results && results.path && results.path.includes(node);
      
      // Cor do nó baseado no tipo
      let fillColor = '#4CAF50'; // Verde para nós normais
      if (isMorumbi) fillColor = '#FF0000'; // Vermelho para o Morumbi
      if (isStart) fillColor = '#2196F3'; // Azul para o ponto de partida
      if (isInPath) fillColor = '#FF9800'; // Laranja para o caminho
      
      // Desenhar círculo do nó
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 15, 0, Math.PI * 2);
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Desenhar nome do nó
      ctx.fillStyle = '#333';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(node, pos.x, pos.y - 25);
      
      // Desenhar distância se disponível
      if (results && results.allDistances && results.allDistances[node] !== Infinity) {
        ctx.fillStyle = 'white';
        ctx.font = 'bold 10px Arial';
        ctx.fillText(results.allDistances[node], pos.x, pos.y + 5);
      }
    }
  }, [graph, positions, startNode, results]);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Verificar se algum nó foi clicado
    for (let node in positions) {
      const pos = positions[node];
      const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
      
      if (distance <= 15) {
        onNodeClick(node);
        break;
      }
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={700}
        height={500}
        onClick={handleCanvasClick}
        style={{ border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '15px', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#2196F3', border: '1px solid #333' }}></div>
          <span>Ponto de Partida</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#FF0000', border: '1px solid #333' }}></div>
          <span>Morumbi (Destino)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#FF9800', border: '1px solid #333' }}></div>
          <span>Caminho Mais Curto</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#4CAF50', border: '1px solid #333' }}></div>
          <span>Nós do Grafo</span>
        </div>
      </div>
    </div>
  );
};

export default GraphVisualization;