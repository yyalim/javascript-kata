import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from './Store';
import Publication from './Publication';

export default function PrintedPublications() {
  const [state] = useContext(AppContext);
  const [filteredPublications, setFilteredPublications] = useState([]);

  useEffect(() => {
    filterAndOrderPublications();
  }, [state])

  const filterAndOrderPublications = () => {
    const publications = [
      ...Object.values(state.books),
      ...Object.values(state.magazines)
    ];

    const orderedPublications = publications.sort((a, b) => {
      return a.title.localeCompare(b.title);
    })

    setFilteredPublications(orderedPublications);
  }

  return (
    <div className="publications">
      {filteredPublications.map(pub =><Publication {...pub} key={pub.isbn} />)}
    </div>
  );
}
