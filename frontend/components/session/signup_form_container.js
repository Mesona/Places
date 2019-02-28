import { connect}  from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formType: 'Sign Up',
  shouldHide: false,
});

const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(createNewUser(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);