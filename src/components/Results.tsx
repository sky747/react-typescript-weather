// Results.tsx
import { ResultStateType } from "../App";

type ResultsPropsType = {
  results: ResultStateType;
};

const Results = ({results}: ResultsPropsType) => {
  const { country, cityName, temperature, conditionText, icon } = results;
  return (
    <>
      {country && <div className="results-country">国名: {country}</div>}
      {cityName && <div className="results-city">都市名: {cityName}</div>}
      {temperature && <div className="results-temp">気温: {temperature}<span>℃</span></div>}
      {conditionText && <div className="results-condition"><img src={icon} alt="icon" />
      <span>{conditionText}</span></div>
      }
    </>
  );
};

export default Results;