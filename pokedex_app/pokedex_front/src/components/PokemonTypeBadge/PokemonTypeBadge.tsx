import bug from '../../assets/bug.svg';
import dark from '../../assets/dark.svg';
import dragon from '../../assets/dragon.svg';
import electric from '../../assets/electric.svg';
import fairy from '../../assets/fairy.svg';
import fighting from '../../assets/fighting.svg';
import fire from '../../assets/fire.svg';
import flying from '../../assets/flying.svg';
import ghost from '../../assets/ghost.svg';
import grass from '../../assets/grass.svg';
import ground from '../../assets/ground.svg';
import ice from '../../assets/ice.svg';
import normal from '../../assets/normal.svg';
import poison from '../../assets/poison.svg';
import psychic from '../../assets/psychic.svg';
import rock from '../../assets/rock.svg';
import steel from '../../assets/steel.svg';
import water from '../../assets/water.svg';
import styles from './PokemonTypeBadge.module.css';

const typeBadges = {
  bug: bug,
  dark: dark,
  dragon: dragon,
  electric: electric,
  fairy: fairy,
  fighting: fighting,
  fire: fire,
  flying: flying,
  ghost: ghost,
  grass: grass,
  ground: ground,
  ice: ice,
  normal: normal,
  poison: poison,
  psychic: psychic,
  rock: rock,
  steel: steel,
  water: water,
};

const PokemonTypeBadge = ({ pokemonType }: { pokemonType: string }) => {
  const badge = typeBadges[pokemonType as keyof typeof typeBadges];
  return (
    <>
      <img className={styles.badge} src={badge} alt={pokemonType} />
    </>
  );
};

export default PokemonTypeBadge;
