import { connect } from 'react-redux';
import { searchContact, createContact } from '../../actions/contacts';
import SearchDisplay from './SearchDisplay';

function mapDispatchToProps(dispatch) {
  return {
    searchContact(name) {
      dispatch(searchContact(name));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SearchDisplay);
