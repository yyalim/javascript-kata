import React from 'react';
import PropTypes from 'prop-types';
import Authors from './Authors';

export default function Publication({ title, description, publishedAt, authors }) {
  return (
    <article className="publication">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {publishedAt && <p>Published At: {publishedAt}</p>}
      <Authors authors={authors} />
    </article>
  )
}

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
  authors: PropTypes.string.isRequired,
}
