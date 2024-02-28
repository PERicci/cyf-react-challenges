import { CountryCard } from "../CountryCard/CountryCard";
import { allCountryScores } from "../../data/scores";

export const HighScoreTable = () => {
  return (
    <>
      <h1>High Scores per Country</h1>
      <section>
        <ul>
          {allCountryScores
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((countryScore) => (
              <CountryCard
                key={countryScore.name}
                countryName={countryScore.name}
                countryScores={countryScore.scores}
              />
            ))}
        </ul>
      </section>
    </>
  );
};
