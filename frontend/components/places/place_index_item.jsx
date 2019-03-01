import React from 'react';
import { Link } from 'react-router-dom';

const PlaceIndexItem = ({ place }) => (
  <li className="place-index-item">
    <Link to={`/place/${place.id}`}>
    <section className="place-index-item-head">
      <span>{place.title}</span>
    </section>
    <section className="place-index-item-body">
      A
    </section>
    <section className="place-index-item-foot">
      B
    </section>
    </Link>
  </li>
);

export default PlaceIndexItem;
