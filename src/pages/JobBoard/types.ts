import { RouteComponentProps } from "react-router-dom";
import { JobData } from "../../components/JobBar/types";

export interface JobBoardProps extends RouteComponentProps {
  jobList: JobData[];
  page: string | null;
  pageSize: number;
}
