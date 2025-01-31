import Select from "react-select";

export function MultiSelectSearch({
  selectName,
  options,
  onChangeCallback,
  placeholder,
  className = "basic-single",
  value = null, // Añadido el valor
}) {
  return (
    <Select
      isMulti
      className={className}
      classNamePrefix="select"
      onChange={onChangeCallback}
      isSearchable={true}
      name={selectName}
      options={options}
      placeholder={placeholder}
      value={value}
    />
  );
}
