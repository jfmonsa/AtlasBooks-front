import "./dragAndDropFiles.css";
import {useDropzone} from "react-dropzone";
import {useState, useCallback, useEffect} from "react";
import addFileIcon from "../../assets/icons/dragAndDropFile.svg";
import FileItemForInputFile from "../fileItemForInputFile/FileItemForInputFile";

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
          <FileItemForInputFile
            key={index}
            file={file}
            removeFile={removeFile}
          />
        ))}
      </ul>
    </div>
  );
};
export default DragAndDropFiles;
