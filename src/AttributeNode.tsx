import React, { FC } from 'react';
import { Handle, Position } from 'react-flow-renderer';

interface AttributeNodeProps {
  data: { name: string };
}

const AttributeNode: FC<AttributeNodeProps> = ({ data: { name } }) => (
  <article>
    <section>
      <header>{name}</header>
      <input type="range" step="0.01" min="0" max="1" />
    </section>
    <Handle type="source" position={Position.Bottom} />
  </article>
);

export default AttributeNode;
