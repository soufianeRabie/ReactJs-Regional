import React, {useEffect, useState} from 'react';

function CovidDataList() {
    const [covid, setCovid] = useState([]);

    useEffect(() => {
       fetch("https://disease.sh/v3/covid-19/countries")
           .then((response)=>response.json())
               .then((data)=>setCovid(data))

        console.log(covid)
    } , []);

    return (

        <div className="w-75 m-auto">
            <h1 className={"text text-info text-center"}> Covide Data </h1>
            <ul className="list-group">
                {covid.map((covidData, key) => (
                    <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                        {covidData.country}
                        <span className="badge bg-primary rounded-pill">{covidData.cases}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CovidDataList;
