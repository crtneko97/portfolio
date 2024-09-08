import React from 'react';
import styles from './DownloadButton.module.css';
import { DownloadContentProps } from '../../interfaces/downloadcontent';

const downloadButton: React.FC<DownloadContentProps> = ({ title, link }) => {
  return (
    <>
      {/* Link to the resume file in the public folder */}
      <a href={link} download className={styles.resumeButton}>
      {title}
      </a>
    </>
  );
}

export default downloadButton;
