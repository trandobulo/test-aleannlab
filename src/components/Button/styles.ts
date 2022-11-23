export default {
  button(type: "button" | "buttonArrow") {
    const baseLayer: string =
      "flex items-center justify-center rounded-[8px] mr-[8px]";
    const buttonLayer: string =
      "bg-[#384564] font-[600] text-[12px] text-[#ffffff] w-[127px] h-[52px] uppercase";
    const buttonArrowLayer: string =
      "bg-[#384654]/[.14] relative left-[-93px] text-[12px] font-[600] text-[#3A4562] w-[213px] h-[50px] hidden xl:flex uppercase";

    switch (type) {
      case "buttonArrow":
        return `${baseLayer} ${buttonArrowLayer}`;
        break;
      default:
        return `${baseLayer} ${buttonLayer}`;
    }
  },

  buttonIcon: "mr-[19px]",
};
