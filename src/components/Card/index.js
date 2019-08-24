import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { MdDone, MdClose } from 'react-icons/md';

import {
  doneTaskSuccess,
  undoneTaskSuccess,
  removeTaskSuccess,
} from '~/store/modules/lists/actions';

import { Container, Content, Label, Close } from './styles';

export default function Card({ data, index }) {
  const dispatch = useDispatch();

  function handleDone() {
    dispatch(doneTaskSuccess(index));
  }

  function handleUndone() {
    dispatch(undoneTaskSuccess(index));
  }

  function hanldeRemove() {
    dispatch(removeTaskSuccess(index));
  }

  return (
    <Container>
      <Content>
        {data.completed ? (
          <button type="button" onClick={handleUndone}>
            <MdClose size={16} color="#00d3de" />
          </button>
        ) : (
          <button type="button" onClick={handleDone}>
            <MdDone size={16} color="#00d3de" />
          </button>
        )}
        <p>{data.content}</p>
      </Content>
      <Label color={data.label} />

      <Close onClick={hanldeRemove}>
        <MdClose size={10} color="#fa4541" />
      </Close>
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    completed: PropTypes.bool,
    content: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
