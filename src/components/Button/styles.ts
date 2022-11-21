export default {
  button(
    type: "button" | "buttonOptionBlue" | "buttonOptionYellow" | "buttonArrow"
  ) {
    const baseLayer: string =
      "flex items-center justify-center rounded-[8px] mr-[8px]";
    const buttonLayer: string =
      "bg-[#384564] font-[600] text-[12px] text-[#ffffff] w-[127px] h-[52px] uppercase";
    const buttonOptionBlueLayer: string =
      "bg-[#a1b1db32] border-solid border border-[#55699e30] font-bold text-[16px] text-[#55699E]  px-[12.6px] xl:w-[222px] h-[49px] first-letter:uppercase";
    const buttonOptionYellowLayer: string =
      "bg-[#ffcf0030] border-solid border border-[#ffcf00] font-bold text-[16px] text-[#988B49] px-[12.6px] xl:w-[222px] h-[50px] first-letter:uppercase";
    const buttonArrowLayer: string =
      "bg-[#384654]/[.14] relative left-[-93px] text-[12px] font-[600] text-[#3A4562] w-[213px] h-[50px] hidden xl:flex uppercase";

    switch (type) {
      case "buttonOptionYellow":
        return `${baseLayer} ${buttonOptionYellowLayer}`;
        break;
      case "buttonOptionBlue":
        return `${baseLayer} ${buttonOptionBlueLayer}`;
        break;
      case "buttonArrow":
        return `${baseLayer} ${buttonArrowLayer}`;
        break;
      default:
        return `${baseLayer} ${buttonLayer}`;
    }
  },

  buttonIcon: "mr-[19px]",
};
