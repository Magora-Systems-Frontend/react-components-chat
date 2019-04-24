import { connect } from 'react-redux';

import { searchContact } from '../../actions';
import SearchDisplay from './SearchDisplay';

function mapDispatchToProps(dispatch) {
  return {
    searchContact(e) {
      dispatch(searchContact(e.target.value));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SearchDisplay);
