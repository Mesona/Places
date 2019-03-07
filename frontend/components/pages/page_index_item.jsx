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
    this.props.fetchPage(this.props.page.id);
    this.props.fetchPlaces();
    this.props.fetchPages(this.props.match.params.placeId);
  }

  sendData(e) {
    // console.log(this.props)
    // this.props.history.push(`/places/${this.props.match.params.placeId}/pages/${this.props.pageId}/`);
    // <NavLink to={`/places/${this.props.match.params.placeId}/pages/${this.props.pageId}/`} />;
    console.log('ITEMS DATA')
    console.log(this.props)
    // const { childrenTest } = this.props;
    // console.log(childrenTest)
    // console.log(this.props.page)
    // console.log(e.currentTarget)
  }

  destroyPage(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.deletePage(this.props.page.id);
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
    const { placeId } = this.props.match.params;
    console.log('CREATING NEW PAGE')
    console.log(this.props.page.id)
    console.log('WOO YEAH')
    let defaultPage = {
      title: 'New Page',
      place_id: placeId,
      parent_page_id: this.props.page.id,
    };

    this.props.createPage(defaultPage);
  }

  render () {
    const {title, id, src, layers, classTitle, placeId } = this.props; 
    const children = this.props.page.children;

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
          { children !== undefined ?
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
