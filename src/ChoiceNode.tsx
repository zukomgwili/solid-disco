import React, { FC } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import ChoiceAttribute from './ChoiceAttribute';

type ChoiceAttributeDTO = {
  id: string;
  name: string;
};

interface ChoiceNodeProps {
  data: {
    title: string;
    attributes: ChoiceAttributeDTO[];
  };
}

const ChoiceNode: FC<ChoiceNodeProps> = ({ data: { title, attributes } }) => (
  <article className="choice-node">
    <Handle type="target" position={Position.Top} />
    <header>{title}</header>
    <section className="attributes">
      {attributes.map(({ id, name }) => (
        <ChoiceAttribute key={id} name={name} />
      ))}
    </section>
    <Handle type="source" position={Position.Bottom} />
  </article>
);

export default ChoiceNode;
