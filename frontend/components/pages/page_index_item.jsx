import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PageIndexItemContainer from './page_index_item_container';
import { fetchPage } from '../../actions/pages_actions';

class PageIndexItem extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      displayMenu: false,
    }

    this.destroyPage = this.destroyPage.bind(this);
    this.sendData = this.sendData.bind(this);
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.createNewPage = this.createNewPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchPages(this.props.match.params.placeId);
  }

  componentWillUnmount() {
    // this.props.fetchPages([]);
  }

  sendData(e) {
    // console.log('ITEMS DATA')
    // console.log(this.props)
  }

  destroyPage(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.currentUser.id === this.props.thisPlace.owner_id) {
        // || this.props.currentUser.id === this.props.pages[this.props.match.params.pageId].owner_id) {
      if (this.props.page.id === this.props.pageId) {
        this.props.deletePage(this.props.page.id)
          .then(() => this.props.history.push(`/places/${this.props.placeId}/pages/${this.props.thisPlace.pages[0].id}`));
        // let firstPage = Object.values(this.props.thisPlace).pages[0];
        // this.props.history.push(`/places/${this.props.placeId}/pages/${firstPage}`);
  
      }

    }
  }


  showDropdownMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  createNewPage(e) {
    e.preventDefault();
    const { placeId, page } = this.props.match.params;
    let defaultPage = {
      title: 'New Page',
      place_id: placeId,
      parent_page_id: this.props.page.id,
    };
    this.props.createPage(defaultPage)
      .then((response) => console.log(response));
  }

  componentDidUpdate(prevProps) {
    if (Object.values(getState().entities.pages).length > Object.values(prevProps.pages).length) {
      // console.log('YEAH');
      const length = Object.values(this.props.pages).length;
      const newPageId = Object.values(this.props.pages)[length - 1].id;
      // this.props.history.push(`/places/${this.props.placeId}/pages/${newPageId}`);
      // this.forceUpdate();
    }
  }

  render () {
    const {title, id, src, layers, classTitle, placeId, page } = this.props; 
    const children = this.props.page === undefined ? '' : this.props.page.children;

    let styles = {
      margin: `15px`,
    };

    return (
      <ul>
      <li className={classTitle} onClick={this.sendData}>
        <Link to={`/places/${this.props.match.params.placeId}/pages/${this.props.pageId}/`}>
          <img className="page-index-nav-icon" src={src}></img>
          <span className="pages-index-selected">{title}</span>
          <div className="pages-index-dropdown" onClick={this.showDropdownMenu}>
            <div >
              <img className="pages-index-button" src={window.images.hamburgerDots}></img></div>
              { this.state.displayMenu ? (
                <ul>
                  <li onClick={this.createNewPage}><img src={window.images.headerImg} />Add Subpage</li>
                  <li onClick={this.sendData}><img src={window.images.headerImg} />Specs</li>
                  <li onClick={this.destroyPage}><img src={window.images.trashIcon} />Remove</li>
                </ul>
              ) : (
                null
                )}
           </div>
        </Link>
           </li>
           <ul>
          { children !== undefined && children !== '' ?
            <li style={styles}>
              {children.map(page =>
                <PageIndexItemContainer
                  key={page.id}
                  pageId = {page.id}
                  title={page.title}
                  page={getState().entities.pages[page.id]}
                  placeId = {placeId}
                  src={ window.images.headerImg }
                  classTitle="page-index-items subpage-index-items"
                />)}
            </li>: null
          }
          </ul>
      </ul>
    );
  };

}

export default withRouter(PageIndexItem);
