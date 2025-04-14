import React from 'react';
import styles from './Slider.module.css';
import { useData } from '../../Context';
import { useNavigate } from 'react-router-dom';
import right from '../../assets/arrow-right-3098.svg';
import left from '../../assets/arrow-left-3099.svg';

const Slider = () => {
  const [count, setCount] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const [translate, setTranslate] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const ref = React.useRef<null | HTMLDivElement>(null);
  const { setPokemonInput, loading, pokemon } = useData();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (pokemon) {
      setPosition((pokemon.id - 1) / itemsPerPage);
    }
  }, [pokemon, itemsPerPage]);

  React.useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 1024) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(10);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      const moveSlider = width * position;
      if (moveSlider >= 0) {
        setTranslate(moveSlider);
      } else {
        setTranslate(0);
        setPosition(0);
      }
    }
  }, [position]);

  React.useEffect(() => {
    async function getCount() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=1025',
      );
      const data = await response.json();
      setCount(data.count);
    }
    getCount();
  }, []);

  const handlePokemonSelect = (id: string) => {
    setPokemonInput(id);
    navigate(`/${id}`);
  };

  function handleBackButton() {
    if (position === 0) {
      setPosition(0);
      return;
    }

    setPosition(position - 1);
  }

  if (loading) <>Carregando...</>;
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.wrapper}>
        <div
          className={styles.slider}
          ref={ref}
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {Array.from({ length: count }, (_, i) => (
            <div
              key={i}
              onClick={() => handlePokemonSelect((i + 1).toString())}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <nav>
        <button onClick={handleBackButton}>
          <img src={left} />
        </button>
        <button onClick={() => setPosition(position + 1)}>
          <img src={right} />
        </button>
      </nav>
    </div>
  );
};

export default Slider;
