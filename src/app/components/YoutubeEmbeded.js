import React from "react";
import PropTypes from 'prop-types';
import styles from "./YoutubeEmbeded.module.css"

const YoutubeEmbed = ({ embedId }) => (
  <div className={styles.video}>
        <div className={styles.videoWrapper}>
    <iframe
      width="499.8"
      height="288"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;