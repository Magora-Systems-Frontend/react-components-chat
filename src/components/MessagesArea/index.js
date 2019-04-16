import React from 'react';
import styled from 'styled-components';
import Message from '../Message';
import avatar from '../../images/avatar.png';

const MessagesArea = () => (
  <MessagesWrapper>
    <Message incoming avatar={avatar}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi qui minima ex vitae quas
      deserunt molestias, quasi quos molestiae ipsum cumque unde laboriosam vel consequuntur.
    </Message>
    <Message avatar={avatar}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illo, laboriosam laborum
      et fugit mollitia non dicta excepturi aliquid quos eos tempore itaque nemo voluptates nihil
      officia exercitationem repellat vero facilis dolores animi?
    </Message>
    <Message incoming avatar={avatar}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem possimus
      consequatur! Ex eaque, perferendis dolorum sapiente adipisci, placeat tempore dolor
      temporibus, ab deserunt praesentium eos rerum harum necessitatibus quis?
    </Message>
    <Message incoming avatar={avatar}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem possimus
      consequatur! Ex eaque, perferendis dolorum sapiente adipisci, placeat tempore dolor
      temporibus, ab deserunt praesentium eos rerum harum necessitatibus quis?
    </Message>
    <Message incoming avatar={avatar}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem possimus
      consequatur! Ex eaque, perferendis dolorum sapiente adipisci, placeat tempore dolor
      temporibus, ab deserunt praesentium eos rerum harum necessitatibus quis?
    </Message>
    <Message avatar={avatar}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illo, laboriosam laborum
      et fugit mollitia non dicta excepturi aliquid quos eos tempore itaque nemo voluptates nihil
      officia exercitationem repellat vero facilis dolores animi?
    </Message>
    <Message avatar={avatar}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illo, laboriosam laborum
      et fugit mollitia non dicta excepturi aliquid quos eos tempore itaque nemo voluptates nihil
      officia exercitationem repellat vero facilis dolores animi?
    </Message>
    <Message incoming avatar={avatar}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem possimus
      consequatur! Ex eaque, perferendis dolorum sapiente adipisci, placeat tempore dolor
      temporibus, ab deserunt praesentium eos rerum harum necessitatibus quis?
    </Message>
  </MessagesWrapper>
);

export default MessagesArea;

const MessagesWrapper = styled.div`
  padding: 0 3rem;
  height: 70vh;
  overflow-y: scroll;
`;
