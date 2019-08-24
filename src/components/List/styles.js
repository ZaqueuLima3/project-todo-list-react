import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    margin-bottom: 30px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #00d3de;
      border: 0;
    }
  }
`;
