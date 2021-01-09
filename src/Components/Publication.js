import React, { useContext } from 'react';

export default function Publication(props) {

  return (
    <article className="publication">
      <h2>{props.title}</h2>
      {props.description && <p>{props.description}</p>}
      {props.publishedAt && <p>Published At: {props.publishedAt}</p>}
    </article>
  )
}
