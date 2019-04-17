import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { defaultBorderRadius, mainButtonColor, secondaryButtonColor } from '../_common/styled';

export const IconButton = ({ type, color }) => {
  switch (type) {
    case 'image':
      return (
        <Button>
          <SVG
            color={color}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="transparent"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-image"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </SVG>
        </Button>
      );
    case 'paperclip':
      return (
        <Button>
          <SVG
            color={color}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="transparent"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-paperclip"
          >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
          </SVG>
        </Button>
      );

    case 'smile':
      return (
        <Button>
          <SVG
            color={color}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="transparent"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-smile"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </SVG>
        </Button>
      );

    case 'search':
      return (
        <Button search>
          <SVG
            color={color}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </SVG>
        </Button>
      );

    case 'addContact':
      return (
        <Button>
          Add
        </Button>
      );

    default:
      return null;
  }
};

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
};

IconButton.defaultProps = {
  color: mainButtonColor,
};

const SVG = styled.svg`
  width: 2rem;
  transition: all 0.3s;
  stroke: ${props => props.color};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  font-size: inherit;
  border: 0.1rem solid ${mainButtonColor};
  border-radius: ${defaultBorderRadius};
  border-top-left-radius: ${props => props.search && 0};
  border-bottom-left-radius: ${props => props.search && 0};
  color: #64b5f6;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    background: ${mainButtonColor};
    ${SVG} {
      stroke: white;
    }
  }
`;
export const FilledButton = styled(Button)`
  padding: 0 3rem;
  margin-left: auto;
  background: ${mainButtonColor};
  color: white;
  text-transform: uppercase;
  border: none;
  &:hover {
    background: ${secondaryButtonColor};
  }
`;
