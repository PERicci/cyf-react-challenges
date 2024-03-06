import { PlayerScore } from "../PlayerScore/PlayerScore";
import "./CountryCard.css";

export const CountryCard = (props) => {
  const { countryName, playerScores, scoreOrder } = props;

  return (
    <li className="country-card">
      <ul className="player-score-list">
        <h2>{countryName}</h2>
        {playerScores
          .slice()
          .sort((a, b) => {
            if (scoreOrder === "desc") {
              return Number(b.s) - Number(a.s);
            }
            return Number(a.s) - Number(b.s);
          })
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
