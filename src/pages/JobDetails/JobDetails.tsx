import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { JobDetailsProps } from "./types";
import { JobData } from "../../components/JobBar/types";
import Map from "../../components/Map/Map";
import Button from "../../components/Button/Button";
import Option from "../../components/Option/Option";
import TimeAgo from "react-timeago";
import { withRouter, Link } from "react-router-dom";
import share from "../../svg/share.svg";
import bookmark from "../../svg/bookmark.svg";
import bookmarkStar from "../../svg/bookmarkStar.svg";
import location from "../../svg/location.svg";
import styles from "./styles";

function JobDetails({ match, jobList }: JobDetailsProps): JSX.Element {
  const getJobData = (jobList: JobData[], id: string): JobData => {
    const jobData: JobData | undefined = jobList.find(
      (item: JobData) => item.id === id
    );

    if (jobData) {
      return jobData;
    } else {
      throw Error(`Can't find job with id: ${id} `);
    }
  };

  const jobData: JobData = getJobData(jobList, match.params.jobId);

  const changeBookmarkIcon = (windowWidth: number): string => {
    return windowWidth < 1265 ? bookmarkStar : bookmark;
  };

  const renderJobDetailsHeader = (): JSX.Element => {
    return (
      <div className={styles.jobDetailsHeader}>
        <h1 className={styles.title("static", useWindowWidth() < 1265)}>
          job details
        </h1>
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
    );
  };

  const renderDescription = (): JSX.Element => {
    const salary = jobData.salary.replace(/k/g, " 000").replace(/\-/, "—");

    return (
      <>
        <div className={styles.jobTitleContainer}>
          <h4 className={styles.jobTitle}>{jobData.title}</h4>
          {useWindowWidth() > 1265 && (
            <div className={styles.salary}>
              <p className={styles.titleSmall}>brutto, per year</p>
              <p>{salary}</p>
            </div>
          )}
        </div>
        <div className={styles.salaryContainer}>
          <div className={styles.timeAgo}>
            posted <TimeAgo prefix="" date={jobData.updatedAt} />
          </div>
          {useWindowWidth() < 1265 && (
            <div className={styles.salary}>
              <p className={styles.titleSmall}>brutto, per year</p>
              <p>{salary}</p>
            </div>
          )}
        </div>
        <p className={styles.description}>{jobData.description}</p>
      </>
    );
  };

  const renderImages = (pictures: string[]): JSX.Element => {
    return (
      <div className={styles.optionContainer}>
        {pictures.map((item, index) => {
          return <img className={styles.picture} src={item} key={index}></img>;
        })}
      </div>
    );
  };

  const renderOptions = (
    type: "optionBlue" | "optionYellow",
    items: string[]
  ): JSX.Element => {
    const caption: string =
      type === "optionBlue" ? "employment options" : "benefits";
    return (
      <>
        <h5 className={styles.titleSmall}>{caption}</h5>
        <div className={styles.optionContainer}>
          {items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Option type={type} value={item} />
              </React.Fragment>
            );
          })}
        </div>
      </>
    );
  };

  const renderMap = (): JSX.Element => {
    return (
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
          {useWindowWidth() > 1265 && (
            <div className={styles.backgroundCircle}></div>
          )}
        </div>
        <Map
          position={{
            lat: Number(jobData.location.lat),
            lng: Number(jobData.location.long),
          }}
        />
      </div>
    );
  };

  return (
    <div className={styles.jobDetails}>
      <div className={styles.jobDetailsColumn}>
        {renderJobDetailsHeader()}
        <div className={styles.buttonContainer("hidable")}>
          <Button type="button" value="apply now" />
        </div>
        <div className={styles.descriptionContainer}>{renderDescription()}</div>
        <div className={styles.buttonContainer("static")}>
          <Button type="button" value="apply now" />
        </div>
        <div className={styles.infoBlock}>
          <h1 className={styles.title("static")}>additional info</h1>
          {renderOptions("optionBlue", jobData.employment_type)}
          {renderOptions("optionYellow", jobData.benefits)}
        </div>
        <div className={styles.infoBlock}>
          <h1 className={styles.title("static")}>attached pictures</h1>
          {renderImages(jobData.pictures)}
        </div>
        <Link to="/jobs?page=1">
          <Button type="buttonArrow" value="return to job board" />
        </Link>
      </div>
      <h1 className={styles.title("hidable")}>contacts</h1>
      {renderMap()}
    </div>
  );
}

export default withRouter(JobDetails);
