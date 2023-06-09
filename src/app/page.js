import Image from 'next/image';
import styles from './page.module.css';
import YoutubeEmbed from "./components/YoutubeEmbeded";
import Timeline from './components/Timeline';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
      <div className={styles.description}>
        <div>
          <Image
            src="/logo.png"
            alt="nagimo Logo"
            
            width={106}
            height={76}
            priority
          />
        </div>
        <div
          className={styles.card}>
          <p>
            Interested? Reach out <span>-&gt;</span>
          </p>

          <div
            className={styles.socials}
          >
            <a href="https://www.linkedin.com/company/nagimo-trk/"
              // the target attribute opens the link in a new tab
              target="_blank">
              <Image
                src="/li.png"
                alt="linkedin"
                width={35}
                height={35}
                
              />
            </a>
            <a href="https://www.instagram.com/nagimonyc/"

              target="_blank">
              <Image
                src="/ig.svg"
                alt="instagram"
                width={35}
                height={35}
                
                target="_blank"
              />
            </a>
            <a href="mailto:nagimo.nyc@gmail.com"
              target="_blank">
              <Image
                src="/email.png"
                alt="email"
                width={35}
                height={35}
                
              />
            </a>
          </div>
        </div>
      </div>
      </div>

      <div className={styles.twoColumn}>
        <div className={styles.columnOne}>
          <h2>nagimo</h2>
          <p>A network for <strong>athletes</strong> to track their <strong>passion</strong></p>
          <p className={styles.mvp}>MVP #1: Indoor climbing tracker and social network.</p>
        </div>
        <div className={styles.columnTwo}>
          <YoutubeEmbed embedId="q6SWnd11fSA" />
        </div>
      </div>

      <div className={styles.timeline}>
        <Timeline></Timeline>
      </div>

      <div className={styles.grid}>

        <footer
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socials}
        >
          <a href="https://github.com/nagimonyc/landingPage"
            target="_blank">
            <Image
              src="/gh.png"
              alt="github"
              className={styles.vercelLogo}
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.youtube.com/@nagimonyc"
            target="_blank">
            <Image
              src="/yt.png"
              alt="youtube"
              className={styles.vercelLogo}
              width={30}
              height={21.4}
            />
          </a>

        </footer>
      </div>
    </main>
  )
}
