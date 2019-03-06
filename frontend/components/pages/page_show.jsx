import React from 'react';
import PageIndexContainer from './page_index_container';
import { withRouter } from 'react-router-dom';


class PageShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: '',
      placeTitle: '',
      pageBody: '',
    };

    this.getData = this.getData.bind(this);
  }

  getData () {
    console.log(this.props);
    console.log("Props ^ specs BELOW");
    // console.log(this.props.places[175].id)
  }

  componentDidMount() {
    const thisPageId = this.props.location.pathname.split('/')[4];
    const thisPlaceId = this.props.location.pathname.split('/')[2];
    this.props.fetchPage(thisPageId);
    this.props.fetchPlace(thisPlaceId);
  }

  render () {
    const thisPageId = this.props.location.pathname.split('/')[4];
    const thisPlaceId = this.props.location.pathname.split('/')[2];
    // const thisPage = this.props.pages[thisPlaceId]
    // const thisPlace = typeof this.props.places === 'undefined' ? "" : this.props.place[thisPlaceId];
    
    // console.log(this.props.pages[thisPageId])
    // console.log('SHOW PROPS')
    // console.log(typeof this.props.places === 'undefined')
    // console.log(this.props.places)
    // const
    // this.state = {
    //   placeTitle: this.props.place[thisPlaceId].title,
    //   pageTitle: this.props.page[thisPageId].title,
    //   pageBody: this.props.page[thisPageId].body,
    // };
    // while (this.state.pageTitle === '' ) {
    //   if (typeof this.props.places !== 'undefined') {
    //     let newState = {
    //       placeTitle: this.props.place[thisPlaceId].title,
    //       pageTitle: this.props.page[thisPageId].title,
    //       pageBody: this.props.page[thisPageId].body, 
    //     };
    //   }

    //   this.setState(newState);
    // }

    const { place } = this.props;
    return (
        <section className="page-show">
          <header className="page-show-header" onClick={this.getData}>
            <div className="place-name">
            {/* Place Title */}
              {/* {this.state.placeTitle} */}
            </div>
            <div className="page-title">
              {/* <textarea value={this.state.pageTitle} name="title"></textarea> */}
              <textarea name="title"></textarea>
            </div>
          </header>
          <section className="page-show-body">
            {this.state.pageBody}
          </section>
        </section>
    )
  }

}

export default withRouter(PageShow);