import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  & + li {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  button {
    width: 22px;
    height: 22px;
    border-radius: 50%;

    background: #00d3de60;
    border: 2px solid #00d3de;

    svg {
      display: none;
    }

    &:hover {
      svg {
        display: block;
      }
    }
  }

  p {
    margin-left: 10px;
  }
`;

export const Label = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.color};
`;
