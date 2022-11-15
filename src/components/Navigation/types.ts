import React, { MouseEventHandler, ReactComponentElement } from "react";
import { match, RouteComponentProps } from "react-router-dom";

export interface NavigationProps extends RouteComponentProps {
  pagesCount: number;
  activePageNumber: number;
}
