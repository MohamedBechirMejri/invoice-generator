import html2canvas from "html2canvas";

export const div2png = (div: HTMLElement, number: number) => {
  html2canvas(div).then(canvas => {
    const img = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = img;
    link.download = `invoice#${number}.png`;
    link.click();
  });
};
