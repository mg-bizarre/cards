import AllCards from './cards/AllCards';
import style from './Home.module.css';

const Home = ({ searchValue, users, posts }) => {
  return (
    <div className={style.home}>{users && <AllCards users={users} searchValue={searchValue} posts={posts} />}</div>
  );
};

export default Home;
