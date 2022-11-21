export default {
  jobDetails: "flex flex-col xl:flex-row xl:justify-center px-[15px] py-[24px]",
  jobDetailsColumn: " xl:w-[721px] xl:mr-[135px] xl:pl-[93px]",
  jobDetailsHeader:
    "flex justify-between flex-col xl:flex-row min-w-min xl:pb-[9px] xl:mb-[39px] mb-[24px] xl:border-b xl:border-solid xl:border-b-[#3A4562]/[.13]",
  title(type: "static" | "hidable", underlined: boolean = true) {
    const baseLayer: string =
      "block text-[28px]  text-[#3A4562] font-bold capitalize leading-[34px] tracking-[0.41px]";
    const isUnderlined: string = underlined
      ? `${baseLayer} border-solid border-b  border-b-[#3A4562]/[.13] pb-[9px] mb-[24px] xl:mb-[12px]`
      : baseLayer;
    return type === "hidable" ? `${isUnderlined} xl:hidden` : isUnderlined;
  },
  titleSmall:
    "first-letter:uppercase text-[18px] text-[#38415D]/[.82] leading-[24px] font-normal tracking-[-0.52px]",
  jobDetailsHeaderOptions:
    "flex text-[18px] xl:text-[#3A4562] text-[#38415D]/[.82] font-['Roboto'] tracking-[-0.56px] min-w-min",
  bookmarkContainer:
    "flex items-center first-letter:uppercase w-[160px] h-[32px] mr-[36px] xl:mr-[31px] ",
  bookmarkIcon: " w-[20px] h-[20px] mr-[15px]",
  bookmarkIconCaption: "first-letter:uppercase",
  shareContainer: "flex items-center w-[84px] h-[32px]",
  shareIcon: " w-[18px] h-[20px] mr-[15px]",
  shareIconCaption: "first-letter:uppercase",
  descriptionContainer: "mt-[32px]",
  jobTitleContainer: "flex",
  jobTitle:
    "mb-[5px] font-bold text-[24px] text-[#3A4562] leading-[30px] mr-[36px] xl:mr-[60px] tracking-[-0.75px]",
  timeAgo: "text-[#38415D]/[.60] first-letter:uppercase",
  salaryContainer: "flex justify-between items-center mb-[14px] xl:mb-[7px]",
  salary:
    "flex-col min-w-[161px] text-right first-letter:uppercase text-[#3A4562]  font-bold text-[20px]",
  description:
    "whitespace-pre-wrap text-[18px] text-[#38415D]/[.82] leading-[24px] font-normal",
  buttonContainer(type: "hidable" | "static") {
    const baseLayer: string =
      "flex w-full justify-center xl:justify-start xl:pb-0 pb-[70px]";
    return type === "hidable" ? `${baseLayer} hidden xl:flex` : baseLayer;
  },
  optionContainer:
    " flex min-w-[420px] whitespace-nowrap overflow-auto scrollbar-hide pt-[10px] pb-[22px] ",
  picture:
    "rounded-[8px] mr-[8px] object-cover w-[209px] min-w-[209px]  h-[115px] ",
  infoBlock: "mb-[65px] mt-[87px]",
  mapInfoBlock: "h-[218px] w-[402px] bg-[#2A3047] overflow-hidden",
  mapInfo: "absolute z-[1] mx-[63px] mt-[31px] w-[277px]",
  mapInfoName:
    "text-white text-[20px] tracking-[-0.63px] leading-[25px] mb-[8px]",
  mapInfoAddressIcon:
    "inline-block relative bottom-[3px] w-[13px] h-[18px] mr-[8px]",
  mapInfoInfoContacts:
    "text-[18px] text-[#E8EBF3] leading-[24px] font-['Roboto'] mb-[8px]",
  backgroundCircle:
    "relative right-[70px] bottom-[10px] w-[273px] h-[273px] rounded-[140px] bg-[#202336] overflow-hidden",
  mapContainer: " overflow-hidden rounded-[8px] w-[402px] h-[436px]",
};
