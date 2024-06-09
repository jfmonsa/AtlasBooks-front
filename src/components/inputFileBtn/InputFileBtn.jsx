import "./inputFileBtn.css";
import FileItemForInputFile from "../fileItemForInputFile/FileItemForInputFile";
import {LuUpload} from "react-icons/lu";
import {useDropzone} from "react-dropzone";
import {useState, useCallback} from "react";

const InputFileBtn = ({onFilesSelected}) => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback(
    acceptedFiles => {
      const newFile = acceptedFiles[0];
      setFile(newFile);
      onFilesSelected(newFile); // Llama al callback con el nuevo archivo
    },
    [onFilesSelected],
  );

  const removeFile = () => {
    setFile(null);
    onFilesSelected(null); // Llama al callback con null
  };

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    multiple: false, // Solo acepta un archivo
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`black2Btn baseBtn formCustomBtn inputFileBtn`}
      >
        <span>Sube una imagen</span>
        <LuUpload />
        <input {...getInputProps()} />
      </div>
      {file && (
        <ul className="dragAndDropFile__fileList">
          <FileItemForInputFile file={file} removeFile={removeFile} />
        </ul>
      )}
    </div>
  );
};

export default InputFileBtn;
