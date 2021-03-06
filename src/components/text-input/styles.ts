import styled from 'styled-components'

export const StyledInput = styled.input`
  position: relative;
  width: 100%;
  margin: 0;
  font-family: inherit;
  font-size: 1.7rem;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  padding: 1.1rem 1.1rem 1.1rem 4.3rem;
  color: inherit;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);

  ::placeholder {
    font-weight: 400;
    font-style: italic;
    color: #a6a6a6;
  }
`
