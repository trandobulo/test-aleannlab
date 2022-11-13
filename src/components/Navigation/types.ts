import React, { MouseEventHandler } from "react";

export interface NavigationProps {
  pagesCount: number;
  navHandler: MouseEventHandler<HTMLButtonElement>;
  activePage: number;
}
