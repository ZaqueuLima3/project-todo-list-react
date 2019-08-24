import React from 'react';
import { useSelector } from 'react-redux';

import List from '~/components/List';

import { Container } from './styles';

export default function Board() {
  const lists = useSelector(state => state.lists.lists);
  return (
    <Container>
      <List data={lists} />
    </Container>
  );
}
