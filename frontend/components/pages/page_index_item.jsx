import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
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


  sendData(e) {
  }

  destroyPage(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.page.id === this.props.pageId) {
      if (this.props.firstPage.id === this.props.pageId) {
        this.props.deletePage(this.props.page.id)
        .then(() => this.props.history.push(`/places/${this.props.placeId}/pages/${this.props.pages[1].id}`))

      } else {
        let parent = this.props.page.parent_page_id === null ? this.props.firstPage.id : this.props.page.parent_page_id;
        this.props.deletePage(this.props.page.id)
          .then(() => this.props.history.push(`/places/${this.props.placeId}/pages/${parent}`))
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
      .then((response) => this.props.history.push(`/places/${this.props.placeId}/pages/` + response.page.id))
      .then(() => this.props.fetchPages(this.props.match.params.placeId));
  }

  render () {
    const {title, src, classTitle, placeId, } = this.props; 
    const children = this.props.page === undefined ? '' : this.props.page.children;

    let styles = {
      margin: `15px`,
    };
    const disableClass = this.props.currentUser === null ? 'hamburger-disabled' : '';
    
    return (
      <ul>
      <li className={classTitle} onClick={this.sendData}>
        <NavLink to={`/places/${this.props.match.params.placeId}/pages/${this.props.pageId}`}>
          <img className="page-index-nav-icon" src={src}></img>
          <span className="pages-index-selected">{title}</span>
          <div className={`pages-index-dropdown ${disableClass}`} onClick={this.showDropdownMenu}>
            <div >
              <img className={`pages-index-button`} src={window.images.hamburgerDots}></img></div>
              { this.state.displayMenu ? (
                <ul>
                  <li onClick={this.createNewPage}><img src={window.images.headerImg} />Add Subpage</li>
                  {this.props.currentUser.id === this.props.thisPlace.owner_id ? <li onClick={this.destroyPage}><img src={window.images.trashIcon} />Remove</li> : null }
                </ul>
              ) : (
                null
                )}
           </div>
        </NavLink>
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
                  firstPage = {this.props.firstPage}
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
