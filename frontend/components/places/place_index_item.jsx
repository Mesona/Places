import React from 'react';
import { Link } from 'react-router-dom';

class PlaceIndexItem extends React.Component {
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

  // renderErrors() {
  //   return(
  //     <ul>
  //       <li>
  //         <span className="fading">{this.props.errors[0]}</span>
  //       </li>
  //     </ul>
  //   );
  // }

  componentWillUnmount() {
    // this.props.receiveErrors([]);
  }

  render () {
    const { place, monthNames } = this.props;
      return (
        <main className="place-index-item-border">
          <Link to={`/places/${place.id}/pages/`}>
          <section className="place-index-item-head">
          </section>
          <section className="place-index-item-body">
          </section>
          <section className="place-index-item-foot-main">
            <span className="place-index-item-foot-title">{place.title}</span>
            <section className="place-index-item-foot-icons">
              <img src={window.images.miniDoc} className="mini-doc"></img>
              <span className={place.private === true ? 'place-index-item-hidden' : ''}><img src={window.images.sharedImg} className="mini-shared-img"></img></span>
              <span className="mini-updated-at">
                {monthNames[(place.updated_at.slice(8, 10) % 12)].slice(0, 3)}&nbsp;
                {place.updated_at.slice(5, 7)},&nbsp;
                {place.updated_at.slice(0, 4)}
              </span>
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
          </section>
          </Link>
          <div className="places-index-errors">
            {/* {this.renderErrors()} */}
          </div>
        </main>

      );
    }
};

export default PlaceIndexItem;