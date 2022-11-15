export default {
  navigation:
    "flex  items-center h-[52px] w-full min-w-min my-[17px] xl:mt-[41px] xl:mb-[35px] xl:w-auto bg-white shadow-3xl rounded-[10.4px] ",
  button:
    "relative inline-flex w-full justify-center items-center pl-[23px] pr-[31px]",
  pageNumberContainer: "flex-row flex px-[50px] h-full",
  pageNumberLink(isActive: boolean) {
    return `flex justify-center items-center h-full w-[31px] font-bold text-[20.8px] active:text-[#5876C5] ${
      isActive
        ? "text-[#5876C5] border-y-[2.6px] border-solid border-b-[#5876C5] border-t-[#ffffff]"
        : "text-[#70778B] border-y-[2.6px] border-y-[#ffffff]"
    }`;
  },
  separator:
    "border-r-[1.3px] w-[1.3px] border-solid border-[#DEE3EF] h-[31.2px]",
};
