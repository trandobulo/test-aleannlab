import React, { MouseEventHandler, ReactComponentElement } from "react";
import { match, RouteComponentProps } from "react-router-dom";
import { JobData } from "../JobBar/types";

export interface PaginationProps extends RouteComponentProps {
  jobList: JobData[];
  activePageNumber: number;
  pageSize: number;
}
