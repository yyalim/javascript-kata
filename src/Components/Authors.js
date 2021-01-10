import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './Store';

export default function Authors({authors}) {
  const [state] = useContext(AppContext);

  const authorEmails = authors.split(',');
  const authorsOfPublication = Object
    .values(state.authors)
    .filter(author => authorEmails.includes(author.email))

  return (
    <>
      <p>Authors:</p>
      <p className="authors">
        {authorsOfPublication.map(author => `${author.firstname} ${author.lastname}`).join(', ')}
      </p>
    </>
  )
}

Authors.propTypes = {
  authors: PropTypes.string.isRequired
}

