import { useState } from 'react';
import styles from './index.module.css';

function HoverableText({ text }) {
    const chars = text.split("").map((char, index) => {
      if (char === ' ') {
        return <span key={index}>&nbsp;</span>;
      }
      return (
        <span key={index} className={styles.hoverableLetter}>
          {char}
        </span>
      );
    });
  
    return <>{chars}</>;
  }
  

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
        <img src="/cat_image2.jpg" alt="Minimalistic Cat" className={styles.catImage} />
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
        <p><HoverableText text="Did you know that keyboards in the '80s had a mind of their own? 🎹✨" /></p>
        <p><HoverableText text="Stay awhile and enjoy the neon glow!" /></p>
      </main>
      <footer className={styles.footer}>
        Made with love and a pinch of neon.
      </footer>
    </div>
  );
}
