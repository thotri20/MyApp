import "./page.css"
export default function Home() {
    useEffect(() => {
      const plane = document.getElementById('plane');
  
      if (plane) {
        const flyAnimation = () => {
          plane.style.left = '-50px';
          plane.style.transform = 'rotate(0deg)';
  
          plane.animate(
            [{ left: '-50px', transform: 'rotate(0deg)' }, { left: '100%', transform: 'rotate(360deg)' }],
            {
              duration: 5000,
              iterations: Infinity,
              easing: 'linear',
            }
          );
        };
  
        flyAnimation();
      }
    }, []);
  
    return (
      <div className={styles.container}>
        <Head>
          <title>Plane Animation - Next.js</title>
          <meta name="description" content="Plane animation with Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <div className={styles.sky}>
            <div id="plane" className={styles.plane}></div>
          </div>
        </main>
      </div>
    );
  }