import "./PlayerScore.css";

export const PlayerScore = (props) => {
  const { playerName, playerScore } = props;
  return (
    <li className="player-score">
      <h3>{playerName}</h3>
      <p>{playerScore}</p>
    </li>
  );
};
