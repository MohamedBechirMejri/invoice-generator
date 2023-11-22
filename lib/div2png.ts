import { toPng } from "html-to-image";

export const div2png = (div: HTMLElement, number: number) => {
  toPng(div).then(img => {
    const link = document.createElement("a");
    link.href = img;
    link.download = `invoice#${number}.png`;
    link.click();
  });
};
