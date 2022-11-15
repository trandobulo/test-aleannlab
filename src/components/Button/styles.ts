export default {
  button(type: "button" | "optionEmployment" | "optionBenefits") {
    const baseLayer: string =
      "flex items-center justify-center rounded-[8px] mr-[8px]";
    const buttonLayer: string =
      "bg-[#384564] font-[600] text-[12px] text-[#ffffff] w-[127px] h-[52px] uppercase";
    const optionEmploymentLayer: string =
      "bg-[#a1b1db32] border-solid border border-[#55699e30] font-bold text-[16px] text-[#55699E] w-[222px] h-[49px] first-letter:uppercase";
    const optionBenefitsLayer: string =
      "bg-[#ffcf0030] border-solid border border-[#ffcf00] font-bold text-[16px] text-[#988B49] w-[222px] h-[50px] first-letter:uppercase";

    switch (type) {
      case "optionBenefits":
        return `${baseLayer} ${optionBenefitsLayer}`;
        break;
      case "optionEmployment":
        return `${baseLayer} ${optionEmploymentLayer}`;
        break;
      default:
        return `${baseLayer} ${buttonLayer}`;
    }
  },
};
