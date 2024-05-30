import "./dragAndDropFiles.css";
import {useDropzone} from "react-dropzone";
import {useState, useCallback, useEffect} from "react";
import addFileIcon from "../../assets/icons/dragAndDropFile.svg";
import pdfIcon from "../../assets/icons/pdfIcon.svg";
import otherFileIcon from "../../assets/icons/otherFile.svg";
import {FaTrashAlt} from "react-icons/fa";

const DragAndDropFiles = ({onFilesSelected}) => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback(
    acceptedFiles => {
      const updatedFiles = [...files, ...acceptedFiles];
      setFiles(updatedFiles);
      onFilesSelected(updatedFiles); // Llama al callback con los archivos actualizados
    },
    [files, onFilesSelected],
  );

  const removeFile = file => {
    const updatedFiles = files.filter(f => f !== file);
    setFiles(updatedFiles);
    onFilesSelected(updatedFiles); // Llama al callback con los archivos actualizados
  };

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  const getFileIcon = fileToGet => {
    if (fileToGet.type === "application/pdf") return pdfIcon;
    //if (file.type === "application/epub+zip")
    return otherFileIcon;
  };

  const formatFileSize = size => {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
      (size / Math.pow(1024, i)).toFixed(2) * 1 +
      " " +
      ["B", "KB", "MB", "GB", "TB"][i]
    );
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className={`dragAndDropFile ${isDragActive ? "dragAndDropFile--active" : ""}`}
      >
        <img
          className="dragAndDropFile__img"
          src={addFileIcon}
          alt="Icono de del input para subir archivo"
        />
        <p className="dragAndDropFile__label">
          {isDragActive
            ? "Suelta los archivos aquí..."
            : "Arrastra y suelta varios archivos o haz clic para seleccionar archivos"}
        </p>
        <p className="dragAndDropFile__label-2">PDF, EPUB.</p>
        <input {...getInputProps()} />
      </div>
      <ul className="dragAndDropFile__fileList">
        {files.map((file, index) => (
          <li className="dragAndDropFile__fileListItem" key={index}>
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
        ))}
      </ul>
    </div>
  );
};
export default DragAndDropFiles;
