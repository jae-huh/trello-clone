import React, { useEffect } from 'react';
import slow from "./slow"

const cardStyles = {
  height: '120px',
  width: '180px',
  border: '1px solid blue',
};

const Card = ({ id, status, content, handleCardChange, setIsEditOpen, setCardBeingEditedId, setContentValue }) => {
  useEffect(() => {
    slow();
  }, [id, status, content]);

  const editClickHandler = () => {
    setIsEditOpen(true);
    setCardBeingEditedId(id);
    setContentValue(content);
  };
  console.log('rendered')
  return (
    <div style={cardStyles}>
      <p style={{ margin: '2px' }}>{content}</p>
      <button onClick={editClickHandler}>Edit</button>

      <select defaultValue={status} onChange={(event) => handleCardChange({ cardId: id, field: "status", value: event.target.value })}>
        <option value="backlog">Backlog</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default Card;
