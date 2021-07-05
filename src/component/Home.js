import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useEffect, useState } from "react";

function Home() {
  const [date, setDate] = useState();
  const [cities, setCities] = useState();
  const [getName, setGetName] = useState()
  const [country, setCountry] = useState();
  const [getData, setgetData] = useState(false);
  const [tab , setTab] = useState(false)
  let state = useSelector(state => state);
  useEffect(() => {
    axios.get('https://api.covidtracking.com/v1/states/current.json')
      .then(function (response) {
        setDate(response.data);
      })
      .catch(function (error) {

        console.log(error);
      })
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(function (city) {
        setCities(city.data)
      })
      .catch(function (error) {

        console.log(error);
      })

  }, [])

  state.main = date;
  state.countries = cities;
  let getInd = (i) => { 
    setgetData(true)
    setGetName(state?.countries[i].name)
    let a = state?.countries[i].alpha2Code;
    let b = state?.main.length;
    for (let i = 0; i < b; i++) {
      if (a === state?.main[i].state) {
        let b = i;
        console.log(i);
        setCountry(i)
      }
    }
  }

  return (
    <div className="App">
      <h1 className="mb-5">Home</h1>
      <div className="d-flex">
        <div className=' continer w-25 '>

          {state?.countries?.map((e, i) => {
            return (
              <div key={i} className='m-2'>
                <button className="btn btn-info rounded shadow" onClick={() => getInd(i)}>STATE ==  {e.name}</button>
              </div>
            )
          })
          }
        </div>
        {getData ? (
          <div className=" container p-5 h-100  mx-2 bg-white bg-gradient shadow rounded">
            <h1>State == {getName}</h1>
            <h1>DATE == {state.main[country].date}</h1>
            <h1>TOTAL == {state.main[country].total}</h1>
            <h1>POSITIVE == {state.main[country].positive}</h1>
            <h1>NEGATIVE == {state.main[country].negative}</h1>
            <h1>DEATH == {state.main[country].death}</h1>
            <h1>HOSPITALIZED == {state.main[country].hospitalized}</h1>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Home;