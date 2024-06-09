import pdfIcon from "../assets/icons/pdfIcon.svg";
import otherFileIcon from "../assets/icons/otherFile.svg";

const getFileIcon = fileToGet => {
  if (fileToGet?.type === "application/pdf") return pdfIcon;
  return otherFileIcon;
};
export default getFileIcon;
