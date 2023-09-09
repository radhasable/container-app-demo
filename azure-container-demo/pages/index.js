import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Azure Container Demo</title>
        <meta name="description" content="Demo app for Azure Container Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Azure Container Demo!
        </h1>

        <p className={styles.description}>
          This is a simple Node.js app built with Next.js and React.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Next.js and Azure</p>
      </footer>
    </div>
  )
}
