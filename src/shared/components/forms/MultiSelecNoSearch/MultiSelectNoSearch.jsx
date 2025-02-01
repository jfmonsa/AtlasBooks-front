import Select from "react-select";

export function MultiSelectNoSearch({
  options,
  selectName,
  onChangeCallback,
  placeholder,
}) {
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
}
