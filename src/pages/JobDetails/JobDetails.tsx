import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { JobDetailsProps } from "./types";
import { JobData } from "../../components/JobBar/types";
import Map from "../../components/Map/Map";
import Button from "../../components/Button/Button";
import TimeAgo from "react-timeago";
import { withRouter } from "react-router-dom";
import share from "../../svg/share.svg";
import bookmark from "../../svg/bookmark.svg";
import bookmarkStar from "../../svg/bookmarkStar.svg";
import location from "../../svg/location.svg";
import styles from "./styles";

function JobDetails({ match, jobList }: JobDetailsProps) {
  const getJobData = (jobList: JobData[], id: string) => {
    const jobData: JobData | undefined = jobList.find(
      (item: JobData) => item.id === id
    );

    if (jobData) {
      return jobData;
    } else {
      throw Error(`Can't find job with id: ${id} `);
    }
  };

  const jobData = getJobData(jobList, match.params.jobId);

  const changeBookmarkIcon = (windowWidth: number) => {
    return windowWidth < 1280 ? bookmarkStar : bookmark;
  };

  const renderImages = (pictures: string[]) => {
    return (
      <div className={styles.optionContainer}>
        {pictures.map((item, index) => {
          return <img className={styles.picture} src={item} key={index}></img>;
        })}
      </div>
    );
  };

  const renderOptions = (
    type: "optionEmployment" | "optionBenefits",
    items: string[]
  ) => {
    const caption: string =
      type === "optionEmployment" ? "employment options" : "benefits";
    return (
      <>
        <h5 className={styles.titleSmall}>{caption}</h5>
        <div className={styles.optionContainer}>
          {items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Button type={type} value={item} />
              </React.Fragment>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className={styles.jobDetails}>
      <div className={styles.jobDetailsColumn}>
        <div className={styles.jobDetailsHeader}>
          <h2 className={styles.title("normal")}>job details</h2>
          <div className={styles.jobDetailsHeaderOptions}>
            <div className={styles.bookmarkContainer}>
              <img
                className={styles.bookmarkIcon}
                src={changeBookmarkIcon(useWindowWidth())}
              ></img>
              <p className={styles.bookmarkIconCaption}>save to my list</p>
            </div>
            <div className={styles.shareContainer}>
              <img className={styles.shareIcon} src={share}></img>
              <p className={styles.shareIconCaption}>share</p>
            </div>
          </div>
        </div>
        <div className={styles.jobDescription}>
          <h4 className={styles.jobTitle}>{jobData.title}</h4>
          <div className={styles.salaryContainer}>
            <div className={styles.timeAgo}>
              posted <TimeAgo prefix="" date={jobData.updatedAt} />
            </div>
            <div className={styles.salary}>
              <p className={styles.titleSmall}>brutto, per year</p>
              <p>{jobData.salary}</p>
            </div>
          </div>
          <p className={styles.description}>{jobData.description}</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button type="button" value="apply now" />
        </div>
        <div className={styles.infoBlock}>
          <h2 className={styles.title("normal")}>attached pictures</h2>
          {renderImages(jobData.pictures)}
        </div>

        <div className={styles.infoBlock}>
          <h2 className={styles.title("normal")}>additional info</h2>
          {renderOptions("optionEmployment", jobData.employment_type)}
          {renderOptions("optionBenefits", jobData.benefits)}
        </div>
        <Button type="buttonReturn" value="return to job board" />
      </div>
      <h2 className={styles.title("hidable")}>contacts</h2>
      <div className={styles.mapContainer}>
        <div className={styles.mapInfoBlock}>
          <div className={styles.mapInfo}>
            <p className={styles.mapInfoName}>{jobData.name}</p>
            <div className={styles.mapInfoInfoContacts}>
              <img className={styles.mapInfoAddressIcon} src={location} />
              {jobData.address}
            </div>
            <p className={styles.mapInfoInfoContacts}>{jobData.phone}</p>
            <p className={styles.mapInfoInfoContacts}>{jobData.email}</p>
          </div>
          <div className={styles.backgroundCircle}></div>
        </div>
        <Map
          position={{
            lat: Number(jobData.location.lat),
            long: Number(jobData.location.long),
          }}
        />
      </div>
    </div>
  );
}

export default withRouter(JobDetails);
