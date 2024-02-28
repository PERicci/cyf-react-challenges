import { PlayerScore } from "../PlayerScore/PlayerScore";

export const HighScoreTable = () => {
  return (
    <>
      <h1>High Scores per Country</h1>
      <section>
        <ul>
          <PlayerScore />
        </ul>
      </section>
    </>
  );
};
