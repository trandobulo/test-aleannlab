import React from "react";
import { JobBarProps } from "./types";
import TimeAgo from "react-timeago";
import styles from "./styles";

function JobBar({ jobData }: JobBarProps): JSX.Element {
  const starSvg = (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z"
        fill="#38415D"
      />
    </svg>
  );

  const bookmarkSvg = (
    <svg
      width="18"
      height="23"
      viewBox="0 0 18 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 4.00016C1 2.5274 2.19391 1.3335 3.66667 1.3335H14.3333C15.8061 1.3335 17 2.5274 17 4.00016V19.9936C17 21.1595 15.609 21.7639 14.7567 20.9682L9.90994 16.4428C9.39761 15.9645 8.60239 15.9645 8.09007 16.4428L3.24327 20.9682C2.39104 21.7639 1 21.1595 1 19.9936V4.00016Z"
        stroke="#70778B"
        stroke-width="2"
      />
    </svg>
  );

  const locationSvg = (
    <svg
      width="13"
      height="18"
      viewBox="0 0 13 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z"
        fill="#878D9D"
      />
    </svg>
  );

  return (
    <div className={styles.jobBar}>
      <div className={styles.content}>
        <div className={styles.contentImageContainer}>
          <img src={jobData.pictures[0]}></img>
        </div>
        <div className={styles.shortDescription}>
          <h2 className={styles.shortDescriptionTitle}>
            {jobData.description}
          </h2>
          <p className={styles.shortDescriptionName}>{jobData.name}</p>
          <div className={styles.shortDescriptionLocation}>
            <div className={styles.shortDescriptionlocationIcon}>
              {locationSvg}
            </div>
            {jobData.address}
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.rate}>
          {[starSvg, starSvg, starSvg, starSvg, starSvg]}{" "}
          {/*should I do a separate component for it ?*/}
        </div>
        <div className={styles.optionsFrame}>
          <div className={styles.bookmarkFrameIconContainer}>{bookmarkSvg}</div>
          <div className={styles.bookmarkFramePosted}>
            <TimeAgo date={jobData.updatedAt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobBar;
