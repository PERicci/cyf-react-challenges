import { useState } from "react";
import { CountryCard } from "../CountryCard/CountryCard";
import { allCountryScores } from "../../data/scores";

import "./HighScoreTable.css";

export const HighScoreTable = () => {
  const [scoreOrder, setScoreOrder] = useState("desc");

  function changeScoreOrderHandle() {
    setScoreOrder(scoreOrder === "desc" ? "asc" : "desc");
  }

  return (
    <>
      <header>
        <h1>High Scores per Country</h1>
        <button id="score-order" onClick={changeScoreOrderHandle}>
          {scoreOrder === "desc"
            ? "Change to ascending score"
            : "Change to descending score"}
        </button>
      </header>

      <main>
        <section>
          <ul className="country-list">
            {allCountryScores
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((countryScore) => (
                <CountryCard
                  key={countryScore.name}
                  countryName={countryScore.name}
                  playerScores={countryScore.scores}
                  scoreOrder={scoreOrder}
                />
              ))}
          </ul>
        </section>
      </main>
    </>
  );
};
