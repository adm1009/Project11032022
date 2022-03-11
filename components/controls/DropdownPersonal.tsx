import React, { useState } from "react";

const DropdownPersonal = (props:any) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e:any) => {
    setSelectedOption(e.target.value);
    props.onChange(e.target.value);
  };
  return (
    <select value={selectedOption} onChange={handleChange}>
      {props.options.map((item:any) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
export default DropdownPersonal;
