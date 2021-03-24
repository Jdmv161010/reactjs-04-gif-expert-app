import React, { useState } from "react";
import PropTypes from "prop-types";

//setCategories viene destructurado desde las props del componente
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    //Evita comportamientos por defecto del <form/>
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((ctg) => [inputValue, ...ctg]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
