import { RouteComponentProps } from "react-router-dom";
import { JobData } from "../../components/JobBar/types";

export interface JobDetailsProps extends RouteComponentProps {
  jobList: JobData[];
  match: {
    params: { jobId: string };
    isExact: boolean;
    path: string;
    url: string;
  };
}
