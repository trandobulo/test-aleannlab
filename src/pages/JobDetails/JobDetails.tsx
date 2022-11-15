import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { JobDetailsProps } from "./types";
import { JobData } from "../../components/JobBar/types";
import Button from "../../components/Button/Button";
import TimeAgo from "react-timeago";
import { withRouter } from "react-router-dom";
import share from "../../svg/share.svg";
import bookmark from "../../svg/bookmark.svg";
import bookmarkStar from "../../svg/bookmarkStar.svg";
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

  const styles = {
    jobDetails: "flex xl:justify-center px-[15px] py-[24px]",
    jobDetailsColumn: " xl:w-[721px] mr-[135px]",
    jobDetailsHeader: "flex-col min-w-min",
    title:
      " block text-[28px]  text-[#3A4562] font-bold capitalize leading-[24px]  border-solid border-b pb-[12px]  mb-[24px] border-b-[#3A4562]/[.13]",
    titleSmall:
      "first-letter:uppercase text-[18px] text-[#38415D]/[.82] leading-[24px] font-normal mb-[4px] tracking-[-0.52px]",
    jobDetailsHeaderOptions:
      "flex text-[18px] text-[#3A4562] font-['Roboto'] tracking-[-0.56px] mb-[32px] min-w-min",
    bookmarkContainer:
      "flex items-center first-letter:uppercase w-[160px] h-[32px] mr-[31px]",
    bookmarkIcon: " w-[20px] h-[20px] mr-[20px]",
    shareContainer: "flex items-center w-[84px] h-[32px]",
    shareIcon: " w-[18px] h-[20px] mr-[15px]",

    jobDescription: "",
    jobTitle:
      "mb-[5px] font-bold text-[24px] text-[#3A4562] leading-[30px] tracking-[-0.75px]",
    timeAgo: "text-[#38415D]/[.60] first-letter:uppercase",
    salaryContainer: "flex justify-between items-center mb-[14px]",

    salary:
      "flex-col text-right first-letter:uppercase text-[#3A4562]  font-bold text-[20px]",
    description:
      "whitespace-pre-wrap text-[18px] text-[#38415D]/[.82] leading-[24px] font-normal mb-[4px]  tracking-[-0.52px]",
    buttonContainer: "flex w-full justify-center mb-[153px] ",
    optionContainer:
      " flex min-w-[420px] whitespace-nowrap overflow-auto scrollbar-hide mt-[10px] mb-[22px] ",
    picture:
      "rounded-[8px] mr-[8px] object-cover w-[209px] min-w-[209px]  h-[115px] ",
    infoBlock: "mb-[55px]",
    map: "w-[402px] h-[436px] bg-indigo-500 rounded-[8px]",
  };

  console.log(jobData);

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
          <h2 className={styles.title}>job details</h2>
          <div className={styles.jobDetailsHeaderOptions}>
            <div className={styles.bookmarkContainer}>
              <img
                className={styles.bookmarkIcon}
                src={changeBookmarkIcon(useWindowWidth())}
              ></img>
              save to my list
            </div>
            <div className={styles.shareContainer}>
              <img className={styles.shareIcon} src={share}></img> share
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
          <h2 className={styles.title}>attached pictures</h2>
          {renderImages(jobData.pictures)}
        </div>

        <div className={styles.infoBlock}>
          <h2 className={styles.title}>additional info</h2>
          {renderOptions("optionEmployment", jobData.employment_type)}
          {renderOptions("optionBenefits", jobData.benefits)}
        </div>
      </div>
      {useWindowWidth() < 1280 && <h2 className={styles.title}>contacts</h2>}
      <div className={styles.map}></div>
    </div>
  );
}

export default withRouter(JobDetails);
