import React from 'react';
import { Link } from 'react-router-dom';

class PlaceIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  showDropdownMenu(e) {
    e.preventDefault();
    console.log(this.props.deletePlace);
    console.log('mid');
    console.log(this.props);
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePlace(this.props.place.id);
  }

  render () {
    const { place, monthNames } = this.props;
      return (
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
              <span className={place.private === true ? 'place-index-item-hidden' : ''}><img src={window.images.sharedImg} className="mini-shared-img"></img></span>
              {/* <img src={window.images.sharedImg} className="mini-shared-img"></img> */}
              <span className="mini-updated-at">
                {monthNames[(place.updated_at.slice(8, 10) % 12)].slice(0, 3)}&nbsp;
                {place.updated_at.slice(5, 7)},&nbsp;
                {place.updated_at.slice(0, 4)}
              </span>
              <span className="places-hamburger-dropdown">
                <button className="mini-place-index-hamburger" onClick={this.showDropdownMenu}>
                  <img src={window.images.hamburgerDots} className="mini-place-index-hamburger-icon" />
                  { this.state.displayMenu ? (
                    <ul>
                      <li><img src={window.images.textIcon} />Rename</li>
                      <li onClick={this.handleDelete}><img src={window.images.trashIcon} />Remove</li>
                      {/* <li><img src={window.images.trashIcon} />Remove</li> */}
                      <li><img src={window.images.sharedImg} />Make Private</li>
                    </ul>
                  ) : (
                    null
                  )}
                </button>
              </span>
            </section>
          </section>
          </Link>
        </main>

      );
    }
};

export default PlaceIndexItem;