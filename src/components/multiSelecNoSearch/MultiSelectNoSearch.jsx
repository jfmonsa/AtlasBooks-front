import Select from "react-select";

const MultiSelectNoSearch = ({
  labelText,
  options,
  selectName,
  onChangeCallback,
}) => {
  return (
    <div>
      <label>{labelText}</label>
      <Select
        // defaultValue={[colourOptions[2], colourOptions[3]]}
        isMulti
        name={selectName}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={onChangeCallback}
      />
    </div>
  );
};
export default MultiSelectNoSearch;
