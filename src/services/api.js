let id = 0;
export function getNewId() {
  return id++;
}

export function loadLists() {
  return [
    {
      id: getNewId(),
      content: 'Estudar módulo 01 de NodeJS',
      label: '#7159c1',
      user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      completed: false,
    },
    {
      id: getNewId(),
      content:
        'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
      label: '#7159c1',
      user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      completed: false,
    },
    {
      id: getNewId(),
      content: 'Estudar módulo 03 de React Native',
      label: '#7159c1',
      user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      completed: false,
    },
    {
      id: getNewId(),
      content:
        'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
      label: '#54e1f7',
      user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      completed: false,
    },
    {
      id: getNewId(),
      content: 'Gravar testes e deploy ReactJS',
      label: '#54e1f7',
      user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      completed: false,
    },
    {
      id: getNewId(),
      content: 'Gravar aula sobre deploy e CI com React Native',
      label: '',
      completed: true,
    },
    {
      id: getNewId(),
      content: 'Gravar testes e deploy ReactJS',
      label: '#54e1f7',
      completed: true,
    },
    {
      id: getNewId(),
      content:
        'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
      label: '#7159c1',
      completed: true,
    },
  ];
}
