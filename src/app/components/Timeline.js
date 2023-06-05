import React from "react";
import Image from 'next/image';
import styles from './Timeline.module.css';

const Timeline = () => {
  return (
    <div>
      <Image
      className={styles.line}
      src="/timeline.png"
      alt="timeline"
      width={1080}
      height={84}
       />
    </div>
  )
}

export default Timeline