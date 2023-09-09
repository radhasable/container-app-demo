import { useState } from 'react';
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
        Welcome to SynthWave '84
      </header>
      <main className={styles.mainContent}>
        <p>Did you know that keyboards in the '80s had a mind of their own? 🎹✨</p>
        <p>Stay awhile and enjoy the neon glow!</p>
      </main>
      <footer className={styles.footer}>
        Made with love and a pinch of neon.
      </footer>
    </div>
  );
}
