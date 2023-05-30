import Image from 'next/image'
import styles from './page.module.css'

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
          <a href="https://www.instagram.com/nagimonyc/"
            // the target attribute opens the link in a new tab
            target="_blank">
            <Image
              src=""
              alt="instagram"
              width={40}
              height={40}
              className={styles.vercelLogo}
              target="_blank"
            />
          </a>
          <a href="https://www.linkedin.com/company/nagimo-trk/"
            target="_blank">
            <Image
              src="/li.png"
              alt="linkedin"
              width={40}
              height={40}
              className={styles.vercelLogo}
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

      <div className="twoColumn">
        <div className="columnOne">
          <h2>nagimo</h2>
          <p>Vision</p>
          <p>Product</p>
        </div>
        <div className="columnTwo">
          <video></video>
        </div>
      </div>

      <div className={styles.grid}>

        <div
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socials}
        >
          <a href=""
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
