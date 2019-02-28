import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      password: this.props.user.password,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput (field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="fading" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className="session-form">
        <div onClick={this.props.closeModal} className="close-x">X</div><br></br><br></br>
        <div className="modal-title">{this.props.formType}</div><br></br>
        <form className="login-form-box">
          <label className={this.props.shouldHide ? 'hidden' : ''} >Username:<br></br>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <label>Email:<br></br>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <label>Password:<br></br>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
        <div className="session-errors"><br></br>{this.renderErrors()}</div>
      </div>
    )
  }
}

export default SessionForm;