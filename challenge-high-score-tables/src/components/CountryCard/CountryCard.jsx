import { PlayerScore } from "../PlayerScore/PlayerScore";

export const CountryCard = (props) => {
  const { countryName, playerScores } = props;

  return (
    <li>
      <ul>
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
