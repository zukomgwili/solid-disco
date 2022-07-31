import React, {
  FC, useCallback, useEffect, useState,
} from 'react';

interface ChoiceAttributeProps {
  attributeId: string;
  name: string;
  initialValue: number;
  onChange: Function;
}
const ChoiceAttribute: FC<ChoiceAttributeProps> = ({
  attributeId, name, initialValue, onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChange(attributeId, value);
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const attributeValue = parseInt(event.target.value, 10);
      setValue(attributeValue);
      onChange(attributeId, attributeValue);
    },
    [setValue],
  );

  return (
    <article className="choice-attribute">
      <header>{`${name}: ${value.toFixed(0)}`}</header>
      <input type="range" step="1" min="0" max="100" value={value} onChange={handleChange} />
    </article>
  );
};

export default ChoiceAttribute;
