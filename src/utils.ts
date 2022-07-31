import { Edge, Node } from 'react-flow-renderer';

type IdAndName = {
  id: string;
  name: string;
};

export const createEdge = (source: string, target: string): Edge => ({
  id: `e-${Math.random() * 1000}`,
  source,
  target,
});

export const createAttributeNode = (attribute: string) => {
  const id = `a-${Math.random() * 1000}`;
  return {
    id,
    type: 'attribute',
    data: {
      id,
      name: attribute,
    },
    position: { x: Math.random() * 500, y: Math.random() * 500 },
  };
};

export const createChoiceNode = (choice: string, attributes: IdAndName[]): Node => ({
  id: `c-${Math.random() * 1000}`,
  type: 'choice',
  data: {
    title: choice,
    attributes,
  },
  position: { x: Math.random() * 500, y: Math.random() * 500 },
});

export const getAttributesNodes = (nodes: Node[]): Node[] => nodes.filter(({ type }) => type === 'attribute');

export const getChoicesNodes = (nodes: Node[]): Node[] => nodes.filter(({ type }) => type === 'choice');

export const getNodesIdsAndNames = (nodes: Node[]): IdAndName[] =>
  nodes.map(({ id, data: { name } }) => ({ id, name }));

export const getNodesIds = (nodes: Node[]): string[] => nodes.map(({ id }) => id);

export const connectChoiceToAttributes = (sourceIds: string[], choiceNode: Node<any>): ConcatArray<Edge<any>> =>
  sourceIds.map((id) => createEdge(id, choiceNode.id));

export const connectAttributeToChoices = (targetIds: string[], sourceId: string): Edge[] =>
  targetIds.map<Edge>((targetId) => createEdge(sourceId, targetId));
