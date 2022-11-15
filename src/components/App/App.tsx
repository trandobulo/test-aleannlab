import React, { useState, useEffect } from "react";
import JobBoard from "../../pages/JobBoard/JobBoard";
import JobDetails from "../../pages/JobDetails/JobDetails";
import Loader from "../Loader/Loader";
import { Switch, Route, Redirect } from "react-router-dom";
import { JobData } from "../JobBar/types";
import { match } from "assert";

function App() {
  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getJobList = () => {
    const url: string =
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

    fetch(url)
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        setJobList(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getJobList();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/job-board/page/1" />
        </Route>
        <Route exact path="/job-board/page/:pageNumber">
          {!isLoading && <JobBoard jobList={jobList} />}
          {isLoading && <Loader />}
        </Route>
        <Route path="/job-details/id/:jobId">
          {!isLoading && <JobDetails jobList={jobList} />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
