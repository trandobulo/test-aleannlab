import React from "react";
import styles from "./styles";
import { NavigationProps } from "./types";

function Navigation({ pagesCount, navHandler, activePage }: NavigationProps) {
  const chevronLeft = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.497652">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.4974 1.51303C9.67041 0.686035 8.32959 0.686036 7.5026 1.51303L1.51299 7.50264C0.685994 8.32963 0.685994 9.67045 1.51299 10.4974L7.5026 16.4871C8.32959 17.314 9.67041 17.314 10.4974 16.4871C11.3244 15.6601 11.3244 14.3192 10.4974 13.4922L6.00519 9.00004L10.4974 4.50783C11.3244 3.68084 11.3244 2.34002 10.4974 1.51303Z"
          fill="#3A4562"
        />
        <mask
          id="mask0_9482_535"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="18"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4974 1.51303C9.67041 0.686035 8.32959 0.686036 7.5026 1.51303L1.51299 7.50264C0.685994 8.32963 0.685994 9.67045 1.51299 10.4974L7.5026 16.4871C8.32959 17.314 9.67041 17.314 10.4974 16.4871C11.3244 15.6601 11.3244 14.3192 10.4974 13.4922L6.00519 9.00004L10.4974 4.50783C11.3244 3.68084 11.3244 2.34002 10.4974 1.51303Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_9482_535)">
          <rect width="14.2941" height="18" fill="#7D859C" />
        </g>
      </g>
    </svg>
  );

  const chevronRight = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.498465">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.5026 1.51303C8.32959 0.686035 9.67041 0.686036 10.4974 1.51303L16.487 7.50264C17.314 8.32963 17.314 9.67045 16.487 10.4974L10.4974 16.4871C9.67041 17.314 8.32959 17.314 7.5026 16.4871C6.67561 15.6601 6.67561 14.3192 7.5026 13.4922L11.9948 9.00004L7.5026 4.50783C6.6756 3.68084 6.67561 2.34002 7.5026 1.51303Z"
          fill="#3A4562"
        />
        <mask
          id="mask0_9482_543"
          maskUnits="userSpaceOnUse"
          x="6"
          y="0"
          width="12"
          height="18"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5026 1.51303C8.32959 0.686035 9.67041 0.686036 10.4974 1.51303L16.487 7.50264C17.314 8.32963 17.314 9.67045 16.487 10.4974L10.4974 16.4871C9.67041 17.314 8.32959 17.314 7.5026 16.4871C6.67561 15.6601 6.67561 14.3192 7.5026 13.4922L11.9948 9.00004L7.5026 4.50783C6.6756 3.68084 6.67561 2.34002 7.5026 1.51303Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_9482_543)">
          <rect
            width="14.2941"
            height="18"
            transform="matrix(-1 0 0 1 18 0)"
            fill="#7D859C"
          />
        </g>
      </g>
    </svg>
  );

  const renderPageNumberLinks = (pagesCount: number) => {
    const arr: number[] = [];

    for (let i: number = 1; i <= pagesCount; i++) {
      arr.push(i);
    }

    return arr.map((item: number) => {
      return (
        <button
          data-id={item}
          onClick={navHandler}
          className={styles.pageNumberLink(item === activePage)}
          key={item}
        >
          {item}
        </button>
      );
    });
  };

  return (
    <nav className={styles.navigation}>
      <button
        onClick={navHandler}
        data-id={"left"}
        className={styles.button("left")}
      >
        {chevronLeft}
      </button>
      <div className={styles.separator}></div>
      <div className={styles.pageNumberContainer}>
        {renderPageNumberLinks(pagesCount)}
      </div>
      <div className={styles.separator}></div>
      <button
        onClick={navHandler}
        data-id={"right"}
        className={styles.button("right")}
      >
        {chevronRight}
      </button>
    </nav>
  );
}

export default Navigation;
