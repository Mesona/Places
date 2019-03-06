import React from 'react';
import { withRouter } from 'react-router-dom';
import PageShowContainer from './page_show_container';
import PageIndexItemContainer from './page_index_item_container';


class PageIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  getData () {
    console.log(this.state);
    console.log("STATE ^ PROPS BELOW");
    console.log(this.props);
    console.log("PAGE INFO");
    console.log(this.props.firstPage.id)
  }

  componentDidMount() {
    this.props.fetchPages(this.props.match.params.placeId);
  }

  render () {

    const allPagesTest = this.props.otherPages;
    allPagesTest.unshift(this.props.firstPage);

    const allPages = Object.values(this.props.pages);
    const {firstPage} = this.props;

    return (
      <main className="page">
        <PageShowContainer />
        <section className="pages-index">
          <header className="pages-index-header">
            Pages
          </header>
          <section className="pages-index-body">
            {allPages.map(page => <PageIndexItemContainer
              key={page.id}
              pageId = {page.id}
              title={page.title}
              page={page}
              src={page.id === firstPage.id ? window.images.homeIcon : window.images.headerImg}
            />)}
          </section>
        </section>
      </main>
    )
  }
}

export default withRouter(PageIndex);