import React from 'react';

const boardStyles = {
  height: '500px',
  width: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid black',
};

const Board = ({ title, children }) => (
  <div style={boardStyles}>
    <h3>{title}</h3>
    {children}
  </div>
);

export default Board;
