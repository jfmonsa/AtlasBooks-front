import Select from "react-select";

const SingleSelect = ({options, selectName, onChangeCallback, placeholder}) => {
  return (
    <>
      <Select
        name={selectName}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={onChangeCallback}
        placeholder={placeholder}
        isSearchable={true}
      />
    </>
  );
};
export default SingleSelect;
