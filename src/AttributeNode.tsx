import React, { FC } from 'react';
import { Handle, Position } from 'react-flow-renderer';

type AttributeDTO = {
    id: string;
    name: string;
};

interface AttributeNodeProps {
    data: AttributeDTO
}

const AttributeNode: FC<AttributeNodeProps> = ({ data: { id, name } }) => (
  <article>
    <section>
      <header>{name}</header>
      <input type="range" name="id" id={id} step="0.01" min="0" max="1" />
    </section>
    <Handle type="source" position={Position.Bottom} />
  </article>
);

export default AttributeNode;
