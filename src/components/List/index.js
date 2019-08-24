import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdAdd } from 'react-icons/md';

import Card from '~/components/Card';
import Modal from '~/components/ModalCreateTask';

import { Container, HeaderList, TaskList } from './styles';

export default function List({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Container>
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <HeaderList>
        <h2>Tarefas</h2>
        <button type="button" onClick={openModal}>
          <MdAdd size={24} color="#fff" />
        </button>
      </HeaderList>
      <TaskList>
        {data.map((card, index) => {
          return (
            !card.completed && <Card key={card.id} index={index} data={card} />
          );
        })}
      </TaskList>

      <HeaderList>
        <h2>Concluído</h2>
      </HeaderList>

      <TaskList done>
        {data.map((card, index) => {
          return (
            card.completed && <Card key={card.id} index={index} data={card} />
          );
        })}
      </TaskList>
    </Container>
  );
}

List.propTypes = {
  data: PropTypes.array,
};

List.defaultProps = {
  data: [],
};
