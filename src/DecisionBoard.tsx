import React from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  ReactFlowProps, Background,
} from 'react-flow-renderer';

const DecisionBoard: React.FC<ReactFlowProps> = (
  {
    nodes, edges, onNodesChange, onEdgesChange, onConnect,
  }: ReactFlowProps,
) => (
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

export default DecisionBoard;
