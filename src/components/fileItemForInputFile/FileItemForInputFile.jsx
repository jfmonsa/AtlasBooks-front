import getFileIcon from "../../utils/getFileIcon";
import formatFileSize from "../../utils/formatFileSize";
import {FaTrashAlt} from "react-icons/fa";

const FileItemForInputFile = ({file, removeFile}) => {
  return (
    <li className="dragAndDropFile__fileListItem">
      <img
        className="dragAndDropFile__fileListItem__fileIcon"
        src={getFileIcon(file)}
        alt={`Icono del archivo tipo ${file.type}`}
      />
      <span className="dragAndDropFile__fileListItem__fileName">
        {file.name}
      </span>
      <span>{" - "}</span>
      <span className="dragAndDropFile__fileListItem__fileSize">
        {formatFileSize(file.size)}
      </span>
      <FaTrashAlt
        className="dragAndDropFile__fileListItem__fileRemove"
        onClick={() => removeFile(file)}
      />
    </li>
  );
};

export default FileItemForInputFile;
