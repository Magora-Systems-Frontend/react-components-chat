import { connect } from 'react-redux';
import ContactDisplay from './ContactDisplay';
import { selectContactId, fetchChatRequest } from '../../actions';
import { contactIdSelector } from '../../selectors';

function mapStateToProps(state) {
  return {
    contactId: contactIdSelector(state),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    selectContactId(id) {
      dispatch(selectContactId(id));
    },
    fetchChatRequest(id) {
      dispatch(fetchChatRequest(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDisplay);
