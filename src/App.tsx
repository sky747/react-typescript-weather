import Title from "./components/Title";
import Form from "./components/Form";
import { useState } from "react";
import Result from "./components/Results";
import Loading from "./components/Loading";
import './App.css';

export type ResultStateType = {
  country: string,
  cityName: string,
  temperature: string,
  conditionText: string,
  icon: string
};

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.weatherapi.com/v1/current.json?key=2ee7f969ebc247b7a60102038232705&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      })
      setCity("");
      setLoading(false);
    })
    .catch(error => alert("エラーが発生しました。ページをリロードして再度お試しください。"))
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} city={city}/>
        {loading ? <Loading /> : <Result results={results}/>}
      </div>
    </div>
  );
}

export default App;
