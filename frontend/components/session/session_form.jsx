import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      password: this.props.user.password,
      active: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOtherSubmit = this.handleOtherSubmit.bind(this);
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

  handleOtherSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.otherForm().then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        <li className="fading">
          {this.props.errors[0]}
        </li>
        {/* {this.props.errors.map((error, i) => (
          <li className="fading" key={`error-${i}`}>
            {error}
          </li>
        ))} */}
      </ul>
    );
  }

  render () {
    return (
      <div className="session-form">
        <div onClick={this.props.closeModal} className="close-x">X</div><br></br><br></br>
        <div className="modal-title">{this.props.formType}</div><br></br>
        <form className="login-form-box">
          <label className={this.props.shouldHide ? 'hidden' : ''} ><br></br>
            <section className="descriptor-div">
              <span className={this.state.active === 'username' ? 'placeholderText' : ''}>Username</span>
            </section>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              onClick={()=>{this.setState({active: 'username'})}}
              onMouseLeave={() => {this.setState({active: false})}}
            />
          </label>
          <label><br></br>
            <section className="descriptor-div">
              <span className={this.state.active === 'email' ? 'placeholderText' : ''}>Email</span>
            </section>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              onClick={()=>{this.setState({active: 'email'})}}
              onMouseLeave={() => {this.setState({active: false})}}
            />
          </label>
          <label><br></br>
            <section className="descriptor-div">
              <span  className={this.state.active === 'password' ? 'placeholderText' : ''}>Password</span>
            </section>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              onClick={()=>{this.setState({active: 'password'})}}
              onMouseLeave={() => {this.setState({active: false})}}
            />
          </label>
          <div className="session-errors"><br></br>{this.renderErrors()}</div>
          <nav className="session-form-buttons">
            <div className="other-form-button">
            {this.props.otherForm}
            </div>
            <button className="form-button" onClick={this.handleSubmit}>{this.props.formType}</button>
          </nav>
        </form>
      </div>
    )
  }
}

export default SessionForm;