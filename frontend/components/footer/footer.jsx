import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';


class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.makeNewPlace = this.makeNewPlace.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  makeNewPlace (e) {
    e.preventDefault();
    const {currentUser} = this.props;
    if (currentUser) {
      const { places } = this.props;
      const newPlaceLength = Object.keys(places).length;
      const newPlaceValues = Object.values(places);
      const newPlaceId = newPlaceValues[newPlaceLength - 1].id;
      this.state = {
        title: 'New Place',
        private: false,
        owner_id: currentUser.id,
      };
      this.props.createPlace(this.state);
      this.props.history.push(`/places/${newPlaceId}`); 
    } else {
      this.props.receiveErrors(["You must be signed in to create new Places!"]);
    }
  }

  renderErrors() {
    return(
      <ul>
        <li>
          <span className="fading">{this.props.errors[0]}</span>
        </li>
      </ul>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser != prevProps.currentUser) {
      this.props.receiveErrors([]);
    }
  }

  render () {
    const { currentUser } = this.props;

    return (
      <footer className="footer">
        <section className="promo-links">
          {/* Github icon from https://www.flaticon.com/free-icon/github-logo_25231 */}
          <a href="https://github.com/Mesona"><img src={window.images.githubImg}></img></a>
          <a href="https://www.linkedin.com/in/kmfischer/"><img src={window.images.linkedinImg}></img></a>
        </section>
        <section className="new-place">
          <section className="footer-errors">
            {this.renderErrors()}
          </section>
          <button
            className="new-place-button"
            onClick={this.makeNewPlace}
          ><img src={window.images.plusImg} className="plus-symbol"></img></button>
        </section>
      </footer>
    );

  }
};

export default withRouter(Footer);