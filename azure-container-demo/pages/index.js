import styles from './index.module.css';

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.container}>
      <header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={hovered ? styles.headerHovered : styles.header}
      >
        Welcome to Tabby Town '84
      </header>
      <main className={styles.mainContent}>
        <img src="/cat_image2.jpg" alt="Tabby Cat" className={styles.catImage} />
        <div className={styles.imageCredit}>
          Photo by 
          <a href="https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
             Sergey Semin 
          </a> 
          on 
          <a href="https://unsplash.com/photos/NgifUHDH5sQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
             Unsplash 
          </a>
        </div>
        <p>Did you know that keyboards in the '80s had a purr-fect rhythm? 🎹✨</p>
        <p>Stay a-while and enjoy the meow-gical glow!</p>
      </main>
      <footer className={styles.footer}>
        Made with paws and a touch of meow.
      </footer>
    </div>
  );
}
