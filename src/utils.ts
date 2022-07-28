import React from 'react';
import { Edge, Node } from 'react-flow-renderer';


export const createEdge = (source: string, target:string): Edge => ({
    id: `e-${Math.random() * 1000}`,
    source,
    target
  });

export const createAttributeNode = (attribute: string) => {
  return {
    id:`a-${Math.random() * 1000}`,
    type: 'input',
    data: {
      label: attribute
    },
    position: { x: Math.random() * 500, y: Math.random() * 500 }
  };
};

export const getEdgeTargetIds = (nodes: Node[]):string[] => {
  return nodes.reduce<string[]>((prev, curr) => {
    const { type } = curr;
    if (!type) {
      return prev.concat(curr.id);
    }
    return prev;
  }, []);
};

export const createChoiceNode = (choice: string):Node => {
  return {
    id: `c-${Math.random() * 1000}`,
    data: {
      label: choice
    },
    position: { x: Math.random() * 500, y: Math.random() * 500 }
  };
};

export const getEdgeSourceIds = (nodes:Node[]):string[] => {
  return nodes.filter(({ type }) => type === 'input').map(({ id }) => id);
};

export const connectChoiceToAttributes = (sourceIds: string[], choiceNode: Node<any>): ConcatArray<Edge<any>> => {
  return sourceIds.map((id) => createEdge(id, choiceNode.id));
};

export const connectAttributeToChoices = (targetIds: string[], sourceId: string): Edge[] => {
  return targetIds.map<Edge>(targetId => createEdge(sourceId, targetId));
};
