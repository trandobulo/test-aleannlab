import React from "react";
import JobBar from "../../components/JobBar/JobBar";
import Pagination from "../../components/Pagination/Pagination";
import { JobData } from "../../components/JobBar/types";
import styles from "./styles";
import { withRouter } from "react-router-dom";

import { JobBoardProps } from "./types";

function JobBoard({ page, pageSize, jobList }: JobBoardProps): JSX.Element {
  const renderAmountOfItems = (
    items: JobData[],
    page: number,
    itemsCount: number
  ): JSX.Element[] => {
    const arr: JSX.Element[] = [];

    for (let i: number = (page - 1) * itemsCount; i < page * itemsCount; i++) {
      if (items[i]) {
        arr.push(
          <React.Fragment key={i}>
            <JobBar jobData={items[i]} />
          </React.Fragment>
        );
      }
    }

    return arr;
  };

  return (
    <div className={styles.jobBoard}>
      {renderAmountOfItems(jobList, Number(page), pageSize)}
      <Pagination
        jobList={jobList}
        activePageNumber={Number(page)}
        pageSize={pageSize}
      />
    </div>
  );
}

export default withRouter(JobBoard);
