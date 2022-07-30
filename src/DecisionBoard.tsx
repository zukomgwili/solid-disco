import React from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  ReactFlowProps, Background
} from 'react-flow-renderer';

export const DecisionBoard: React.FC<ReactFlowProps> = (
  {
    nodes, edges, onNodesChange, onEdgesChange, onConnect,
  }: ReactFlowProps
) => {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="top-right"
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};
