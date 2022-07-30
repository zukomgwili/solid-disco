import React, { useCallback, useState } from 'react';
import {
  addEdge,
  useEdgesState,
  useNodesState,
  Connection,
} from 'react-flow-renderer';
import { DecisionBoard } from './DecisionBoard';
import {
  createAttributeNode,
  getEdgeTargetIds,
  createChoiceNode,
  getEdgeSourceIds,
  connectChoiceToAttributes,
  connectAttributeToChoices,
} from './utils';

const App: React.FC = () => {
  const [choice, setChoice] = useState<string>('');
  const [attribute, setAttribute] = useState<string>('');

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [],
  );

  const handleChoiceChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(value);
  };

  const handleAttributeChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setAttribute(value);
  };

  const handleAddChoice = () => {
    const choiceNode = createChoiceNode(choice);
    setNodes(nodes.concat(choiceNode));
    const sourceIds = getEdgeSourceIds(nodes);
    if (sourceIds) {
      setEdges(edges.concat(connectChoiceToAttributes(sourceIds, choiceNode)));
    }
  };

  const handleAddAttribute = () => {
    const attributeNode = createAttributeNode(attribute);
    setNodes(nodes.concat(attributeNode));
    const targetIds = getEdgeTargetIds(nodes);
    setEdges(
      edges.concat(connectAttributeToChoices(targetIds, attributeNode.id)),
    );
  };

  return (
    <main>
      <label htmlFor="choice">
        Choice
        <input
          id="choice"
          name="choice"
          type="text"
          value={choice}
          onChange={handleChoiceChange}
        />
      </label>
      <button type="button" onClick={handleAddChoice}>
        Add Choise
      </button>
      <label htmlFor="attribute">
        Attribute
        <input
          id="attribute"
          name="attribute"
          type="text"
          value={attribute}
          onChange={handleAttributeChange}
        />
      </label>
      <button type="button" onClick={handleAddAttribute}>
        Add Attribute
      </button>
      <DecisionBoard
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </main>
  );
};

export default App;
