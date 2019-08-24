import styled from 'styled-components';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

export const Container = styled(PerfectScrollbar)`
  width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: #333;
      font-weight: 500;
    }

    button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #00d3de;
      border: 0;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    span {
      color: #fa1b41;
      margin-bottom: 10px;
      align-self: flex-start;
    }

    select,
    input {
      width: 100%;
      height: 36px;
      margin-bottom: 5px;
      padding: 0 15px;

      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      color: #333;
      font-size: 16px;
    }

    button {
      width: 100%;
      height: 36px;
      margin-top: 5px;

      background: #00d3de;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const ButtonClose = styled.button``;
