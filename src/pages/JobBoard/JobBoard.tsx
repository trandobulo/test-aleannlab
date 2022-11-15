import React from "react";
import JobBar from "../../components/JobBar/JobBar";
import Navigation from "../../components/Navigation/Navigation";
import { JobData } from "../../components/JobBar/types";
import styles from "./styles";
import { withRouter } from "react-router-dom";

import { JobBoardProps } from "./types";

function JobBoard({ match, jobList }: JobBoardProps): JSX.Element {
  const pagesCount = Math.ceil(jobList.length / 10);

  const renderAmountOfItems = (
    items: JobData[],
    page: number,
    itemsCount: number
  ) => {
    const arr: JobData[] = [];

    for (let i: number = (page - 1) * itemsCount; i < page * itemsCount; i++) {
      if (items[i]) {
        arr.push(items[i]);
      }
    }

    return arr.map((jobItem: JobData) => {
      return (
        <React.Fragment key={jobItem.id}>
          <JobBar jobData={jobItem} />
        </React.Fragment>
      );
    });
  };

  return (
    <div className={styles.jobBoard}>
      {renderAmountOfItems(jobList, Number(match.params.pageNumber), 10)}
      <Navigation
        pagesCount={pagesCount}
        activePageNumber={Number(match.params.pageNumber)}
      />
    </div>
  );
}

export default withRouter(JobBoard);
