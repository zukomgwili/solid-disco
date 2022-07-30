import React, { FC } from 'react';
import { Handle, Position } from 'react-flow-renderer';

type ChoiceAttributeDTO = {
    id: string;
    name: string;
};

interface ChoiceNodeProps {
    data: {
        title:string;
        attributes:ChoiceAttributeDTO[]
    }
}

const ChoiceNode: FC<ChoiceNodeProps> = ({ data: { title, attributes } }) => (
  <article>
    <Handle type="target" position={Position.Top} />
    <header>{title}</header>
    <section>
      {attributes.map(({ id, name }) => (
        <label key={id} htmlFor={id}>
          {name}
          <input type="range" name="id" id={id} step="1" min="0" max="100" />
        </label>
      ))}
    </section>
    <Handle type="source" position={Position.Bottom} />
  </article>
);

export default ChoiceNode;
