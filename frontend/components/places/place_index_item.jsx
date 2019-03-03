import React from 'react';
import { Link } from 'react-router-dom';

const PlaceIndexItem = ({ place, monthNames }) => (
  <main className="place-index-item-border">
    <Link to={`/places/${place.id}`}>
    <section className="place-index-item-head">
    </section>
    <section className="place-index-item-body">
    </section>
    <section className="place-index-item-foot-main">
      <span className="place-index-item-foot-title">{place.title}</span>
      <section className="place-index-item-foot-icons">
        <img src={window.images.miniDoc} className="mini-doc"></img>
        <img src={window.images.sharedImg} className="mini-shared-img"></img>
        <span className="mini-updated-at">
          {monthNames[(place.updated_at.slice(8, 10) % 12)].slice(0, 3)}&nbsp;
          {place.updated_at.slice(5, 7)},&nbsp;
          {place.updated_at.slice(0, 4)}
        </span>
      </section>
    </section>
    </Link>
  </main>
);

export default PlaceIndexItem;