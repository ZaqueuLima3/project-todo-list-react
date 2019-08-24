import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { MdClose } from 'react-icons/md';

import { addTaskRequest } from '~/store/modules/lists/actions';

import { Container, ButtonClose } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const options = [
  { id: '#fa1b41', title: 'Alta' },
  { id: '#1bfa41', title: 'Media' },
  { id: '#f1f1f1', title: 'Trivial' },
];

const schema = Yup.object().shape({
  content: Yup.string().required('O nome da tarefa é obrigatório'),
  label: Yup.string().required('A prioridade da tarefa é obrigatório'),
});

export default function ModalCreateTask({ modalIsOpen, closeModal }) {
  const dispatch = useDispatch();

  function hanldeNew(data) {
    dispatch(addTaskRequest(data));
    closeModal();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Container>
        <header>
          <h2>Adicionar nova tarefa</h2>
          <ButtonClose type="button" onClick={closeModal}>
            <MdClose size={14} color="#FFF" />
          </ButtonClose>
        </header>

        <Form onSubmit={hanldeNew} schema={schema}>
          <Input name="content" placeholder="Nome da minha tarefa" />
          <Select
            name="label"
            options={options}
            placeholder="Prioridade da tarefa"
          />
          <button type="submit">Criar tarefa</button>
        </Form>
      </Container>
    </Modal>
  );
}

Modal.setAppElement('#root');

ModalCreateTask.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
