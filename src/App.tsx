import React,{ FC, useCallback, useState } from 'react';
import ReactFlow, { MiniMap, Controls, ReactFlowProps, addEdge, Background, useEdgesState, useNodesState, Connection, Edge, Node } from 'react-flow-renderer';
import {
  createAttributeNode,
  getEdgeTargetIds,
  createChoiceNode,
  createEdge,
  getEdgeSourceIds,
  connectChoiceToAttributes,
  connectAttributeToChoices,
} from './utils';

const App: FC = () =>{
  const [choice,setChoice] = useState<string>('');
  const [attribute,setAttribute] = useState<string>('');

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback((connection:Connection) => setEdges((eds) => addEdge(connection, eds)), []);

  const handleChoiceChange = ({ target: { value}}: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(value);
  };

  const handleAttributeChange = ({ target: { value}}: React.ChangeEvent<HTMLInputElement>) => {
    setAttribute(value);
  };

  const handleAddChoice = () => {
    const choiceNode = createChoiceNode(choice);
    setNodes(nodes.concat(choiceNode));
    const sourceIds = getEdgeSourceIds(nodes);
    if(sourceIds){
     setEdges(edges.concat(connectChoiceToAttributes(sourceIds, choiceNode)));
    }
  };

  const handleAddAttribute = () => {
    const attributeNode = createAttributeNode(attribute);
    setNodes(nodes.concat(attributeNode));
    const targetIds = getEdgeTargetIds(nodes);
    setEdges(edges.concat(connectAttributeToChoices(targetIds, attributeNode.id)));
  };

  return (
    <main>
        <label htmlFor='choice'>Choice</label>
        <input id='choice' name='choice' type="text" value={choice} onChange={handleChoiceChange} />      
        <button type="button" onClick={handleAddChoice}>Add Choise</button>
        <label htmlFor='attribute'>Attribute</label>
        <input id='attribute' name='attribute' type="text" value={attribute} onChange={handleAttributeChange} />      
        <button type="button" onClick={handleAddAttribute}>Add Attribute</button>
        <DecisionBoard nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} />
    </main>
  );
}

const DecisionBoard: FC<ReactFlowProps> = ({ nodes, edges, onNodesChange, onEdgesChange, onConnect }:ReactFlowProps) =>{

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
}

export default App;

