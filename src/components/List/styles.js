import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;
`;

export const HeaderList = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  margin-bottom: 30px;

  & + ul {
    margin-bottom: 30px;
  }

  h2 {
    font-weight: 500;
    font-size: 16px;
    padding: 0 10px;
  }

  button {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #00d3de;
    border: 0;
  }
`;

export const TaskList = styled.ul`
  opacity: ${props => (props.done ? 0.6 : 1)};
`;
