import React from 'react';

import { MdDone } from 'react-icons/md';

import { Container, Content, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <Content>
        <button type="button">
          <MdDone size={16} color="#00d3de" />
        </button>
        <p>Nome da task</p>
      </Content>
      <Label color="#f00" />
    </Container>
  );
}
