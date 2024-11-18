import { useEffect, useState } from "react";

export const useFormState = (initialState) => {
  const handleChange = (e) => {
    const {
      name,
      value,
      type = null,
      checked = null,
      options = null,
    } = e.target;

    setFormData((prevData) => {
      if (type === "select-multiple") {
        // Check if the name already exists in the formData and convert it to an array
        const updatedValue = Array.isArray(prevData[name]) ? value : [value];

        return {
          ...prevData,
          [name]: [updatedValue],
        };
      } else if (type === "radio") {
        return {
          ...prevData,
          [name]: value,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const [formData, setFormData] = useState(initialState);
  return { formData, handleChange };
};
