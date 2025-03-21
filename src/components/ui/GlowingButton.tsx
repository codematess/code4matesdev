import React from 'react';
import styled from 'styled-components';

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'custom';
  customSize?: {
    fontSize?: string;
    padding?: string;
    letterSpacing?: string;
  };
}

const GlowingButton = ({ 
  children, 
  onClick, 
  className,
  size = 'medium',
  customSize 
}: GlowingButtonProps) => {
  return (
    <StyledWrapper size={size} customSize={customSize}>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </StyledWrapper>
  );
};

const getSizeStyles = (size: string, customSize?: GlowingButtonProps['customSize']) => {
  if (customSize) {
    return {
      fontSize: customSize.fontSize || '15px',
      padding: customSize.padding || '0.7em 2.7em',
      letterSpacing: customSize.letterSpacing || '0.06em'
    };
  }

  switch (size) {
    case 'small':
      return {
        fontSize: '12px',
        padding: '0.5em 2em',
        letterSpacing: '0.04em'
      };
    case 'large':
      return {
        fontSize: '18px',
        padding: '0.9em 3.2em',
        letterSpacing: '0.08em'
      };
    case 'medium':
    default:
      return {
        fontSize: '15px',
        padding: '0.7em 2.7em',
        letterSpacing: '0.06em'
      };
  }
};

const StyledWrapper = styled.div<{ size: string; customSize?: GlowingButtonProps['customSize'] }>`
  button {
    --color: #90E0EF;
    font-size: ${props => getSizeStyles(props.size, props.customSize).fontSize};
    padding: ${props => getSizeStyles(props.size, props.customSize).padding};
    letter-spacing: ${props => getSizeStyles(props.size, props.customSize).letterSpacing};
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 1.4em;
    border: 2px solid var(--color);
    background: linear-gradient(to right, rgba(144, 224, 239, 0.1) 1%, transparent 40%, transparent 60%, rgba(144, 224, 239, 0.1) 100%);
    color: #03044F;
    box-shadow: inset 0 0 10px rgba(144, 224, 239, 0.4), 0 0 9px 3px rgba(144, 224, 239, 0.1);
  }

  button:hover {
    color: #03044F;
    box-shadow: inset 0 0 10px rgba(144, 224, 239, 0.6), 0 0 9px 3px rgba(144, 224, 239, 0.2);
  }

  button:before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform .4s ease-in-out;
    background: linear-gradient(to right, transparent 1%, rgba(144, 224, 239, 0.1) 40%, rgba(144, 224, 239, 0.1) 60%, transparent 100%);
  }

  button:hover:before {
    transform: translateX(15em);
  }
`;

export default GlowingButton; 