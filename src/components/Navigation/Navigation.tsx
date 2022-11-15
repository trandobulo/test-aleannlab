import React from "react";
import styles from "./styles";
import { NavigationProps } from "./types";
import { Link, withRouter } from "react-router-dom";
import chevronLeft from "../../svg/chevron-left.svg";
import chevronRight from "../../svg/chevron-right.svg";

function Navigation({ pagesCount, activePageNumber }: NavigationProps) {
  const renderPageNumberLinks = (pagesCount: number) => {
    const arr: number[] = [];

    for (let i: number = 1; i <= pagesCount; i++) {
      arr.push(i);
    }

    return arr.map((item: number) => {
      return (
        <Link to={`/job-board/page/${item}`}>
          <button
            className={styles.pageNumberLink(item === activePageNumber)}
            key={item}
          >
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
      <button className={styles.button}>
        <Link to={`/job-board/page/${switchToPage("back", activePageNumber)}`}>
          <img src={chevronLeft}></img>
        </Link>
      </button>

      <div className={styles.separator}></div>
      <div className={styles.pageNumberContainer}>
        {renderPageNumberLinks(pagesCount)}
      </div>
      <div className={styles.separator}></div>
      <button className={styles.button}>
        <Link
          to={`/job-board/page/${switchToPage("forward", activePageNumber)}`}
        >
          <img src={chevronRight}></img>
        </Link>
      </button>
    </nav>
  );
}

export default withRouter<NavigationProps, any>(Navigation);
