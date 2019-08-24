import React from 'react';
import { useDispatch } from 'react-redux';

import { MdAdd } from 'react-icons/md';

import Card from '~/components/Card';
import { addTaskRequest } from '~/store/modules/lists/actions';

import { Container, HeaderList, TaskList } from './styles';

export default function List({ data }) {
  const dispatch = useDispatch();

  function hanldeNew() {
    const data = {
      content: 'Estudar módulo 01 de NodeJS',
      label: '#7159c1',
      user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      completed: false,
    };

    dispatch(addTaskRequest(data));
  }
  return (
    <Container>
      <HeaderList>
        <h2>Tarefas</h2>
        <button type="button" onClick={hanldeNew}>
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
