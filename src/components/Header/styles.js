import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #4d0187;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #00d3de;
    border-radius: 8px;
  }

  h4 {
    color: #fff;
    margin-left: 10px;
    font-size: 26px;
    font-weight: 500;
    font-style: italic;
  }
`;
