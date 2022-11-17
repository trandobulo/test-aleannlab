export default {
  jobDetails: "flex flex-col xl:flex-row xl:justify-center px-[15px] py-[24px]",
  jobDetailsColumn: " xl:w-[721px] xl:mr-[135px] xl:pl-[93px]",
  jobDetailsHeader: "flex-col min-w-min",
  title(type: "normal" | "hidable") {
    const baseLayer: string =
      "block text-[28px]  text-[#3A4562] font-bold capitalize leading-[24px]  border-solid border-b pb-[12px]  mb-[24px] border-b-[#3A4562]/[.13]";
    return type === "hidable" ? `${baseLayer} xl:hidden` : baseLayer;
  },
  titleSmall:
    "first-letter:uppercase text-[18px] text-[#38415D]/[.82] leading-[24px] font-normal mb-[4px] tracking-[-0.52px]",
  jobDetailsHeaderOptions:
    "flex text-[18px] text-[#3A4562] font-['Roboto'] tracking-[-0.56px] mb-[32px] min-w-min",
  bookmarkContainer:
    "flex items-center first-letter:uppercase w-[160px] h-[32px] mr-[31px] ",
  bookmarkIcon: " w-[20px] h-[20px] mr-[20px]",
  bookmarkIconCaption: "first-letter:uppercase",
  shareContainer: "flex items-center w-[84px] h-[32px]",
  shareIcon: " w-[18px] h-[20px] mr-[15px]",
  shareIconCaption: "first-letter:uppercase",
  jobTitle:
    "mb-[5px] font-bold text-[24px] text-[#3A4562] leading-[30px] tracking-[-0.75px]",
  timeAgo: "text-[#38415D]/[.60] first-letter:uppercase",
  salaryContainer: "flex justify-between items-center mb-[14px]",
  salary:
    "flex-col text-right first-letter:uppercase text-[#3A4562]  font-bold text-[20px]",
  description:
    "whitespace-pre-wrap text-[18px] text-[#38415D]/[.82] leading-[24px] font-normal mb-[4px]   ",
  buttonContainer: "flex w-full justify-center mb-[153px] ",
  optionContainer:
    " flex min-w-[420px] whitespace-nowrap overflow-auto scrollbar-hide pt-[10px] pb-[22px] ",
  picture:
    "rounded-[8px] mr-[8px] object-cover w-[209px] min-w-[209px]  h-[115px] ",
  infoBlock: "mb-[65px]",
  mapInfoBlock: "h-[218px] w-[402px] bg-[#2A3047] overflow-hidden",
  mapInfo: "absolute z-[1] mx-[63px] mt-[31px] w-[277px]",
  mapInfoName:
    "text-white text-[20px] tracking-[-0.63px] leading-[25px] mb-[8px]",
  mapInfoAddressIcon:
    "inline-block relative bottom-[3px] w-[13px] h-[18px] mr-[8px]",
  mapInfoInfoContacts:
    "text-white text-[18px] text-[18px] leading-[24px] font-['Roboto'] mb-[8px]",
  backgroundCircle:
    "relative right-[70px] bottom-[10px] w-[273px] h-[273px] rounded-[140px] bg-[#202336] overflow-hidden",
  mapContainer: " overflow-hidden rounded-[8px] w-[402px] h-[436px]",
};
