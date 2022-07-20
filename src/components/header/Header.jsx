import SVG from '../general/svg/SVG';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ setSearchValue }) => {
  return (
    <header className={style.header}>
      <NavLink to='/' className={style.link}>
        <div className={style.logo}>
          <SVG id='home' extraClass='homeHover' />
        </div>
      </NavLink>
      <div className={style.wrapper}>
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
      </div>
    </header>
  );
};

export default Header;
