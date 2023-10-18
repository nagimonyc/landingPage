

import Image from 'next/image';
import styles from './page.module.css';


export default function Privacy() {
  console.log('privacy')
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


    <div className={styles.columnOne}>
      <h2>Nagimo Privacy policy</h2>
      <p>
        Last Updated: October 17th 2023
        Introduction
        At Nagimo, your privacy is of the utmost importance to us. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to ensure your data is protected.

        What Information We Collect
        The only personal information we collect is:

        Email Address
        Password
        This information is collected through the Firebase Firestore API and is used exclusively to manage user authentication in our app.

        How We Use Your Information
        The email and password information is used only to authenticate users to allow access to their Nagimo accounts. We do not use this information for any other purpose nor do we share it with third parties.

        Security Measures
        We use industry-standard encryption techniques to store and protect your password. Your data is stored securely on Firebase Firestore, which also employs robust security measures to protect data.

        Changes to the Privacy Policy
        We reserve the right to modify this Privacy Policy at any time. If we make changes, we will notify our users through an in-app notification or other means to ensure they are aware of the new policy.

        Contact Us
        If you have any questions about this Privacy Policy or our data practices, please contact us at [Insert Contact Information].

        Again, consult with a legal expert to make this document compliant with all applicable laws and specifically tailored to your app and its features.</p>


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