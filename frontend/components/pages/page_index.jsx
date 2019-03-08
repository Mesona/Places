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
  }

  componentDidMount() {
    this.props.fetchPages(this.props.match.params.placeId);
  }

  componentDidUpdate(prevState) {
    if (prevState.location !== this.props.location) {
      this.props.fetchPage(this.props.match.params.pageId)
    }
  }

  createNewPage(e) {
    e.preventDefault();
    const { placeId } = this.props.match.params;
    let defaultPage = {
      title: 'New Page',
      place_id: placeId,
    };

    this.props.createPage(defaultPage);
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