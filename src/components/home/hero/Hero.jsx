import SVG from '../../general/svg/SVG';
import style from './Hero.module.css';

const Hero = ({ setSearchValue }) => {
  return (
    <section className={style.hero}>
      <button type='button' className={style.btn}>
        <div className={style.btnText}>Share your thoughts</div>
        <SVG id='add' />
      </button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=''
        className={style.form}
      >
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className={style.input}
          id='input'
          type='text'
          placeholder='Search'
        />
        <label htmlFor='input'>
          <div className={style.searchIcon}>
            <SVG id='search' />
          </div>
        </label>
      </form>
    </section>
  );
};

export default Hero;
