import React, { FC, useCallback, useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';

interface AttributeNodeProps {
  data: { name: string };
}

const AttributeNode: FC<AttributeNodeProps> = ({ data: { name } }) => {
  const [value, setValue] = useState(1);
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(event.target.value));
  }, []);

  return (
    <article className="attribute-node">
      <header>{name}</header>
      <section className="weight">
        <header>{`Weight: ${value}`}</header>
        <input type="range" step="0.01" min="0" max="1" value={value} onChange={handleChange} />
      </section>
      <Handle type="source" position={Position.Bottom} />
    </article>
  );
};
export default AttributeNode;
