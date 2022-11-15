import { RouteComponentProps } from "react-router-dom";
import { JobData } from "../../components/JobBar/types";

export interface JobBoardProps extends RouteComponentProps {
  jobList: JobData[];
  match: {
    params: { pageNumber: number };
    isExact: boolean;
    path: string;
    url: string;
  };
}