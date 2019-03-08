import React from 'react';
import { withRouter } from 'react-router-dom';
import PageShowContainer from './page_show_container';
import PageIndexItemContainer from './page_index_item_container';


class PageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.createNewPage = this.createNewPage.bind(this);
  }

  getData () {
    // console.log(this.state);
    // console.log("STATE ^ PROPS BELOW");
    console.log(this.props);
    // console.log(Object.values(this.props.pages)[Object.values(this.props.pages).length - 1].id);
    // console.log("PAGE INFO");
    // console.log(this.props.firstPage.id);
  }

  componentDidMount() {
    // this.props.fetchPlaces();
    this.props.fetchPages(this.props.match.params.placeId);
  }

  componentDidUpdate(prevState) {
    if (this.props.otherPages.length != prevState.otherPages.length ) {
      // console.log('TESTING')
      // console.log(this.props.pages)
      if (this.props.entities && this.props.entites.pages) {
        const currentPages = Object.values(this.props.entities.pages);
        const newPageId = currentPages[currentPages.Length].id;
        // console.log('START')
        // console.log(currentPages)
        // console.log(newPageId)
        // console.log('end')
        this.props.history.push(`/places/${placeId}/pages/${newPageId}`);

      }
    }
  }

  createNewPage(e) {
    e.preventDefault();
    const { placeId } = this.props.match.params;
    // console.log(placeId)
    let defaultPage = {
      title: 'New Page',
      place_id: placeId,
    };

    this.props.createPage(defaultPage);
  }

  componentWillUnmount() {
    // this.props.pages = {};
    // this.props.fetchPages(0);
  }

  render () {

    const allPagesTest = this.props.otherPages;
    allPagesTest.unshift(this.props.firstPage);

    const allPages = Object.values(this.props.pages);
    const { firstPage } = this.props;
    const { placeId } = this.props.match.params;
    const topPages = allPages.filter((e) => e.parent_page_id === null);

    return (
      <main className="page">
        <PageShowContainer />
        <section className="pages-index">
          <header className="pages-index-header" onClick={this.getData}>
            Pages
            <div className="blue-knub-thingy"></div>
            <div className="bottom-border"></div>
          </header>
          <section className="pages-index-body">
            {topPages.map(page => <PageIndexItemContainer
              key={page.id}
              pageId = {page.id}
              title={page.title}
              page={page}
              // layers='1'
              placeId = {placeId}
              firstPage = {this.props.firstPage}
              src={page.id === firstPage.id ? window.images.homeIcon : window.images.headerImg}
              classTitle="page-index-items"
            />)}
          </section>
          <section className="pages-index-footer">
            <button className="new-page-plus-button" onClick={this.createNewPage}><span className="new-page-plus-text">+</span></button>
          </section>
        </section>
      </main>
    )
  }
}

export default withRouter(PageIndex);