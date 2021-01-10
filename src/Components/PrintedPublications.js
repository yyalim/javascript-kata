import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from './Store';
import Publication from './Publication';

export default function PrintedPublications() {
  const [state] = useContext(AppContext);
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    filterAndOrderPublications();
  }, [state, searchQuery]);

  const filterAndOrderPublications = () => {
    const publications = [
      ...Object.values(state.books),
      ...Object.values(state.magazines)
    ];

    const filteredPublications = publications.filter(publication => {
      return `${publication.title}${publication.isbn}${publication.authors}`
        .includes(searchQuery);
    });

    const orderedPublications = filteredPublications.sort((a, b) => {
      return a.title.localeCompare(b.title);
    })

    setFilteredPublications(orderedPublications);
  }

  const handelSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div>
      <div className="search">
        <label htmlFor="searchQuery">Search By:</label>
        <input
          name="searcQuery"
          type="text"
          value={searchQuery}
          placeholder="ISBN, title, author's email"
          onChange={handelSearchQueryChange}
        />
      </div>
      <div className="publications">
        {filteredPublications.map(pub =><Publication {...pub} key={pub.isbn} />)}
      </div>
    </div>
  );
}
