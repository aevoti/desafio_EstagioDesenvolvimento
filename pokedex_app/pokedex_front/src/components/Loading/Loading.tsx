import pokeball from '../../assets/pokeball-pokemon-svgrepo-com.svg';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={pokeball} alt="Carregando..." />
    </div>
  );
};

export default Loading;
