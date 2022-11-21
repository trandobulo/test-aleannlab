import React from "react";
import { Link } from "react-router-dom";
import { JobBarProps } from "./types";
import TimeAgo from "react-timeago";
import bookmark from "../../svg/bookmark.svg";
import star from "../../svg/star.svg";
import location from "../../svg/location.svg";

import styles from "./styles";

function JobBar({ jobData }: JobBarProps): JSX.Element {
  const renderRate = (): JSX.Element[] => {
    return Array(5)
      .fill(star, 0)
      .map((item, index) => (
        <img className={styles.rateIcon} src={item} key={index}></img>
      ));
  };

  return (
    <div className={styles.jobBar}>
      <div className={styles.content}>
        <div className={styles.contentImageContainer}>
          {jobData.pictures[0] && <img src={jobData.pictures[0]}></img>}
        </div>
        <div className={styles.shortDescription}>
          <h1 className={styles.shortDescriptionTitle}>
            <Link to={`/jobs/${jobData.id}`}>{jobData.title}</Link>
          </h1>
          <p className={styles.shortDescriptionName}>{jobData.name}</p>
          <div className={styles.shortDescriptionLocation}>
            <div className={styles.shortDescriptionlocationIcon}>
              <img src={location}></img>
            </div>
            {jobData.address}
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.rateContainer}>{renderRate()}</div>
        <div className={styles.optionsFrame}>
          <div className={styles.bookmarkFrameIconContainer}>
            <img src={bookmark}></img>
          </div>
          <div className={styles.bookmarkFramePosted}>
            <span className={styles.bookmarkFramePostedPrefix}>
              {`posted `}
            </span>
            <TimeAgo date={jobData.updatedAt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobBar;
