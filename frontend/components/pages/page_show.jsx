import React from 'react';
import { withRouter } from 'react-router-dom';


class PageShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: typeof pages === 'undefined' ? "" : pages[thisPageId].title,
      placeTitle: typeof places === 'undefined' ? "" : places[this.props.match.params.placeId].title,
      pageBody: typeof pages === 'undefined' ? `` : pages[thisPageId].body,
      // place: getState().entitites.places[this.props.match.params.placeId],
      // page: getState().entities.pages[this.props.location.pathname.split('/')[4]],
    };

    this.getData = this.getData.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
  }

  getData () {
    console.log(this.props);
    console.log("Props ^ specs BELOW");
    // console.log(this.props.places[175].id)
    console.log(this.state);
  }

  componentDidMount() {
    const thisPageId = this.props.location.pathname.split('/')[4];
    const thisPlaceId = this.props.location.pathname.split('/')[2];
    this.props.fetchPage(thisPageId);
    this.props.fetchPlace(thisPlaceId);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }


  render () {
    const thisPageId = this.props.location.pathname.split('/')[4];
    const thisPlaceId = this.props.location.pathname.split('/')[2];

    const { pages, places } = this.props;
    // console.log(typeof pages[thisPageId] === 'undefined')
    return (
        <section className="page-show">
          <header className="page-show-header" onClick={this.getData}>
            <div className="place-name">
              <input
                type="string"
                // value={typeof places[0] === 'undefined' ? "" : getState().entities.places[this.props.match.params.placeId].title}
                // value={typeof places[0] === 'undefined' ? "" : places[0].title}
                // name="place[title]"
                // onChange={this.update('placeTitle')}
                onChange={() => console.log("change change change")}
                >
              </input>
            </div>
            <div className="page-title">
              <textarea
                value={typeof pages[thisPageId] === 'undefined' ? `` : pages[thisPageId].title}
                name="title"
                // onChange={this.update('title')}
                onChange={() => console.log("change change change")}
                >
                  {typeof pages[thisPageId] === 'undefined' ? "" : pages[thisPageId].title}
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