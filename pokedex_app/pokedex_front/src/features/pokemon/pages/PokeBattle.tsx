import PokeBattleSelect from '../../../components/PokeBattleSelect/PokeBattleSelect';
import PokemonSelected from '../../../components/PokemonArena/PokemonArena';
import PokemonBattleHeader from '../../../components/PokemonBattleHeader/PokemonBattleHeader';

const PokeBattle = () => {
  return (
    <div className="pokeBattle container">
      <PokemonBattleHeader />
      <PokemonSelected />
      <PokeBattleSelect />
    </div>
  );
};

export default PokeBattle;
