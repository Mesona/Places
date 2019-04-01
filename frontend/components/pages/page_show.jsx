import React from 'react';
import { withRouter } from 'react-router-dom';


class PageShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: '',
      pageBody: '',
      placeTitle: '',
    };

    this.getData = this.getData.bind(this);
    this.update = this.update.bind(this);
    this.sendUpdate = this.sendUpdate.bind(this);
  }

  componentDidMount() {
    this.props.fetchPage(this.props.match.params.pageId)
      .then((response) => this.setState({
        page: response.page,
        pageTitle: response.page.title,
        pageBody: response.page.body,
      }));
    this.props.fetchPlace(this.props.match.params.placeId)
      .then((response) => this.setState({
        place: response.place,
        placeTitle: response.place.title,
      }));
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pageId !== this.props.match.params.pageId) {
      this.props.fetchPage(this.props.match.params.pageId)
      .then((response) => this.setState({
        page: response.page,
        pageTitle: response.page.title,
        pageBody: response.page.body,
      }));
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
      document.addEventListener('click', this.sendUpdate);
    };
  }

  sendUpdate() {
    document.removeEventListener('click', this.sendUpdate);
    this.setState({
      place: {title: this.state.placeTitle, id: this.state.place.id},
      page: {title: this.state.pageTitle, body: this.state.pageBody, id: this.state.page.id},
    });
    this.props.updatePlace(this.state.place);
    this.props.updatePage(this.state.page);
  }


  render () {
    const disableClass = this.props.currentUser === null ? 'input-disabled' : '';

    return (
        <section className={`page-show`} onClick={this.getData}>
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
                value={this.state.pageTitle}
                name="page.title"
                onChange={this.update('pageTitle')}
                >
              </textarea>
            </div>

          </header>
          <section className="page-show-body">
          </section>
        </section>
    )
  }

}

export default withRouter(PageShow);