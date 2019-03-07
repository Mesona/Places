import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PageIndexItemContainer from './page_index_item_container';

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

  // componentDidMount() {
  // }

  sendData(e) {
    // console.log(this.props)
    // this.props.history.push(`/places/${this.props.match.params.placeId}/pages/${this.props.pageId}/`);
    // <NavLink to={`/places/${this.props.match.params.placeId}/pages/${this.props.pageId}/`} />;
    console.log('ITEMS DATA')
    // console.log(this.props)
    console.log(this.props.page.children)
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
    console.log(placeId)
    let defaultPage = {
      title: 'New Page',
      place_id: placeId,
    };

    this.props.createPage(defaultPage);
  }

  render () {
    const {title, id, src, layers } = this.props; 
    const children = this.props.page.children;
    // const spacing = 

    return (
      <ul>

      <li className="page-index-items" onClick={this.sendData}>
      {/* <div className="page-index-items" onClick={this.sendData}> */}
        {/* <Link to={`/places/${this.props.match.params.placeId}/pages/${this.props.pageId}/`}> */}
          <img className="page-index-nav-icon" src={src}></img>
          <span className="pages-index-selected">{title}</span>
          <div className="pages-index-dropdown" onClick={this.showDropdownMenu}>
            {/* <div className="pages-index-button" > */}
            <div >
              <img className="pages-index-button" src={window.images.hamburgerDots}></img></div>
              { this.state.displayMenu ? (
                <ul>
                  <li onClick={this.createNewPage}><img src={window.images.headerImg} />Add Subpage</li>
                  <li onClick={this.destroyPage}><img src={window.images.trashIcon} />Remove</li>
                  {/* <li onClick={(e) => this.props.deletePage(this.props.page.id)}><img src={window.images.trashIcon} />Remove</li> */}
                </ul>
              ) : (
                null
                )}
           </div>
           </li>
          { children !== undefined ?
            <li>
              {children.map(page =>
                <PageIndexItemContainer
                  key={page.id}
                  pageId = {page.id}
                  title={page.title}
                  page={page}
                  layers={layers + 1}
                  // placeId = {placeId}
                  src={ window.images.headerImg }
                />)}
            </li> : null
          }
        {/* </Link> */}
        {/* <div>
          { children !== undefined ? 
          children.map( page =>
            <PageIndexItemContainer
              key={page.id}
              pageId = {page.id}
              title={page.title}
              page={page}
              src={ window.images.headerImg }
            />) : null
          }
        </div> */}
      {/* </div> */}
      {/* </li> */}
      </ul>
    );
  };

}

export default withRouter(PageIndexItem);
