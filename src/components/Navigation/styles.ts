const styles = {
  navigation:
    "flex  items-center h-[52px] bg-white drop-shadow-[2px_1px_7px_rgba(0,0,0,0.08)] drop-shadow-[0_2px_1px_-1px_rgba(0,0,0,0.04)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)] rounded-md ",
  button(direction: "left" | "right") {
    return `relative inline-flex items-center rounded-l-md bg-white pl-[23px] pr-[31px]  text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${
      direction === "left" ? "rounded-l-md" : "rounded-r-md"
    }`;
  },
  buttonRight:
    "relative inline-flex items-center rounded-r-md  bg-white pl-[23px] pr-[31px]  text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",
  pageNumberContainer: "flex-row flex px-[50px]",
  pageNumberLink(isActive: boolean) {
    return `flex justify-center items-center h-full w-[31px] font-bold text-[20.8px] active:text-[#5876C5] ${
      isActive ? "text-[#55699E]" : "text-[#70778B]"
    }`;
  },
  separator:
    "border-r-[1.3px] w-[1.3px] border-solid border-[#DEE3EF] h-[31.2px]",
};

export default styles;
