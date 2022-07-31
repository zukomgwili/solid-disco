import React, { FC, useCallback, useState } from 'react';

interface ChoiceAttributeProps {
  name: string;
}
const ChoiceAttribute: FC<ChoiceAttributeProps> = ({ name }) => {
  const [value, setValue] = useState(50);
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  }, []);
  return (
    <article className="choice-attribute">
      <header>{`${name}: ${value}`}</header>
      <input type="range" step="1" min="0" max="100" value={value} onChange={handleChange} />
    </article>
  );
};

export default ChoiceAttribute;
