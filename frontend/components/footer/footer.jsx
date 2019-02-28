import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <section className="promo-links">
          {/* Github icon from https://www.flaticon.com/free-icon/github-logo_25231 */}
          <p><a href="https://github.com/Mesona"><img src={window.images.githubImg}></img></a></p>
          <p><a href="https://www.linkedin.com/in/kmfischer/"><img src={window.images.linkedinImg}></img></a></p>
        </section>
        <section className="new-place">
          <button className="new-place-button"><img src={window.images.plusImg} className="plus-symbol"></img></button>
        </section>
      </footer>
    );

  }
};

export default Footer;