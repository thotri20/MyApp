import Image from "next/image";
import "./page.css";
import Link from "next/link";
export default function Home() {
  return (
   <div className="background">
     <div className="based">
      <title>Triumf Været</title>
      <div className="header">
        <font font size="6">
          Triumf Været
        </font>
        <h1>Hvor vil du se været</h1>
      </div>
      <div>
        <Link href="/weather/hamar">
          <div className="knapp">
            <button>Hamar</button>
          </div>
        </Link>
        <br></br>
        <Link href="/weather/elverum">
          <div className="knapp">
            <button>Elverum</button>
          </div>
        </Link>
      </div>
    </div>
   </div>
  );
}
