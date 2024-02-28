import { PlayerScore } from "../PlayerScore/PlayerScore"

export const CountryCard = (props) => {
  console.log(props);
  
  return <li>
    <ul>
      <h2></h2>
      <PlayerScore />
    </ul>
  </li>
}