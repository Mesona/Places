import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PageIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.sendData = this.sendData.bind(this);
  }

  sendData(e) {
    // console.log(this.props)
    // this.props.history.push(`/places/${this.props.match.params.placeId}/pages/${this.props.pageId}/`);
    // <NavLink to={`/places/${this.props.match.params.placeId}/pages/${this.props.pageId}/`} />;
  }

  render () {
    const {title, id, src } = this.props; 

    return (
      <div className="page-index-items" onClick={this.sendData}>
        <Link to={`/places/${this.props.match.params.placeId}/pages/${this.props.pageId}/`}>
          <img className="page-index-nav-icon" src={src}></img>
          <span className="pages-index-selected">{title}</span>
          <div className="pages-index-dropdown"><img src={window.images.hamburgerDots}></img></div>
        </Link>
      </div>
    );
  };

}

export default withRouter(PageIndexItem);
