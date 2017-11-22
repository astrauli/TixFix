import { connect } from 'react-redux';
import { createUser, loginUser } from '../actions/session_actions';
import SessionsModal from './sessions_modal';

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
  loginUser: (user) => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToProps)(SessionsModal);
