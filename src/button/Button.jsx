import React from 'react';
import styled from 'styled-components';

export const MyButton = styled.button`
  padding: 18px 38px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: none;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(45deg, #6e48aa, #9d50bb);
  box-shadow: 0 5px 15px rgba(110, 72, 170, 0.4);

  /* Before pseudo-element */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #9d50bb, #6e48aa);
    opacity: 0;
    transition: all 0.4s ease;
    z-index: -1;
  }

  /* After pseudo-element */
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg);
    transition: all 0.5s ease;
    z-index: -1;
  }

  i {
    margin-left: 10px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 25px rgba(110, 72, 170, 0.6);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover::after {
    transform: rotate(45deg) translate(30%, 30%);
  }

  &:hover i {
    transform: scale(1.3);
  }

  /* Responsive styles directly on this component */
  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

function Button() {
  return (
    <MyButton>
      Click Me <i className="icon">★</i>
    </MyButton>
  );
}

export default Button;
