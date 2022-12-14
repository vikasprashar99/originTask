import styled from 'styled-components';

//Custom Styled Amount and Date Input
export const INPUT = styled.input.attrs((props) => ({
  size: props.size || '1em',
  boxSizing: 'border-box',
}))`
  color: #4d6475;
  font-size: 1em;
  border: 1px solid #e9eef2;
  border-radius: 3px;
  box-sizing: border-box;
  width: 100%;
  /* here we use the dynamically computed prop */
  padding: ${(props) => props.size};
`;

//Custom Styled div for showing monthly amount
export const STYLEDDIVFIRST = styled.div({
  boxSizing: 'border-box',
  border: '1px solid #E9EEF2',
  borderRadius: '3px',
  padding: '1.3em',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: 'none',
});

//Custom Styled div to show other calculations
export const STYLEDDIVSECOND = styled.div({
  border: '1px solid #E9EEF2',
  borderRadius: '3px',
  padding: '1.3em',
  display: 'flex',
  borderTop: 'none',
  background: '#F4F8FA',
});

//Custom Styled confirm button
export const BUTTON = styled.button`
  width: 320px;
  height: 56px;
  background: #1b31a8;
  border-radius: 32px;
  color: white;
  font-size: 1em;
  font-weight: bold;
`;
