import React, { Component } from 'react';
import { ContactDisplay } from '../Contact';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContacts } from '../../actions/contactsActions';
import {fetchMessages} from "../../actions/messagesActions";

class ContactsAreaDisplay extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    load: PropTypes.func,
    loadMesages: PropTypes.func,
  };

  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { contacts, loadMesages } = this.props;
    const contactsList = contacts.map(item => (
      <ContactDisplay
        avatar={item.avatar}
        name={item.name}
        lastMessage={item.lastMessage}
        date={item.date}
        id={item.id}
        key={item.id}
        loadChat={loadMesages}
      />));
    return (
      <>
        {contactsList}
      </>
    )
  }
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  load: bindActionCreators(fetchContacts, dispatch),
  loadMesages: bindActionCreators(fetchMessages, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsAreaDisplay);
