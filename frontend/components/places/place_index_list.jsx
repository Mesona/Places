import React from 'react';
import { Link } from 'react-router-dom';

class PlaceIndexList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      private: this.props.place.private,
      currentUser: this.props.currentUser,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.changePrivacy = this.changePrivacy.bind(this);

  }

  showDropdownMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  changePrivacy(e) {
    e.preventDefault();
    this.state = this.props.place;
    let privacy = this.state.private;
    if (privacy) {
      this.state.private = false;
    } else {
      this.state.private = true;
    }
    this.props.updatePlace(this.state);
  }

  render () {
    const { place, monthNames } = this.props;
    const pageIdArray = typeof place.pages === 'undefined' ? '' : place.pages.map((e) => e.id);
    const firstPageId = Math.min(...pageIdArray);
      return (
        <main className="place-index-list">
          <Link to={`/places/${place.id}/pages/${firstPageId}`}>
          <div className="place-index-body">
            <section className="mini-doc">
              <img src={window.images.miniDoc} className="list-mini-doc"></img>
            </section>
            <section className="place-index-list-title">
              <span className="place-index-list-title-text">{place.title}</span>
            </section>
            <section className="place-index-list-privacy">
              <span className={place.private === true ? 'place-index-item-hidden' : ''}><img src={window.images.sharedImg} className="mini-shared-img"></img></span>
            </section>
            <section className="place-index-list-owner">
              {this.state.currentUser.username === place.owner.username ? "me" : place.owner.username}
            </section>
            <section className="place-index-list-updated-at">
              <span className="mini-updated-at">
                {monthNames[(place.updated_at.slice(5, 7) % 12)].slice(0, 3)}&nbsp;
                {place.updated_at.slice(8, 10)},&nbsp;
                {place.updated_at.slice(0, 4)}
              </span>
            </section>
            <section className="place-index-list-hamburger">
                <span className={this.props.currentUser ===  null ? "place-index-item-hidden" : this.props.currentUser.id === this.props.place.owner_id ?  "places-hamburger-dropdown" : "place-index-item-hidden"}>
                  <button className="mini-place-index-hamburger" onClick={this.showDropdownMenu}>
                    <img src={window.images.hamburgerDots} className="mini-place-index-hamburger-icon" />
                    { this.state.displayMenu ? (
                      <ul>
                        {/* <li><img src={window.images.textIcon} />Rename</li> */}
                        <li onClick={(e) => this.props.deletePlace(this.props.place.id)}><img src={window.images.trashIcon} />Remove</li>
                        <li onClick={this.changePrivacy}><img src={window.images.sharedImg} />Switch Privacy</li>
                      </ul>
                    ) : (
                      null
                    )}
                  </button>
                </span>
              </section>
            </div>
          </Link>
          {/* </div> */}
        <div className="places-index-errors">
          {/* {this.renderErrors()} */}
        </div>
      </main>

      );
    }
};

export default PlaceIndexList;