import styled from "styled-components";

export const Container = styled.header`
  background:${props => props.theme?.headerAndFooterBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-radius: 10px;

  button {
    font-size: 1rem;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`
