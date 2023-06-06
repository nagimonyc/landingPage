import React from "react";
import Image from 'next/image';
import styles from './Timeline.module.css';

const Timeline = () => {
  return (
    <div className={styles.line}>
      <div className={styles.timelineImage} />
    </div>
  )
}

export default Timeline;
