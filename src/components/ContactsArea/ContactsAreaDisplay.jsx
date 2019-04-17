import React, { Component } from 'react';
import { ContactDisplay } from '../Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ContactsAreaDisplay extends Component {
  static propTypes = {
    contacts: PropTypes.array,
  };

  render() {
    const { contacts } = this.props;
    const contactsList = contacts.map(item => (
      <ContactDisplay
        avatar={item.avatar}
        name={item.name}
        lastMessage={item.lastMessage}
        date={item.date}
        id={item.id}
        key={item.id}
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

export default connect(mapStateToProps, null)(ContactsAreaDisplay);
