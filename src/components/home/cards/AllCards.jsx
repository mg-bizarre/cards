import style from './AllCards.module.css';
import Card from './card/Card';

const AllPosts = ({ searchValue, posts, users }) => {
  const filterFunc = (find, ...rules) => {
    if (
      rules.some((arg) => {
        return arg.toLowerCase().includes(searchValue.toLowerCase());
      })
    ) {
      return find;
    }
  };

  const filtered =
    posts &&
    posts.filter((post) => {
      if (!searchValue) {
        return post;
      } else {
        return filterFunc(post, post.title, post.body);
      }
    });

  return (
    <main className={style.posts}>
      {posts &&
        (filtered.length > 0 ? (
          filtered.map((post) => <Card users={users} key={post.id} card={post} />)
        ) : (
          <div className={style.notFound}>No results found.</div>
        ))}
    </main>
  );
};

export default AllPosts;
