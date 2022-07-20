import Sprite from '../../../assets/sprite.svg';
import styles from './SVG.module.css';

const SVG = ({ id, extra }) => {
  return (
    <div className={styles.svg}>
      <svg role='img' className={`${styles[id]} ${extra}`}>
        <use className={styles[id]} xlinkHref={`${Sprite}#${id}`} />
      </svg>
    </div>
  );
};

export default SVG;
