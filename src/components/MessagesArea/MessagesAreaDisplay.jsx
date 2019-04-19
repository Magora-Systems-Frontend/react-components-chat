import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { MessageDisplay } from '../Message';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMessages } from '../../actions/messagesActions';

class MessagesAreaDisplay extends Component {
  static propTypes = {
    messages: PropTypes.array,
    load: PropTypes.func,
  };

  componentDidMount() {
    const { load } = this.props;
    // load();
  }

  render() {
    const { messages } = this.props;
    const messagesList = messages.map(item => (
      <MessageDisplay
        incoming={item.incoming}
        avatar={item.avatar}
        name={item.name}
        time={item.time}
        key={item.id}
      >
        {item.text}
      </MessageDisplay>
    ));
    return (
      <MessagesWrapper>
        {messagesList}
      </MessagesWrapper>
    )
  }
}


const MessagesWrapper = styled.div`
  padding: 0 3rem;
  height: 70vh;
  overflow-y: scroll;
`;

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  load: bindActionCreators(fetchMessages, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesAreaDisplay);
