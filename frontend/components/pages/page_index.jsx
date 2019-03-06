import React from 'react';
import { withRouter } from 'react-router-dom';
import PageShowContainer from './page_show_container';


class PageIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   parentPlace: this.props.entities.places[this.props.match.placeId],

    // };

    this.sidePages = this.sidePages.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData () {
    console.log(this.state);
    console.log("STATE ^ PROPS BELOW");
    console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchPages(this.props.match.params.placeId);
  }

  sidePages() {
    return (
      <div>
        test
      </div>
    )
  }

  render () {

    const { pages } = this.props;
    console.log(pages);
    console.log('HERE');
    console.log(this.props.pages);
    // const currentPages = Object.values(pages.filter((e) => e.place_id === this.props.currentPlace));
    // const currentPages = pages.filter((e) => e.place_id === 180);
    // console.log(Object.values(pages).filter((e) => e.place_id === this.props.match.params.placeId));
    // console.log(Object.values(pages).filter((e) => e.place_id.to_s === this.props.currentPlace));
    console.log(this.props.currentPlace);

    return (
      <main className="page">
        <PageShowContainer />
        <section className="pages-index">
          <header className="pages-index-header" onClick={this.getData}>
            Pages
          </header>
          <section className="pages-index-body">
            <img src={window.images.homeIcon}></img><span className="pages-index-selected">title</span><img className="pages-index-dropdown" src={window.images.hamburgerDots}></img>
            {Object.values(this.props.pages).map(page => this.sidePages())}
          </section>
        </section>
      </main>
    )
  }
}

export default withRouter(PageIndex);