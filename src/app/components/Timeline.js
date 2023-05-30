import React from "react";
import Image from 'next/image';
import styles from './Timeline.module.css';

const Timeline = () => {
  return (
    <div>
      <Image
      className={styles.line}
      src="/line.png"
      alt="timeline"
      width={1080}
      height={1}
       />
       <Image 
       className={styles.dot}
       src="/dot.png"
       alt="dot"
       width="20"
       height="20"
       />
       <Image 
       className={styles.dot}
       src="/dot.png"
       alt="dot"
       width="20"
       height="20"
       />
       <Image 
       className={styles.dot}
       src="/dot.png"
       alt="dot"
       width="20"
       height="20"
       />
       <Image 
       className={styles.dot}
       src="/dot.png"
       alt="dot"
       width="20"
       height="20"
       />
    </div>
  )
}

export default Timeline