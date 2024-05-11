import React, {useState} from "react";

import Select from "react-select";

const MultiSelectSearch = ({
  selectName,
  labelText,
  options,
  onChangeCallback,
}) => {
  const [isSearchable, setIsSearchable] = useState(true);
  // TODO: No eliminar, esperar a ver si son necesarios más adelante
  //   const [isClearable, setIsClearable] = useState(true);
  //   const [isDisabled, setIsDisabled] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <label>{labelText}</label>
      <Select
        className="basic-single"
        classNamePrefix="select"
        // TODO: No eliminar, esperar a ver si son necesarios más adelante
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={isClearable}
        onChange={onChangeCallback}
        isSearchable={isSearchable}
        name={selectName}
        options={options}
      />

      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "1em",
        }}
      ></div>
    </div>
  );
};

export default MultiSelectSearch;
