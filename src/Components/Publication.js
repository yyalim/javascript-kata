import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './Store';

export default function Publication(props) {
  const [state] = useContext(AppContext)
  const author = state.authors[props.authors]

  return (
    <article className="publication">
      <h2>{props.title}</h2>
      {props.description && <p>{props.description}</p>}
      {props.publishedAt && <p>Published At: {props.publishedAt}</p>}
      {author && <p>{`${author.firstname} ${author.lastname}`}</p> }
    </article>
  )
}

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
  authors: PropTypes.string.isRequired,
}
