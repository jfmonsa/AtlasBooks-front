import Select from "react-select";

const MultiSelectSearch = ({
  selectName,
  options,
  onChangeCallback,
  placeholder,
  className = "basic-single",
  value = null, // Añadido el valor
}) => {
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
      value={value} // Pasa el valor al componente Select
    />
  );
};

export default MultiSelectSearch;
