import Image from "next/image";
import "./page.css";

async function getData() {
  const res = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.88&lon=11.55', {next: {revalidate: 3600} })
 
  if (!res.ok){
    throw new Error('Failed to fetch data')
  }
console.log(res)
  return res.json()
}
export default async function Home() {
  const data = await getData();
  
  return <main>
    <div className="header">
            <font size="6">Triumf Været</font>
            <h1>Elverum</h1>
            </div>
    {
      data.properties.timeseries.map(
        function(timeobj){
          return (
            <>
            

            <div className="based">
            
              <div className="container">
                <h1>Tid & Dato</h1>
                {timeobj.time}
                <br></br>
                <h1>Temperatur</h1>
                {timeobj.data.instant.details.air_temperature}c°
                <br></br>
                <h1>Vindstyrke</h1>
                {timeobj.data.instant.details.wind_speed}m/s
                <h1>Nedbør</h1>
                {timeobj.data.instant.details.precipitation_amount_min}
                {timeobj.data.instant.details.precipitation_amount_max}

                <title>Triumf Været: Elverum</title>

              </div>
              <div className="break"></div>
              </div>
            </>
            )
        }
      )
    }
  </main> 
}
