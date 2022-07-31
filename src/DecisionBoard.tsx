import React, { useMemo, useState } from 'react';
import ReactFlow, {
  MiniMap, Controls, ReactFlowProps, Background,
} from 'react-flow-renderer';
import AttributeNode from './AttributeNode';
import ChoiceNode from './ChoiceNode';
import { WeightsContext } from './Context';

const DecisionBoard: React.FC<ReactFlowProps> = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
}: ReactFlowProps) => {
  const nodeTypes = useMemo(() => ({ choice: ChoiceNode, attribute: AttributeNode }), []);
  const [weights, setWeights] = useState<Record<string, number>>({});

  const contextValue = useMemo(() => ({ weights, setWeights }), [weights, setWeights]);
  return (
    <WeightsContext.Provider value={contextValue}>
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
    </WeightsContext.Provider>
  );
};
export default DecisionBoard;
