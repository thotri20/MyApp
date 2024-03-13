import Image from "next/image";
import "./page.css";
import Link from "next/link";
async function getData() {
  const res = await fetch(
    "https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=39.103119&lon=-84.512016",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(res);
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="based">
      <div>
        <div className="header">
          <font size="6">Triumf Været</font>
          <h1>Cincinnati, Ohio</h1>
        </div>
        <div>
          <Link href="/weather">
            <div className="knapp">
              <button>Tilbake</button>
            </div>
          </Link>
        </div>
        <title>Cincinnati, Ohio</title>
      </div>
      {data.properties.timeseries.map(function (timeobj) {
        const date = new Date(timeobj.time);
        const formattedDateTime = new Intl.DateTimeFormat("nb-NO", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hourCycle: "h23",
        }).format(date);

        return (
          <>
            <div className="based">
              <div className="container">
                <div className="timebox">{formattedDateTime}</div>
                <div className="bracket1">
                  <div className="vind">
                    <div className="heading">
                      <h1>Vindstyrke</h1>
                      <div style={{ position: "relative", zIndex: "1" }}>
                        <Image
                          src="/wind-icon.png"
                          alt="Wind Icon"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                    {timeobj.data.instant.details.wind_speed}m/s
                  </div>
                  <div className="vertStripe"></div>
                </div>
                <div className="bracket2">
                  <div className="temp">
                    <div className="heading">
                      <h1>Temperatur</h1>
                      <Image
                        src="/temp-icon.png"
                        alt="Temperature Icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    {timeobj.data.instant.details.air_temperature}°C
                  </div>
                  <div className="vertStripe"></div>
                </div>
                <div className="bracket3">
                  <div className="nedbor">
                    <div className="heading">
                      <h1>Nedbør</h1>
                      <img 
                      src="/rain-icon.png"
                      alt="Rain icon"
                      width={20}
                      height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="horizStripe"></div>
            </div>
          </>
        );
      })}
    </main>
  );
}
