const posts = [
  {
    id: 1,
    title: '제목1',
    content: '내용111',
    createdAt: '2023-06-22',
  },
  {
    id: 2,
    title: '제목2',
    content: '내용22222',
    createdAt: '2023-06-24',
  },
  {
    id: 3,
    title: '제목3',
    content: '내용3333333',
    createdAt: '2023-06-20',
  },
  {
    id: 4,
    title: '제목4',
    content: '내용4',
    createdAt: '2023-06-28',
  },
  {
    id: 5,
    title: '제목5',
    content: '내용5555',
    createdAt: '2023-06-29',
  },
];

export function getPosts() {
  return posts;
}

export function getPostById(id) {
  const numberId = parseInt(id);
  return posts.find(item => item.id === numberId);
}
