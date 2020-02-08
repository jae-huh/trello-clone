import React, { useState, createContext } from 'react';
import Board from './Board';
import Card from './Card';
import EditField from './EditField';
import Counter from './Counter';

export const CounterContext = createContext({
  count: '',
  updateCount: () => {},
});

function App() {
  const initialCards = [
    { id: 1, status: 'backlog', content: 'bleh' },
    { id: 2, status: 'backlog', content: 'Ro' },
    { id: 3, status: 'backlog', content: 'Jae' },
    { id: 4, status: 'inProgress', content: 'Super' },
    { id: 5, status: 'inProgress', content: 'Man' },
    { id: 6, status: 'done', content: 'Mwahaha' },
  ];

  const [cards, setCards] = useState(initialCards);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [cardBeingEditedId, setCardBeingEditedId] = useState();
  const [contentValue, setContentValue] = useState();
  const [characterCount, setCharacterCount] = useState();

  const sortedCards = cards.reduce((memo, card) => {
    const { status } = card;

    if (status === 'backlog') {
      memo.backlog.push(card);
    }

    if (status === 'inProgress') {
      memo.inProgress.push(card);
    }

    if (status === 'done') {
      memo.done.push(card);
    }

    return memo;
  }, {
    backlog: [],
    inProgress: [],
    done: [],
  });

  const handleCardChange = ({ cardId, field, value }) => {
    let cardIndex;
    const updatedCard = cards.find(({ id }, index) => {
      cardIndex = index;
      return id === cardId
    });

    const updatedCards = [...cards];
    updatedCards.splice(cardIndex, 1, { ...updatedCard, [field]: value });

    setCards(updatedCards);
  };

  const boards = {
    backlog: 'Backlog',
    inProgress: 'In Progress',
    done: 'Done',
  };

  const value = {
    count: characterCount,
    updateCount: length => { setCharacterCount(length) },
  };

  return (
    <CounterContext.Provider value={value}>
      <div>
        <div style={{ display: 'flex' }}>
          {Object.entries(boards).map(([value, displayName]) => (
            <Board key={value} title={displayName}>
              {sortedCards[value].map(({ id, status, content }) =>
                <Card
                  key={id}
                  id={id}
                  status={status}
                  content={content}
                  handleCardChange={handleCardChange}
                  setIsEditOpen={setIsEditOpen}
                  setCardBeingEditedId={setCardBeingEditedId}
                  setContentValue={setContentValue}
                />)}
            </Board>
          ))}
          {isEditOpen && <EditField
            cardBeingEditedId={cardBeingEditedId}
            content={contentValue}
            handleCardChange={handleCardChange}
          />}
        </div>

        <Counter />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
