import React from 'react';

const ControlsPanel = ({ startNode, onStartNodeChange, onCalculatePath, nodeDescriptions }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', marginBottom: '25px' }}>
      <h2 style={{ color: '#FF0000', marginBottom: '20px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
        Configuração do Caminho
      </h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="startNode" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
          Ponto de Partida:
        </label>
        <select
          id="startNode"
          value={startNode}
          onChange={(e) => onStartNodeChange(e.target.value)}
          style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px', backgroundColor: '#f9f9f9', width: '100%' }}
        >
          {Object.keys(nodeDescriptions).map(node => (
            <option key={node} value={node}>{node}</option>
          ))}
        </select>
      </div>
      
      <button
        onClick={onCalculatePath}
        style={{
          width: '100%',
          padding: '14px',
          background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(255, 0, 0, 0.2)'
        }}
      >
        Calcular Caminho Mais Curto
      </button>
      
      <div style={{ marginTop: '25px' }}>
        <h3 style={{ color: '#FF0000', marginBottom: '15px' }}>Descrição dos Locais</h3>
        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '6px', borderLeft: '4px solid #FF0000' }}>
          <p><strong style={{ color: '#FF0000' }}>{startNode}:</strong> {nodeDescriptions[startNode]}</p>
          <p><strong style={{ color: '#FF0000' }}>Morumbi:</strong> {nodeDescriptions['Morumbi']}</p>
        </div>
      </div>
    </div>
  );
};

export default ControlsPanel;