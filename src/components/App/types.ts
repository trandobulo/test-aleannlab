import { Dispatch, SetStateAction } from "react";

export type JobListState = [[], Dispatch<SetStateAction<[]>>];
export type IsLoadingState = [boolean, Dispatch<SetStateAction<boolean>>];
