import styled from "styled-components";

export const Container = styled.footer`
  background: ${props => props.theme?.headerAndFooterBackgroundColor};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-radius: 10px;
  margin-top: 1rem;

  p {
    font-size: 0.725rem;
  }

  button {
    font-size: 1rem;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`
