import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Welcome to Tabby Town '84
      </header>
      <main className={styles.mainContent}>
        <img src="/cat_image2.jpg" alt="Tabby Cat" className={styles.catImage} />
        <div className={styles.imageCredit}>
          Photo by&nbsp;
          <a href="https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Sergey Semin
          </a>&nbsp;
          on&nbsp;
          <a href="https://unsplash.com/photos/NgifUHDH5sQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
        <p>In Tabby Town, where whiskers glow,</p>
        <p>Cats dance to beats, both high and low.</p>
        <p>With tails that flick and eyes that gleam,</p>
        <p>They purr and prance in neon dreams.</p>
      </main>
      <footer className={styles.footer}>
        Made with paws and a touch of meow.
      </footer>
    </div>
  );
}
