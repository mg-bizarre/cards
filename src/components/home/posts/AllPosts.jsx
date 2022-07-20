import style from './AllPosts.module.css';
import Post from './post/Post';

const AllPosts = ({ searchValue, people }) => {
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
    people &&
    people.filter((person) => {
      if (!searchValue) {
        return person;
      } else {
        return filterFunc(person, person.first_name, person.last_name, person.profession);
      }
    });

  return (
    <main className={style.posts}>
      {people &&
        (filtered.length > 0 ? (
          filtered.map((person) => <Post key={person.id} post={person} />)
        ) : (
          <div className={style.notFound}>No results found.</div>
        ))}
    </main>
  );
};

export default AllPosts;
