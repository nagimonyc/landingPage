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

      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Nagimo Privacy policy</h2>
        <br></br>
        <p>
          Last Updated: October 17th 2023 </p>
        <br></br>
        <p><strong> Introduction</strong> </p>
        <p>
          At Nagimo, your privacy is of the utmost importance to us. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to ensure your data is protected.
        </p>
        <br></br>
        <p><strong>
          What Information We Collect </strong></p>
        <p>
          The only personal information we collect is: </p>
        <li>

          Email Address </li>
        <li>
          Password </li>
        <p>
          This information is collected through the Firebase Firestore API and is used exclusively to manage user authentication in our app. </p>
        <br></br>
        <p><strong>
          How We Use Your Information </strong></p>
        <p>
          The email and password information is used only to authenticate users to allow access to their Nagimo accounts. We do not use this information for any other purpose nor do we share it with third parties.
        </p>
        <br></br>
        <p><strong>
          Security Measures</strong> </p>

        <p>
          We use industry-standard encryption techniques to store and protect your password. Your data is stored securely on Firebase Firestore, which also employs robust security measures to protect data.
        </p>
        <br></br>
        <p><strong>
          Changes to the Privacy Policy </strong></p>
        <p>
          We reserve the right to modify this Privacy Policy at any time. If we make changes, we will notify our users through an in-app notification or other means to ensure they are aware of the new policy.
        </p>
        <br></br>
        <p><strong>
          Contact Us </strong></p>
          <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us at <a href='mailto:nagimo.nyc@nagimo.org' className={styles.privacy}>nagimo.nyc@nagimo.org</a>.

          </p>

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
