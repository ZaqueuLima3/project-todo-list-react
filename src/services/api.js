let id = 0;
export function getNewId() {
  return id++;
}

export function loadLists() {
  return [
    {
      id: getNewId(),
      content: 'Estudar ReactJs',
      label: '#fa1b41',
      completed: false,
    },
    {
      id: getNewId(),
      content: 'Criar app simples em ReactJs',
      label: '#fa1b41',
      completed: false,
    },
    {
      id: getNewId(),
      content: 'Estudar React Native',
      label: '#fa1b41',
      completed: false,
    },
    {
      id: getNewId(),
      content: 'Criar app simples em React Native',
      label: '#1bfa41',
      completed: false,
    },
    {
      id: getNewId(),
      content: 'Estudar NodeJs',
      label: '#1bfa41',
      completed: false,
    },
    {
      id: getNewId(),
      content: 'Criar api simples em NodeJs',
      label: '#f1f1f1',
      completed: true,
    },
    {
      id: getNewId(),
      content: 'Configurar ambiente de desenvolvimento',
      label: '#1bfa41',
      completed: true,
    },
    {
      id: getNewId(),
      content: 'Configurar react native',
      label: '#fa1b41',
      completed: true,
    },
  ];
}
