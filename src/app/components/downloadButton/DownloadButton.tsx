import React from 'react';
import styles from './DownloadButton.module.css';
import { DownloadContentProps } from '../../interfaces/downloadcontent';

// Use the correct casing for the component name
const DownloadButton: React.FC<DownloadContentProps> = ({ title, link }) => {
  return (
    <a href={link} download className={styles.resumeButton}>
      {title}
    </a>
  );
};

export default DownloadButton;
