// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const SEARCH_CARD = createActionName('SEARCH_CARD');

// action creators
export const createAction_changeSearchString = (payload) => ({ payload, type: SEARCH_CARD });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SEARCH_CARD:
      return action.payload;
    default:
      return statePart;
  }
}

