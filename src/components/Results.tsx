// Results.tsx

type ResultsPropsType = {
  results: {
    country: string,
    cityName: string,
    temperature: string,
    conditionText: string,
    icon: string
  }
};

const Results = (props: ResultsPropsType) => {
  return (
    <div>
      {props.results.country && <div>国名: {props.results.country}</div>}
      {props.results.cityName && <div>都市名: {props.results.cityName}</div>}
      {props.results.temperature && <div>気温: {props.results.temperature}<span>℃</span></div>}
      {props.results.conditionText && <div><img src={props.results.icon} alt="icon" />
      <span>{props.results.conditionText}</span></div>
      }
    </div>
  );
};

export default Results;