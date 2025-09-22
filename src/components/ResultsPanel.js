import React from 'react';

const ResultsPanel = ({ results, startNode }) => {
  if (!results) return (
    <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#FF0000', marginBottom: '20px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
        Resultados do Caminho
      </h2>
      <p>Selecione um ponto de partida e clique em "Calcular Caminho" para encontrar a rota mais curta até o Morumbi.</p>
    </div>
  );

  return (
    <div style={{ padding: '20px', backgroundColor: '#e8f5e8', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#FF0000', marginBottom: '20px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
        Resultados do Caminho
      </h2>
      
      <div style={{ lineHeight: '1.6' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FF0000', margin: '15px 0' }}>
          Distância total: {results.distance} km
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Caminho mais curto:</strong>
          <div style={{ 
            padding: '15px', 
            backgroundColor: 'white', 
            borderRadius: '6px', 
            marginTop: '8px',
            fontFamily: 'monospace',
            fontSize: '1.1rem',
            borderLeft: '4px solid #FF0000'
          }}>
            {results.path.join(' → ')}
          </div>
        </div>
        
        <div style={{ fontStyle: 'italic', color: '#666' }}>
          Tempo estimado: {(results.distance * 2).toFixed(1)} minutos 
          <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>
            (considerando 30km/h de velocidade média)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultsPanel;