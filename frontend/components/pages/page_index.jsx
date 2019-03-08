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
    console.log(this.props)
  }

  componentDidMount() {
    this.props.fetchPages(this.props.match.params.placeId);
  }

  componentDidUpdate(prevState) {
    if (prevState.location !== this.props.location) {
      this.props.fetchPage(this.props.match.params.pageId);
    }
    if (prevState.otherPages.length > this.props.otherPages.length ) {
      this.props.fetchPages(this.props.match.params.placeId);
      // this.forceUpdate();
    }
  }

  createNewPage(e) {
    e.preventDefault();
    const { placeId } = this.props.match.params;
    let defaultPage = {
      title: 'New Page',
      place_id: placeId,
    };

    this.props.createPage(defaultPage)
      .then((response) => this.props.history.push(`/places/${this.props.match.params.placeId}/pages/` + response.page.id));
  }

  render () {

    // const allPagesTest = this.props.otherPages;
    // allPagesTest.unshift(this.props.firstPage);

    const allPages = Object.values(this.props.pages);
    const topPages = allPages.filter((e) => e.parent_page_id === null);
    const { firstPage } = this.props;
    const { placeId } = this.props.match.params;

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