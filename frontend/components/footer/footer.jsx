import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';


class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.makeNewPlace = this.makeNewPlace.bind(this);
  }

  makeNewPlace (e) {
    e.preventDefault();
    console.log(window.currentUser);
    console.log(this.state);
    this.state = {
      title: 'New Place',
      private: false,
      owner_id: 2,
    };
    console.log(this.state);
    this.props.createPlace(this.state)
      // .then(data => console.log(data))
      // .then(() => console.log('potash'))
      // .then(data => this.props.history.push(`/places/${data.place.id}`));
    //   console.log('test');
    // console.log(this.state);
  }

  render () {
    return (
      <footer className="footer">
        <section className="promo-links">
          {/* Github icon from https://www.flaticon.com/free-icon/github-logo_25231 */}
          <span><a href="https://github.com/Mesona"><img src={window.images.githubImg}></img></a></span>
          <span><a href="https://www.linkedin.com/in/kmfischer/"><img src={window.images.linkedinImg}></img></a></span>
        </section>
        <section className="new-place">
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