import Sprite from '../../../assets/sprite.svg';
import styles from './SVG.module.css';

const SVG = ({ id, extraClass }) => {
  return (
    <div className={styles.svg}>
      <svg role='img' className={`${styles[id]} ${extraClass}`}>
        <use className={styles[id]} xlinkHref={`${Sprite}#${id}`} />
      </svg>
    </div>
  );
};

export default SVG;
