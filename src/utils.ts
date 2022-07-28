import React from 'react';
import { Edge, Node } from 'react-flow-renderer';

export const createEdges = (targetIds: string[], id: string): Edge[] => {
  return targetIds.map<Edge>(destId => ({
    id: `e-${Math.random() * 1000}`,
    source: id,
    target: destId
  }));
};

export const createAttributeNode = (id: string, attribute: string) => {
  return {
    id,
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
