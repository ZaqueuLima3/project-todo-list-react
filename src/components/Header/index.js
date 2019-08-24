import React from 'react';

import { MdDone } from 'react-icons/md';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <MdDone size={24} color="#FFF" />
        </div>
        <h4>Totasks</h4>
      </Content>
    </Container>
  );
}
