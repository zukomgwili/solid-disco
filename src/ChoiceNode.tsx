import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { Handle, Position } from 'react-flow-renderer';
import ChoiceAttribute from './ChoiceAttribute';
import { useWeightsContext } from './Context';

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

const ChoiceNode: FC<ChoiceNodeProps> = ({ data: { title, attributes } }) => {
  const { weights } = useWeightsContext();
  const [attributesValues, setAttributesValues] = useState<Record<string, number>>();
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (!attributesValues || !weights) {
      return;
    }
    setScore(Object.keys(attributesValues).reduce((prev, curr) => prev + attributesValues[curr] * weights[curr], 0));
  }, [weights, attributesValues]);

  const handleAttributeValueChange = useCallback(
    (attributeId: string, attributeValue: number) => {
      setAttributesValues((previousState) => ({
        ...previousState,
        [attributeId]: attributeValue,
      }));
    },
    [setAttributesValues],
  );

  return (
    <article className="choice-node">
      <Handle type="target" position={Position.Top} />
      <header>{title}</header>
      <section className="attributes">
        {attributes.map(({ id, name }) => (
          <ChoiceAttribute
            key={id}
            attributeId={id}
            name={name}
            initialValue={50}
            onChange={handleAttributeValueChange}
          />
        ))}
      </section>
      <footer>{score.toFixed(2)}</footer>
      <Handle type="source" position={Position.Bottom} />
    </article>
  );
};
export default ChoiceNode;
