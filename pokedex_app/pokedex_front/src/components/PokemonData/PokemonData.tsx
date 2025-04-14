import ColorThief from 'colorthief';
import React from 'react';
import AOS from 'aos';
import { useData } from '../../Context';
import styles from './PokemonData.module.css';
import PokemonTypeBadge from '../PokemonTypeBadge/PokemonTypeBadge';
import Loading from '../Loading/Loading';

const PokemonData = () => {
  const { pokemon, setBgColor, loading } = useData();
  const imgRef = React.useRef<HTMLImageElement>(null);

  const handleImageLoad = () => {
    if (imgRef.current) {
      if (imgRef.current && imgRef.current.complete) {
        const colorThief = new ColorThief();
        const dominantColor = colorThief.getColor(imgRef.current);
        setBgColor(dominantColor);
      }
    }
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  if (loading) return <Loading />;
  if (pokemon)
    return (
      <section className={styles.pokemonData}>
        <div className={styles.pokemonWrapper}>
          <div className={styles.pokemonInfo}>
            <h1>{pokemon.nameJapanese}</h1>
            <p className={styles.verticalText}>region: kanto</p>
            <div>
              <p>Height: {pokemon.height / 10}m</p>
              <p>Weight: {pokemon.weight / 10}kg</p>
              <div className={styles.mobileInfo}>
                <p>
                  Total Power:{' '}
                  {pokemon?.stats.reduce(
                    (total, currentValue) => total + currentValue.base_stat,
                    0,
                  )}
                </p>
                <ul>
                  {pokemon.types.map((t) => (
                    <li key={t.type}>
                      <PokemonTypeBadge pokemonType={t.type} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.pokemonImgWrapper}>
            <img
              key={pokemon.id}
              data-aos="fade-right"
              ref={imgRef}
              src={pokemon?.sprites.official_artwork}
              alt={pokemon?.name}
              onLoad={handleImageLoad}
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </section>
    );
};

export default PokemonData;
