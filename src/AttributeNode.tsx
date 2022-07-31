import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { useWeightsContext } from './Context';

interface AttributeNodeProps {
  data: { id: string; name: string };
}

const AttributeNode: FC<AttributeNodeProps> = ({ data: { id, name } }) => {
  const [value, setValue] = useState(1);
  const { setWeights } = useWeightsContext();

  useEffect(() => {
    setWeights((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const weight = parseFloat(event.target.value);
    setValue(weight);
    setWeights((prev) => ({
      ...prev,
      [id]: weight,
    }));
  }, []);

  return (
    <article className="attribute-node">
      <header>{name}</header>
      <section className="weight">
        <header>{`Weight: ${value.toFixed(2)}`}</header>
        <input type="range" step="0.01" min="0" max="1" value={value} onChange={handleChange} />
      </section>
      <Handle type="source" position={Position.Bottom} />
    </article>
  );
};
export default AttributeNode;
