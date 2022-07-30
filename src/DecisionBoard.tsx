import React, { useMemo } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  ReactFlowProps, Background,
} from 'react-flow-renderer';
import ChoiceNode from './ChoiceNode';

const DecisionBoard: React.FC<ReactFlowProps> = (
  {
    nodes, edges, onNodesChange, onEdgesChange, onConnect,
  }: ReactFlowProps,
) => {
  const nodeTypes = useMemo(() => ({ choice: ChoiceNode }), []);
  return (
    <ReactFlow
      nodeTypes={nodeTypes}
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
export default DecisionBoard;
