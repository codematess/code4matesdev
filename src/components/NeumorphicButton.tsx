import React from 'react';
import styled from 'styled-components';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
}

const NeumorphicButton = ({ 
  children, 
  onClick, 
  className,
  variant = 'primary',
  size = 'medium'
}: NeumorphicButtonProps) => {
  return (
    <StyledWrapper variant={variant} size={size}>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </StyledWrapper>
  );
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return {
        padding: '0.5rem 2rem',
        fontSize: '0.875rem'
      };
    case 'large':
      return {
        padding: '0.75rem 3rem',
        fontSize: '1.125rem'
      };
    case 'medium':
    default:
      return {
        padding: '0.5rem 2rem',
        fontSize: '1rem'
      };
  }
};

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'secondary':
      return {
        gradient: 'linear-gradient(to right, #0077B6, #00B4D8)'
      };
    case 'tertiary':
      return {
        gradient: 'linear-gradient(to right, #0096C7, #48CAE4)'
      };
    case 'primary':
    default:
      return {
        gradient: 'linear-gradient(to right, #023E8A, #02033B)'
      };
  }
};

const StyledWrapper = styled.div<{ variant: string; size: string }>`
  button {
    position: relative;
    padding: ${props => getSizeStyles(props.size).padding};
    font-size: ${props => getSizeStyles(props.size).fontSize};
    font-weight: bold;
    color: #000;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    border: none;
    outline: none;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: ${props => getVariantStyles(props.variant).gradient};
      transition: all 0.5s ease-in-out;
      z-index: -1;
      border-radius: 12px;
    }

    &:hover {
      transform: scale(1.05);
      color: white;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

      &:before {
        left: 0;
      }
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

export default NeumorphicButton; 