import React from 'react';
import { Link } from 'react-router-dom';

const PlaceIndexItem = ({ place, monthNames }) => (
  <li className="place-index-item">
    <Link to={`/place/${place.id}`}>
    <section className="place-index-item-head">
    </section>
    <section className="place-index-item-body">
      {place.id}
    </section>
    <section className="place-index-item-foot">
      <span className="place-index-item-foot-title">{place.title}</span>
      <footer>
        <img src={window.images.miniDoc} className="mini-doc"></img>
        <img src={window.images.sharedImg} className="mini-shared-img"></img>
        <span className="mini-updated-at">
          {monthNames[(place.updated_at.slice(8, 10) % 12)].slice(0, 3)}&nbsp;
          {place.updated_at.slice(5, 7)},&nbsp;
          {place.updated_at.slice(0, 4)}
        </span>
      </footer>
    </section>
    </Link>
  </li>
);

export default PlaceIndexItem;