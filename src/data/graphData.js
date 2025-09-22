export const graph = {
  'Avenida Paulista': { 'Consolação': 2, 'Bela Vista': 3 },
  'Consolação': { 'Avenida Paulista': 2, 'Pacaembu': 4 },
  'Bela Vista': { 'Avenida Paulista': 3, 'Jardins': 2, 'Centro': 5 },
  'Jardins': { 'Bela Vista': 2, 'Pinheiros': 3 },
  'Pinheiros': { 'Jardins': 3, 'Morumbi': 6 },
  'Pacaembu': { 'Consolação': 4, 'Perdizes': 3 },
  'Perdizes': { 'Pacaembu': 3, 'Lapa': 4 },
  'Lapa': { 'Perdizes': 4, 'Morumbi': 5 },
  'Centro': { 'Bela Vista': 5, 'Liberdade': 3 },
  'Liberdade': { 'Centro': 3, 'Ipiranga': 6 },
  'Ipiranga': { 'Liberdade': 6, 'Morumbi': 8 },
  'Morumbi': { 'Pinheiros': 6, 'Lapa': 5, 'Ipiranga': 8 }
};

export const nodePositions = {
  'Avenida Paulista': { x: 300, y: 100 },
  'Consolação': { x: 250, y: 150 },
  'Bela Vista': { x: 350, y: 150 },
  'Jardins': { x: 400, y: 200 },
  'Pinheiros': { x: 450, y: 250 },
  'Pacaembu': { x: 200, y: 200 },
  'Perdizes': { x: 150, y: 250 },
  'Lapa': { x: 100, y: 300 },
  'Centro': { x: 400, y: 100 },
  'Liberdade': { x: 500, y: 150 },
  'Ipiranga': { x: 550, y: 250 },
  'Morumbi': { x: 300, y: 350 }
};

export const nodeDescriptions = {
  'Morumbi': 'Estádio do São Paulo Futebol Clube',
  'Avenida Paulista': 'Principal avenida de São Paulo',
  'Consolação': 'Região central com comércio variado',
  'Bela Vista': 'Bairro tradicional com diversidade cultural',
  'Jardins': 'Área nobre com restaurantes e lojas',
  'Pinheiros': 'Bairro moderno com centros empresariais',
  'Pacaembu': 'Famoso pelo estádio e parque',
  'Perdizes': 'Bairro residencial com universidades',
  'Lapa': 'Região com comércio forte e indústrias',
  'Centro': 'Centro histórico e financeiro',
  'Liberdade': 'Bairro japonês com cultura oriental',
  'Ipiranga': 'Local histórico da independência do Brasil'
};