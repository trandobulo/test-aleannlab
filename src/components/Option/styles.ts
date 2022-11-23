export default {
  option(type: "optionBlue" | "optionYellow") {
    const baseLayer: string =
      "flex items-center justify-center rounded-[8px] mr-[8px]";
    const buttonOptionBlueLayer: string =
      "bg-[#a1b1db32] border-solid border border-[#55699e30] font-bold text-[16px] text-[#55699E]  px-[12.6px] xl:w-[222px] h-[49px] first-letter:uppercase";
    const buttonOptionYellowLayer: string =
      "bg-[#ffcf0030] border-solid border border-[#ffcf00] font-bold text-[16px] text-[#988B49] px-[12.6px] xl:w-[222px] h-[50px] first-letter:uppercase";

    switch (type) {
      case "optionYellow":
        return `${baseLayer} ${buttonOptionYellowLayer}`;
        break;
      case "optionBlue":
        return `${baseLayer} ${buttonOptionBlueLayer}`;
        break;
      default:
        return `${baseLayer} ${buttonOptionBlueLayer}`;
    }
  },

  buttonIcon: "mr-[19px]",
};
