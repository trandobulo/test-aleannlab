import React from "react";
import styles from "./styles";
import { PaginationProps } from "./types";
import { Link, withRouter } from "react-router-dom";
import chevronLeft from "../../svg/chevron-left.svg";
import chevronRight from "../../svg/chevron-right.svg";

function Pagination({ jobList, activePageNumber, pageSize }: PaginationProps) {
  const pagesCount: number = Math.ceil(jobList.length / pageSize);

  const renderPageNumberLinks = (pagesCount: number): JSX.Element[] => {
    return [...new Array(pagesCount)].map((item: number, index: number) => {
      item = index + 1;
      return (
        <Link to={`/jobs?page=${item}`} key={item}>
          <button className={styles.pageNumberLink(item === activePageNumber)}>
            {item}
          </button>
        </Link>
      );
    });
  };

  const switchToPage = (
    direction: "back" | "forward",
    activePageNumber: number
  ): number => {
    switch (direction) {
      case "back":
        return activePageNumber > 1 ? activePageNumber - 1 : activePageNumber;
        break;
      case "forward":
        return activePageNumber < pagesCount
          ? activePageNumber + 1
          : activePageNumber;
        break;
      default:
        return activePageNumber;
    }
  };

  return (
    <nav className={styles.navigation}>
      <Link to={`/jobs?page=${switchToPage("back", activePageNumber)}`}>
        <button className={styles.button("left")}>
          <img src={chevronLeft}></img>
        </button>
      </Link>

      <div className={styles.separator}></div>
      <div className={styles.pageNumberContainer}>
        {renderPageNumberLinks(pagesCount)}
      </div>
      <div className={styles.separator}></div>
      <Link to={`/jobs?page=${switchToPage("forward", activePageNumber)}`}>
        <button className={styles.button("right")}>
          <img src={chevronRight}></img>
        </button>
      </Link>
    </nav>
  );
}

export default withRouter<PaginationProps, any>(Pagination);
