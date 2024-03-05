import Image from "next/image";

export default function Home() {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let randomNumber = getRandomNumber(1, 100000);
  return (
    <div>
      {randomNumber}
    </div>

    
  );
}
