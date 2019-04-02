import React from 'react';
import { withRouter } from 'react-router-dom';


class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderedErrors: false,
    };

    this.makeNewPlace = this.makeNewPlace.bind(this);
    this.makeNewPage = this.makeNewPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  makeNewPlace (e) {
    e.preventDefault();
    this.state.renderedErrors = true;
    setTimeout(() => this.state.renderedErrors = false, 500);
    if (this.props.currentUser) {
      this.state = {
        title: 'New Place',
        private: false,
        owner_id: this.props.currentUser.id,
        pages: [],
      };
      this.props.createPlace(this.state)
        .then(response => this.makeNewPage(response.place.id))
    } else {
      this.props.receiveErrors(["You must be signed in to create new Places!"]);
    }
    if (this.props.errors !== []) {
      setTimeout(() => this.state.renderedErrors = false, 500);
    }
  }

  makeNewPage(place_id) {
    let defaultPage = {
      title: 'Home Page',
      place_id: place_id,
    }
    this.props.createPage(defaultPage)
      .then((response) => this.props.history.push(`/places/${place_id}/pages/${response.page.id}`));
  }

  renderErrors() {
    return(
      <ul>
        <li>
          <span className={this.state.renderedErrors ? 'fading' : ''}>{this.props.errors[0]}</span>
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