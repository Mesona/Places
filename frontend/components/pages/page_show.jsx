import React from 'react';
import { withRouter } from 'react-router-dom';


class PageShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {title: ''},
      place: {title: '', body: ''},
    };

    this.getData = this.getData.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
    this.sendUpdate = this.sendUpdate.bind(this);
  }

  getData () {
    console.log(this.props);
    console.log('PROPS ABOVE STATE BELOW');
    console.log(this.state);
  }

  componentDidMount() {
    const thisPageId = this.props.location.pathname.split('/')[4];
    const thisPlaceId = this.props.location.pathname.split('/')[2];
    this.props.fetchPage(thisPageId)
      // .then((response) => console.error(response))
      .then((response) => this.setState({
        page: response.page,
      }));
    this.props.fetchPlace(thisPlaceId)
      // .then((response) => console.log(response));
      .then((response) => this.setState({
        place: response.place,
      }));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
      document.addEventListener('click', this.sendUpdate);
    };
  }

  sendUpdate() {
    let updatedPlace = this.props.thisPlace;
    updatedPlace.title = this.state.placeTitle;
    
    let updatedPage = this.props.thisPage;
    updatedPage.title = this.state.pageTitle;
    updatedPage.body = this.state.pageBody;

    document.removeEventListener('click', this.sendUpdate);
    this.props.updatePlace(updatedPlace);
    this.props.updatePage(updatedPage);
  }


  render () {
    const thisPageId = this.props.location.pathname.split('/')[4];
    const thisPlaceId = this.props.location.pathname.split('/')[2];

    const { pages, places } = this.props;
    // console.warn(this.props)

    return (
        <section className="page-show">
          <header className="page-show-header" onClick={this.getData}>
            <div className="place-name">
              <input
                type="string"
                value={this.state.place.title}
                name="placeTitle"
                onChange={this.update('placeTitle')}
                >
              </input>
            </div>
            <div className="page-title">
              <textarea
                // value={typeof pages[thisPageId] === 'undefined' ? `` : pages[thisPageId].title}
                value={this.state.page.title}
                name="pageTitle"
                onChange={this.update('pageTitle')}
                // onChange={() => console.log("change change change")}
                >
                  {typeof pages[thisPageId] === 'undefined' ? "" : pages[thisPageId].title}
              </textarea>
            </div>
          </header>
          <section className="page-show-body">
            <textarea
            value={this.state.page.body}
            ></textarea>
          </section>
        </section>
    )
  }

}

export default withRouter(PageShow);