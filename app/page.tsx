import type { NextPage } from 'next';
import Layout from './layout';
import TodoList from '../components/TodoList';

const Home: NextPage = () => {
  return (
    <Layout>
      <TodoList />
    </Layout>
  );
};

export default Home;