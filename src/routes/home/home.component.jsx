import Directory from '../../components/directory/directory.component';

const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/5KVN2mT/hats.png',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/5BLVkFV/jackets.png',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/XYJG9GR/sneaker.png',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/Wz3NMwN/womens.png',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/7W7WF22/men.png',
    },
  ];

  return <Directory categories={categories} />;
}

export default Home;
