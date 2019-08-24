import React from 'react';

import { MdAdd } from 'react-icons/md';

import Card from '~/components/Card';

import { Container, TaskList } from './styles';

export default function List() {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
        <button type="button">
          <MdAdd size={24} color="#fff" />
        </button>
      </header>
      <TaskList done>
        <Card />
        <Card />
        <Card />
      </TaskList>
    </Container>
  );
}
