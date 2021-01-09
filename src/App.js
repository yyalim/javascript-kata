import React, { useEffect } from 'react';
import authors from '../data/authors.csv';
import books from '../data/books.csv';
import magazines from '../data/magazines.csv';

export default function App() {
  useEffect(() => {
    console.log({ authors, books, magazines });
  }, []);

  return <h1>App</h1>;
}
