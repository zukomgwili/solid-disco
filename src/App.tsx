import React,{ FC } from 'react';
import ReactFlow, { MiniMap, Controls, ReactFlowProps } from 'react-flow-renderer';

const App: FC = ({ nodes, edges, onNodesChange, onEdgesChange, onConnect }:ReactFlowProps) =>{
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}

export default App;