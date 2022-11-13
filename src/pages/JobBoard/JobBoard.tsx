import React, {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  MouseEventHandler,
} from "react";
import JobBar from "../../components/JobBar/JobBar";
import Navigation from "../../components/Navigation/Navigation";
import { JobData } from "../../components/JobBar/types";
import styles from "./styles";

function JobBoard(): JSX.Element {
  const [jobList, setJobList]: [
    JobData[] | [],
    Dispatch<SetStateAction<[] | JobData[]>>
  ] = useState([]);

  const [isLoading, setIsLoading]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(true);

  const [activePage, setActivePage]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(1);

  const pagesCount = Math.floor(jobList.length / 10);

  const getJobList = () => {
    const url: string =
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

    fetch(url)
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data: JobData[]) => {
        setJobList(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getJobList();
  }, []);

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

  const navHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    const id = e.currentTarget.dataset.id;
    switch (id) {
      case "left":
        if (activePage > 1) {
          setActivePage(activePage - 1);
        }
        break;
      case "right":
        if (activePage < pagesCount) {
          setActivePage(activePage + 1);
        }
        break;
      default:
        setActivePage(Number(id));
    }
  };

  return (
    <div className={styles.jobBoard}>
      {!isLoading && renderAmountOfItems(jobList, activePage, 10)}
      <Navigation
        activePage={activePage}
        pagesCount={pagesCount}
        navHandler={navHandler}
      />
    </div>
  );
}

export default JobBoard;
