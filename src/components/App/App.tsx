import React, { useState, useEffect } from "react";
import JobBoard from "../../pages/JobBoard/JobBoard";
import JobDetails from "../../pages/JobDetails/JobDetails";
import Loader from "../Loader/Loader";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { JobListState, IsLoadingState } from "./types";

import styles from "./styles";

const PAGE_SIZE: number = 10;

function App(): JSX.Element {
  const [jobList, setJobList]: JobListState = useState([]);
  const [isLoading, setIsLoading]: IsLoadingState = useState(true);
  const [isError, setError]: IsLoadingState = useState(false);

  const getJobList = (): void => {
    const url: string =
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

    fetch(url)
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setJobList(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getJobList();
  }, []);

  const useQuery = (): URLSearchParams => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  let query: URLSearchParams = useQuery();

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/jobs?page=1" />
        </Route>
        <Route exact path="/jobs">
          {!isLoading && !isError && jobList.length > 1 && (
            <JobBoard
              jobList={jobList}
              page={query.get("page")}
              pageSize={PAGE_SIZE}
            />
          )}
          {isError && (
            <p className={styles.errorMassage}>
              Ups, there is a problem while loading data from server. Try to
              reload page or repeat your request later
            </p>
          )}
          {isLoading && <Loader />}
        </Route>
        <Route path="/jobs/:jobId">
          {!isLoading && <JobDetails jobList={jobList} />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
