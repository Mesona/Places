import React from 'react';
import { withRouter } from 'react-router-dom';


class PageShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // page: {title: ''},
      // place: {title: '', body: ''},
      pageTitle: '',
      pageBody: '',
      placeTitle: '',
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
        pageTitle: response.page.title,
        pageBody: response.page.body,
      }));
    this.props.fetchPlace(thisPlaceId)
      // .then((response) => console.log(response));
      .then((response) => this.setState({
        place: response.place,
        placeTitle: response.place.title,
      }));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
      // console.log(this.state)
      // console.log(field)
      document.addEventListener('click', this.sendUpdate);
    };
  }

  sendUpdate() {
    // let updatedPlace = this.props.thisPlace;
    // updatedPlace.title = this.state.placeTitle;
    
    // let updatedPage = this.props.thisPage;
    // updatedPage.title = this.state.pageTitle;
    // updatedPage.body = this.state.pageBody;

    document.removeEventListener('click', this.sendUpdate);
    this.setState({
      place: {title: this.state.placeTitle, id: this.state.place.id},
      page: {title: this.state.pageTitle, body: this.state.pageBody, id: this.state.page.id},
    });
    this.props.updatePlace(this.state.place);
    this.props.updatePage(this.state.page);
    // this.props.updatePlace(updatedPlace);
    // this.props.updatePage(updatedPage);
  }


  render () {
    const thisPageId = this.props.location.pathname.split('/')[4];
    const thisPlaceId = this.props.location.pathname.split('/')[2];

    const { pages, places } = this.props;
    // console.warn(this.props)
    const disableClass = this.props.currentUser === null ? 'input-disabled' : '';

    return (
        <section className={`page-show`}>
          <header className={`page-show-header ${disableClass}`} onClick={this.getData}>
            <div className="place-name">
              <input
                type="string"
                value={this.state.placeTitle}
                onChange={this.update('placeTitle')}
              >
              </input>
            </div>
            <div className="page-title">
              <textarea
                // value={typeof pages[thisPageId] === 'undefined' ? `` : pages[thisPageId].title}
                value={this.state.pageTitle}
                name="page.title"
                onChange={this.update('pageTitle')}
                // onChange={() => console.log("change change change")}
                >
                  {/* {typeof pages[thisPageId] === 'undefined' ? "" : pages[thisPageId].title} */}
                  {/* {this.state.page.title} */}
              </textarea>
            </div>
          </header>
          <section className="page-show-body">
            <textarea
            value={this.state.pageBody}
            name="page.body"
            onChange={this.update('pageBody')}
            >
              {this.state.pageBody}
            </textarea>
          </section>
        </section>
    )
  }

}

export default withRouter(PageShow);