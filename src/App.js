import React, { useEffect, useContext } from 'react';
import { AppContext, ADD_AUTHOR, ADD_BOOK, ADD_MAGAZINE } from './Components/Store';
import PrintedPublications from './Components/PrintedPublications';
import authors from '../data/authors.csv';
import books from '../data/books.csv';
import magazines from '../data/magazines.csv';

export default function App() {
  const [, dispatch] = useContext(AppContext);

  useEffect(() => {
    authors.forEach(author => {
      dispatch({
        type: ADD_AUTHOR,
        author
      });
    });

    books.forEach(book => {
      dispatch({
        type: ADD_BOOK,
        book
      });
    });

    magazines.forEach(magazine => {
      dispatch({
        type: ADD_MAGAZINE,
        magazine
      });
    });
  }, []);

  return (
    <div className="library">
      <h1>Library of Foo</h1>
      <hr/>
      <PrintedPublications />
    </div>
  );
}
