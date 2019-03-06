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
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {

  }

  render () {
    const thisPageId = this.props.location.pathname.split('/')[4];
    const thisPlaceId = this.props.location.pathname.split('/')[2];

    const { pages, places } = this.props;
    console.log(typeof pages[thisPageId] === 'undefined')
    return (
        <section className="page-show">
          <header className="page-show-header" onClick={this.getData}>
            <div className="place-name">
              <input
                type="string"
                value={typeof places[0] === 'undefined' ? "" : places[0].title}
                name="place[title]"
                >
              </input>
            </div>
            <div className="page-title">
              <textarea
                value={typeof pages[thisPageId] === 'undefined' ? `` : pages[thisPageId].body}
                name="title"
                onChange={this.handleChange}>
                  {typeof pages[thisPageId] === 'undefined' ? "" : pages[thisPageId].body}
              </textarea>
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