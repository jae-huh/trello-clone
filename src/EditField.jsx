import React, { useState, useContext } from 'react';
import { CounterContext } from './App';

const EditField = ({ cardBeingEditedId, content, handleCardChange }) => {
  const [inputValue, setInputValue] = useState(content);

  const { updateCount } = useContext(CounterContext);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    updateCount(event.target.value.length);
  }

  const onSaveClick = () => {
    handleCardChange({ cardId: cardBeingEditedId, field: 'content', value: inputValue })
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onInputChange} />
      <button onClick={onSaveClick}>Save</button>
    </div>
  );
};

export default EditField;
