import React, {useState} from "react";

import Select from "react-select";

const MultiSelectSearch = ({
  selectName,
  options,
  onChangeCallback,
  placeholder,
  className = "basic-single",
}) => {
  // TODO: No eliminar, esperar a ver si son necesarios más adelante
  //   const [isClearable, setIsClearable] = useState(true);
  //   const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Select
      className={className}
      classNamePrefix="select"
      onChange={onChangeCallback}
      isSearchable={true}
      name={selectName}
      options={options}
      placeholder={placeholder}
    />
  );
};

export default MultiSelectSearch;
