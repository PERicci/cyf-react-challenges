import { PlayerScore } from "../PlayerScore/PlayerScore";
import './CountryCard.css'

export const CountryCard = (props) => {
  const { countryName, playerScores } = props;

  return (
    <li className="country-card">
      <ul className="player-score-list">
        <h2>{countryName}</h2>
        {playerScores
          .slice()
          .sort((a, b) => Number(b.s) - Number(a.s))
          .map((player) => (
            <PlayerScore
              key={player.n + player.s}
              playerName={player.n}
              playerScore={Number(player.s)}
            />
          ))}
      </ul>
    </li>
  );
};
