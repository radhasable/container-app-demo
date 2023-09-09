import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>80's Neon Synth Vibes</title>
        <meta name="description" content="A funky 80's synth vibe with neon elements" />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          body {
            background-color: #2b2b2b;
            font-family: 'Arial', sans-serif;
          }
          .neon-text {
            font-size: 3em;
            color: #fff;
            text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff0000, 0 0 20px #ff0000, 0 0 25px #ff0000, 0 0 30px #ff0000, 0 0 35px #ff0000;
            animation: blink 1.5s infinite;
          }
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}</style>
      </Head>

      <main className={styles.main}>
        <h1 className="neon-text">
          Welcome to the 80's!
        </h1>

        <p className={styles.description}>
          Dive into the world of neon lights and synth vibes.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Next.js and 80's Neon Vibes</p>
      </footer>
    </div>
  )
}
