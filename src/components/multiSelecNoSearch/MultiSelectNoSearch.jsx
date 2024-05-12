import Select from "react-select";

const MultiSelectNoSearch = ({
  options,
  selectName,
  onChangeCallback,
  placeholder,
}) => {
  return (
    <>
      <Select
        isMulti
        name={selectName}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={onChangeCallback}
        placeholder={placeholder}
      />
    </>
  );
};
export default MultiSelectNoSearch;
