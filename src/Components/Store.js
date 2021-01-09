import React, { createContext, useReducer } from 'react';

export const ADD_AUTHOR = 'ADD_AUTHOR';
export const ADD_BOOK = 'ADD_BOOK';
export const ADD_MAGAZINE = 'ADD_MAGAZINE';

const initialState = {
  authors: {},
  books: {},
  magazines: {}
};

export function appReducer(state, action) {
  switch(action.type){
    case ADD_AUTHOR:
      return {
        ...state,
        authors: {
          ...state.authors,
          [action.author.email]: action.author
        }
      };
    case ADD_BOOK:
      return {
        ...state,
        books: {
          ...state.books,
          [action.book.isbn]: { ...action.book, type: 'book' }
        }
      }
    case ADD_MAGAZINE:
      return {
        ...state,
        magazines: {
          ...state.magazines,
          [action.magazine.isbn]: { ...action.magazine, type: 'magazine' }
        }
      }
  }
}

export const AppContext = createContext();

export default function Store({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}
