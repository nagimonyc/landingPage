import Image from 'next/image';
import styles from './page.module.css';
import YoutubeEmbeded from "./components/YoutubeEmbeded";
import Timeline from './components/Timeline';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <Image
            src="/logo.png"
            alt="nagimo Logo"
            className={styles.vercelLogo}
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
                width={40}
                height={40}
                className={styles.vercelLogo}
              />
            </a>
            <a href="https://www.instagram.com/nagimonyc/"

              target="_blank">
              <Image
                src="/ig.svg"
                alt="instagram"
                width={40}
                height={40}
                className={styles.vercelLogo}
                target="_blank"
              />
            </a>
            <a href="mailto:nagimo.nyc@gmail.com"
              target="_blank">
              <Image
                src="/email.png"
                alt="email"
                width={40}
                height={40}
                className={styles.vercelLogo}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.twoColumn}>
        <div className={styles.columnOne}>
          <h2>nagimo</h2>
          <p>A network for athletes to track and share their passion</p>
          <p>We are currently building our first MVP - an indoor climbing tracker and social networking platform. </p>
        </div>
        <div className={styles.columnTwo}>
          <YoutubeEmbeded embedId="q6SWnd11fSA" />
        </div>
      </div>

      <div>
        <Timeline></Timeline>
      </div>

      <div className={styles.grid}>

        <div
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
              width={40}
              height={40}
            />
          </a>
          <a href="https://www.youtube.com/@nagimonyc"
            target="_blank">
            <Image
              src="/yt.png"
              alt="youtube"
              className={styles.vercelLogo}
              width={40}
              height={28}
            />
          </a>

        </div>
      </div>
    </main>
  )
}
