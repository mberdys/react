import shortid from 'shortid';

// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => {
  console.log(column, listId);
  return column.listId == listId;
});

// action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer - przyjmuje aktualny stan aplikacji oraz akcję, a zwraca nowy stan aplikacji z uwzgl. akcji lub bez
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}