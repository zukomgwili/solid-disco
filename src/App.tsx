import React, { useCallback, useState } from 'react';
import {
  addEdge, useEdgesState, useNodesState, Connection,
} from 'react-flow-renderer';
import DecisionBoard from './DecisionBoard';
import {
  createAttributeNode,
  createChoiceNode,
  connectChoiceToAttributes,
  connectAttributeToChoices,
  getAttributesNodes,
  getNodesIdsAndNames,
  getChoicesNodes,
  getNodesIds,
} from './utils';

const App: React.FC = () => {
  const [choice, setChoice] = useState<string>('');
  const [attribute, setAttribute] = useState<string>('');

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback((connection: Connection) => setEdges((eds) => addEdge(connection, eds)), []);

  const handleChoiceChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(value);
  };

  const handleAttributeChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setAttribute(value);
  };

  const handleAddChoice = () => {
    const attributesNodes = getAttributesNodes(nodes);
    const choiceNode = createChoiceNode(choice, getNodesIdsAndNames(attributesNodes));
    setNodes(nodes.concat(choiceNode));
    const attributesIds = getNodesIds(attributesNodes);
    if (attributesIds) {
      setEdges(edges.concat(connectChoiceToAttributes(attributesIds, choiceNode)));
    }
  };

  const handleAddAttribute = () => {
    const attributeNode = createAttributeNode(attribute);
    setNodes(nodes.concat(attributeNode));
    const choicesIds = getNodesIds(getChoicesNodes(nodes));
    setEdges(edges.concat(connectAttributeToChoices(choicesIds, attributeNode.id)));
  };

  return (
    <main>
      <label htmlFor="choice">
        Choice
        <input id="choice" name="choice" type="text" value={choice} onChange={handleChoiceChange} />
      </label>
      <button type="button" onClick={handleAddChoice}>
        Add Choise
      </button>
      <label htmlFor="attribute">
        Attribute
        <input id="attribute" name="attribute" type="text" value={attribute} onChange={handleAttributeChange} />
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
