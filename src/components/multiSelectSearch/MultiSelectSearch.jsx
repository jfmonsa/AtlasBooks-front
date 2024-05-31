import React, {useState} from "react";

import Select from "react-select";

const MultiSelectSearch = ({
  selectName,
  options,
  onChangeCallback,
  placeholder,
  className = "basic-single",
}) => {
  const [isSearchable, setIsSearchable] = useState(true);
  // TODO: No eliminar, esperar a ver si son necesarios más adelante
  //   const [isClearable, setIsClearable] = useState(true);
  //   const [isDisabled, setIsDisabled] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);

  return (
    <Select
      className={className}
      classNamePrefix="select"
      // TODO: No eliminar, esperar a ver si son necesarios más adelante
      // isDisabled={isDisabled}
      // isLoading={isLoading}
      // isClearable={isClearable}
      onChange={onChangeCallback}
      isSearchable={isSearchable}
      name={selectName}
      options={options}
      placeholder={placeholder}
    />
  );
};

export default MultiSelectSearch;
